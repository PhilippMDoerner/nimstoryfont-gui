import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  signal,
} from '@angular/core';
import { RoutingService } from 'src/app/_services/routing.service';
import { GlobalStore } from 'src/app/global.store';
import {
  DEFAULT_SEARCH_PREFERENCES,
  SidebarOption,
} from 'src/design/molecules';
import { ArticleNode, NodeMap } from 'src/design/organisms/graph/data';
import { capitalize } from 'src/utils/string';
import { SelectableEntryComponent } from '../../../../design/atoms/selectable-entry/selectable-entry.component';
import { ArticleFooterComponent } from '../../../../design/molecules/article-footer/article-footer.component';
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
  ],
  templateUrl: './graph-page.component.html',
  styleUrl: './graph-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GraphPageComponent {
  globalStore = inject(GlobalStore);
  store = inject(GraphPageStore);
  routingService = inject(RoutingService);

  private AVAILABLE_NODE_TYPES = new Set(['Character', 'Item', 'Organization']);
  private nodeTypeOptions = DEFAULT_SEARCH_PREFERENCES.filter((option) =>
    this.AVAILABLE_NODE_TYPES.has(option.label),
  );
  private activeEntries = signal(new Set<string>());

  graphData = computed<NodeMap | undefined>(() => {
    const hasActiveFilter = this.activeEntries().size > 0;
    const graph = this.store.graph();
    if (!hasActiveFilter) return graph;

    const nodes = graph?.nodes;
    if (!nodes) return undefined;

    const filteredNodes = nodes.filter((node) =>
      this.activeEntries().has(
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

  entries = computed(() =>
    this.nodeTypeOptions.map((option) => ({
      ...option,
      active: this.activeEntries().has(option.label),
    })),
  );

  homeUrl = computed(() =>
    this.routingService.getRoutePath('home', {
      campaign: this.globalStore.campaignName(),
    }),
  );

  toggleSidebarEntry(option: SidebarOption, mode: 'INACTIVE' | 'ACTIVE') {
    const newActiveEntries = new Set(this.activeEntries());
    switch (mode) {
      case 'INACTIVE':
        newActiveEntries.delete(option.label);
        break;
      case 'ACTIVE':
        newActiveEntries.add(option.label);
        break;
    }
    this.activeEntries.set(newActiveEntries);
  }
}
