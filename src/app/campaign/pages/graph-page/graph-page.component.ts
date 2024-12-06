import { NgTemplateOutlet } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  DestroyRef,
  inject,
  signal,
} from '@angular/core';
import { takeUntilDestroyed, toObservable } from '@angular/core/rxjs-interop';
import { NgbTooltip } from '@ng-bootstrap/ng-bootstrap';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { filter, take } from 'rxjs';
import {
  ArticleNode,
  NodeLinkRaw,
  NodeMap,
  NodeSelection,
} from 'src/app/_models/nodeMap';
import { FormlyService } from 'src/app/_services/formly/formly-service.service';
import { RoutingService } from 'src/app/_services/routing.service';
import { GlobalStore } from 'src/app/global.store';
import { ButtonComponent } from 'src/design/atoms/button/button.component';
import {
  DEFAULT_SEARCH_PREFERENCES,
  SidebarOption,
} from 'src/design/molecules';
import { capitalize } from 'src/utils/string';
import { CardComponent } from '../../../../design/atoms/card/card.component';
import { SelectableEntryComponent } from '../../../../design/atoms/selectable-entry/selectable-entry.component';
import { ArticleFooterComponent } from '../../../../design/molecules/article-footer/article-footer.component';
import { FormComponent } from '../../../../design/molecules/form/form.component';
import { GraphComponent } from '../../../../design/organisms/graph/graph.component';
import { PageContainerComponent } from '../../../../design/organisms/page-container/page-container.component';
import { GraphPageStore } from './graph-page.store';

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
  ],
  templateUrl: './graph-page.component.html',
  styleUrl: './graph-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GraphPageComponent {
  globalStore = inject(GlobalStore);
  store = inject(GraphPageStore);
  routingService = inject(RoutingService);
  formlyService = inject(FormlyService);

  selectedNodes = signal<NodeSelection>([]);
  pageState = signal<'DISPLAY' | 'CREATE'>('DISPLAY');

  graphData = computed<NodeMap | undefined>(() => {
    const hasActiveFilter = this.activeCategories().size > 0;
    const graph = this.store.graph();
    if (!hasActiveFilter) return graph;

    const nodes = graph?.nodes;
    if (!nodes) return undefined;

    const filteredNodes = nodes.filter((node) =>
      this.activeCategories().has(
        capitalize(node.record.article_type.toLowerCase()),
      ),
    );

    const nodeSet = new Set(filteredNodes.map((node) => node.guid));
    const filteredLinks = graph.links.filter((link) => {
      const sourceGuid = (link.source as ArticleNode).guid;
      const targetGuid = (link.target as ArticleNode).guid;
      return nodeSet.has(sourceGuid) && nodeSet.has(targetGuid);
    });

    return {
      links: filteredLinks,
      nodes: filteredNodes,
    };
  });

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

  homeUrl = computed(() =>
    this.routingService.getRoutePath('home', {
      campaign: this.globalStore.campaignName(),
    }),
  );

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
    if (selectedNodes.length !== 2) return;

    const rawLink: NodeLinkRaw = {
      ...formData,
      campaign_id: this.globalStore.currentCampaign()?.pk,
      node1Guid: selectedNodes[0].guid,
      node2Guid: selectedNodes[1].guid,
    } as NodeLinkRaw;
    this.store.createConnection(rawLink);

    this.createLinkState$
      .pipe(
        filter((val) => val === 'success' || val === 'error'),
        takeUntilDestroyed(this.destructor),
        take(1),
      )
      .subscribe(() => this.pageState.set('DISPLAY'));
  }
}
