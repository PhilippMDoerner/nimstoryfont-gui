import { NgTemplateOutlet } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  DestroyRef,
  inject,
  signal,
  TemplateRef,
} from '@angular/core';
import {
  takeUntilDestroyed,
  toObservable,
  toSignal,
} from '@angular/core/rxjs-interop';
import { NgbModal, NgbTooltip } from '@ng-bootstrap/ng-bootstrap';
import { FormlyFieldConfig } from '@ngx-formly/core';
import {
  combineLatestWith,
  filter,
  map,
  shareReplay,
  Subject,
  take,
  withLatestFrom,
} from 'rxjs';
import { ArticleNode, NodeLinkRaw, NodeMap } from 'src/app/_models/nodeMap';
import { FormlyService } from 'src/app/_services/formly/formly-service.service';
import { RoutingService } from 'src/app/_services/routing.service';
import { GlobalStore } from 'src/app/global.store';
import { ButtonComponent } from 'src/design/atoms/button/button.component';
import {
  DEFAULT_SEARCH_PREFERENCES,
  SidebarOption,
} from 'src/design/molecules';
import { GraphMenuService } from 'src/design/organisms/graph/graph-menu.service';
import { GraphService } from 'src/design/organisms/graph/graph.service';
import { filterNil } from 'src/utils/rxjs-operators';
import { capitalize } from 'src/utils/string';
import { CardComponent } from '../../../../design/atoms/card/card.component';
import { IconComponent } from '../../../../design/atoms/icon/icon.component';
import { SelectableEntryComponent } from '../../../../design/atoms/selectable-entry/selectable-entry.component';
import { ArticleFooterComponent } from '../../../../design/molecules/article-footer/article-footer.component';
import { CollapsiblePanelComponent } from '../../../../design/molecules/collapsible-panel/collapsible-panel.component';
import { ConfirmationToggleButtonComponent } from '../../../../design/molecules/confirmation-toggle-button/confirmation-toggle-button.component';
import { FormComponent } from '../../../../design/molecules/form/form.component';
import { SearchFieldComponent } from '../../../../design/molecules/search-field/search-field.component';
import { GraphComponent } from '../../../../design/organisms/graph/graph.component';
import { PageContainerComponent } from '../../../../design/organisms/page-container/page-container.component';
import { GraphPageStore } from './graph-page.store';

const GRAPH_INFO_RULES = [
  {
    nodeKind1: 'Organization',
    nodeKind2: 'Location',
    description: "The location contains that organization's headquarter",
  },
  {
    nodeKind1: 'Organization',
    nodeKind2: 'Character',
    description: 'The character is a member of that organization',
  },
  {
    nodeKind1: 'Location',
    nodeKind2: 'Location',
    description: 'The location is part of the other location',
  },
  {
    nodeKind1: 'Location',
    nodeKind2: 'Character',
    description: 'The character is in that location',
  },
  {
    nodeKind1: 'Character',
    nodeKind2: 'Item',
    description: 'The character owns that item',
  },
  {
    nodeKind1: 'Organization',
    nodeKind2: 'Organization',
    description:
      'The organization is a smaller group within the other organization',
  },
  {
    nodeKind1: 'Any',
    nodeKind2: 'Any',
    description: 'A custom relationship between 2 articles',
  },
];

const GRAPH_INTERACTIONS = [
  {
    event: 'Hovering a node',
    description: 'Node changes color',
  },
  {
    event: 'Left-click node',
    description: 'Node gets selected for creating a custom connection',
  },
  {
    event: 'Right-click node',
    description: 'Open a context menu with information about the node',
  },
  {
    event: 'Hovering a link',
    description: 'Link expand and shows label',
  },
  {
    event: 'Right-click link',
    description:
      'Open a context menu with possible actions for the link (some may be disabled for specific kinds of links)',
  },
];

@Component({
  selector: 'app-graph-page',
  standalone: true,
  imports: [
    PageContainerComponent,
    GraphComponent,
    SelectableEntryComponent,
    ArticleFooterComponent,
    ButtonComponent,
    NgbTooltip,
    NgTemplateOutlet,
    FormComponent,
    CardComponent,
    CollapsiblePanelComponent,
    ConfirmationToggleButtonComponent,
    SearchFieldComponent,
    IconComponent,
  ],
  templateUrl: './graph-page.component.html',
  styleUrl: './graph-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [GraphMenuService, GraphService],
})
export class GraphPageComponent {
  EMPTY_LABEL = '<label>';
  globalStore = inject(GlobalStore);
  store = inject(GraphPageStore);
  routingService = inject(RoutingService);
  formlyService = inject(FormlyService);
  modalService = inject(NgbModal);
  graphService = inject(GraphService);
  graphMenuService = inject(GraphMenuService);

  selectedNodes = toSignal(this.graphService.nodeSelectionChanged$);
  firstSelectedNode = computed(() => this.selectedNodes()?.[0]);
  secondSelectedNode = computed(() => this.selectedNodes()?.[1]);
  nodeQuery$ = new Subject<string>();
  graphData = computed<NodeMap | undefined>(() =>
    this.filterGraphData(this.store.graph(), this.activeCategories()),
  );
  graphData$ = toObservable(this.graphData);
  searchedNode$ = this.nodeQuery$.pipe(
    withLatestFrom(this.graphData$.pipe(map((graphData) => graphData?.nodes))),
    filter(([query, nodes]) => query.length >= 3 && !!nodes),
    map(([query, nodes]) =>
      (nodes as ArticleNode[]).find((node) =>
        node.record.name.toLowerCase().includes(query.toLowerCase()),
      ),
    ),
    shareReplay(1),
  );

  pageState = signal<'DISPLAY' | 'CREATE'>('DISPLAY');
  isPanelOpen = signal<boolean>(false);

  categories = computed(() =>
    this.nodeTypeOptions.map((option) => ({
      ...option,
      active: this.activeCategories().has(option.label),
    })),
  );

  formlyFields = computed<FormlyFieldConfig[]>(() => [
    this.formlyService.buildInputConfig({
      inputKind: 'NAME',
      key: 'label',
    }),
    this.formlyService.buildInputConfig({
      inputKind: 'NUMBER',
      key: 'weight',
    }),
  ]);
  userModel = signal<Partial<NodeLinkRaw>>({});
  createLabel = signal<string>(this.EMPTY_LABEL);
  formTitle = computed(
    () =>
      `${this.firstSelectedNode()?.record.name} ${this.createLabel()} ${this.secondSelectedNode()?.record.name}`,
  );

  homeUrl = computed(() =>
    this.routingService.getRoutePath('home', {
      campaign: this.globalStore.campaignName(),
    }),
  );

  infoRules = GRAPH_INFO_RULES;
  infoInteractions = GRAPH_INTERACTIONS;

  private AVAILABLE_NODE_TYPES = new Set([
    'Character',
    'Item',
    'Organization',
    'Location',
  ]);
  private nodeTypeOptions = DEFAULT_SEARCH_PREFERENCES.filter((option) =>
    this.AVAILABLE_NODE_TYPES.has(option.label),
  );
  private activeCategories = signal(new Set<string>());
  private createLinkState$ = toObservable(this.store.createLinkState);
  private destructor = inject(DestroyRef);

  constructor() {
    this.searchedNode$
      .pipe(takeUntilDestroyed())
      .subscribe((node) => this.graphService.centerNodeEvents$.next(node));

    this.graphMenuService.linkDeleteEvents$
      .pipe(
        map((event) => event.clickedLink?.id),
        filterNil(),
        takeUntilDestroyed(),
      )
      .subscribe((linkIdToDelete) => this.onDeleteLink(linkIdToDelete));
  }

  toggleSidebarEntry(option: SidebarOption, mode: 'INACTIVE' | 'ACTIVE') {
    const newActiveEntries = new Set(this.activeCategories());
    switch (mode) {
      case 'INACTIVE':
        newActiveEntries.delete(option.label);
        break;
      case 'ACTIVE':
        newActiveEntries.add(option.label);
        break;
    }
    this.activeCategories.set(newActiveEntries);
  }

  onCreateConnection(formData: Partial<NodeLinkRaw>) {
    const selectedNodes = this.selectedNodes();
    const has2NodesSelected = selectedNodes?.length === 2;
    if (!has2NodesSelected) return;

    const rawLink: NodeLinkRaw = {
      ...formData,
      campaign_id: this.globalStore.currentCampaign()?.pk,
      sourceGuid: selectedNodes[0].guid,
      targetGuid: selectedNodes[1].guid,
    } as NodeLinkRaw;
    this.store.createConnection(rawLink);

    this.createLinkState$
      .pipe(
        filter((val) => val === 'success' || val === 'error'),
        combineLatestWith(this.graphService.elements$),
        takeUntilDestroyed(this.destructor),
        take(1),
      )
      .subscribe(() => {
        this.graphService.nodeSelectionChanged$.next([]);
        this.pageState.set('DISPLAY');
        this.graphService.centerNodeEvents$.next(selectedNodes[0]);
      });
  }

  onDeleteLink(linkId: number) {
    this.store.deleteConnection(linkId);
  }

  openModal(content: TemplateRef<any>) {
    this.modalService.open(content, {
      ariaLabelledBy: 'modal-title',
      modalDialogClass: 'border border-info border-3 rounded mymodal',
    });
  }

  private filterGraphData(
    graphData: NodeMap | undefined,
    filterCategories: Set<string>,
  ) {
    const hasActiveFilter = filterCategories.size > 0;

    if (!hasActiveFilter) return graphData;

    const nodes = graphData?.nodes;
    if (!nodes) return undefined;

    const filteredNodes = nodes.filter((node) =>
      this.activeCategories().has(
        capitalize(node.record.article_type.toLowerCase()),
      ),
    );

    const nodeSet = new Set(filteredNodes.map((node) => node.guid));
    const filteredLinks = graphData.links.filter((link) => {
      const sourceGuid = (link.source as ArticleNode).guid;
      const targetGuid = (link.target as ArticleNode).guid;
      return nodeSet.has(sourceGuid) && nodeSet.has(targetGuid);
    });

    return {
      links: filteredLinks,
      nodes: filteredNodes,
    };
  }
}
