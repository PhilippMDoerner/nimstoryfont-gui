import { inject } from '@angular/core';
import { select, selectAll, Selection } from 'd3';
import { ArticleNode, ArticleNodeKind } from 'src/app/_models/nodeMap';
import { ArticleService } from 'src/app/_services/article/article.service';
import { SIDEBAR_ENTRIES } from '../_model/sidebar';

export type MenuData = {
  title: string | undefined;
  description: string | undefined;
  link: string | undefined;
  kind: ArticleNodeKind | undefined;
} & Record<string, any>;

export type GraphElement = Selection<SVGSVGElement, undefined, null, undefined>;

export class GraphMenuService {
  articleService = inject(ArticleService);

  public graphId = 'graph';
  public graphSelector = `#${this.graphId}`;
  public menuId = 'context-menu';
  public menuSelector = `#${this.menuId}`;

  showContextMenu(event: MouseEvent, data: MenuData) {
    // create the div element that will hold the context menu
    selectAll(this.menuSelector)
      .data([1])
      .enter()
      .append('div')
      .attr(
        'class',
        'bg-secondary-subtle p-3 border border-info my-body rounded text-dark w-50 h-25',
      )
      .attr('id', this.menuId);

    const position = this.getMenuPosition(event);
    select(this.menuSelector)
      .style('left', `${position.x}px`)
      .style('top', `${position.y}px`)
      .style('min-width', '300px')
      .style('max-width', '600px')
      .style('min-height', '200px')
      .style('overflow', 'auto')
      .style('position', 'absolute')
      .style('display', 'block');

    // Fills contextMenu
    selectAll(this.menuSelector).html(this.contextMenuHTML(data));
    this.closeMenu();
    this.showMenu();

    // Add close menu behavior
    selectAll(this.menuSelector).on('mousedown', (event) =>
      this.onClickOnGraph(event),
    );
    select(this.graphSelector).on('click', (event) =>
      this.onClickOnGraph(event),
    );
  }

  private contextMenuHTML(data: MenuData) {
    const iconClass = `fas fa-${this.toIconClass(data.kind)}`;

    return `
      <div class="d-flex flex-row justify-content-between"> 
        <a class="d-inline-block mb-2" href="${data.link}">
          <h2 class="fs-5 text-dark m-0"> ${data.title ?? 'Unknown'} <i class="${iconClass}"></i></h2>
        </a>
        <button class="border rounded" style="height: fit-content;" id="close-btn">
          <i class="fas fa-times"></i> 
        </button>
      </div>
      <div class="">${data.description ?? ''}</div>
    `;
  }

  public toMenuData(node: ArticleNode): MenuData {
    return {
      title: node?.record.name,
      description: node?.record['description'] as string | undefined,
      link: this.articleService.generateUrlCallback(node?.record)(),
      kind: node?.record.article_type,
    };
  }

  private toIconClass(kind: ArticleNodeKind | undefined): string | undefined {
    if (!kind) return undefined;
    const entry = SIDEBAR_ENTRIES.find((entry) =>
      entry.article_types.includes(kind),
    );
    return entry ? entry.iconClass : undefined;
  }

  private onClickOnGraph(event: MouseEvent) {
    const isClickOnCloseBtn = !!(event.target as SVGElement).closest(
      '#close-btn',
    );
    if (isClickOnCloseBtn) {
      this.closeMenu();
      return;
    }

    const isClickOnContextMenu = !!(event.target as SVGElement).closest(
      '#context-menu',
    );
    const isClickOnNode = !!(event.target as SVGElement).closest('circle');
    if (!isClickOnContextMenu && !isClickOnNode) {
      this.closeMenu();
      return;
    }
  }

  private closeMenu() {
    console.log('Close', select(this.menuSelector));
    select(this.menuSelector).style('display', 'none');
  }

  private showMenu() {
    console.log('Show', select(this.menuSelector));
    select(this.menuSelector).style('display', 'block');
  }

  private getMenuPosition(event: MouseEvent): { x: number; y: number } {
    const halfScreenWidth = window.innerWidth / 2;
    const defaultX = event.pageX - 2;
    const isOverflowingX = defaultX + halfScreenWidth > window.innerWidth;
    const safeX = isOverflowingX
      ? window.innerWidth - halfScreenWidth
      : defaultX;

    const quarterScreenHeight = window.innerHeight / 4;
    const defaultY = event.pageY - 2;
    const isOverflowingY = defaultY + quarterScreenHeight > window.innerHeight;
    const safeY = isOverflowingY
      ? window.innerHeight - quarterScreenHeight
      : defaultY;

    return {
      x: safeX,
      y: safeY,
    };
  }
}
