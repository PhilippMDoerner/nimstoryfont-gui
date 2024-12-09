import { inject, Injectable } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import {
  create,
  drag,
  forceCenter,
  forceLink,
  forceManyBody,
  forceSimulation,
  forceX,
  forceY,
  pointer,
  select,
  selectAll,
  Selection,
  Simulation,
  zoom,
  ZoomBehavior,
} from 'd3';
import {
  filter,
  map,
  ReplaySubject,
  startWith,
  Subject,
  tap,
  withLatestFrom,
} from 'rxjs';
import {
  ArticleNode,
  ArticleNodeKind,
  Breakpoint,
  NODE_COLOR_MAP,
  NodeLink,
  NodeMap,
  NodeSelection,
} from 'src/app/_models/nodeMap';
import { log } from 'src/utils/logging';
import { filterNil } from 'src/utils/rxjs-operators';
import { capitalize } from 'src/utils/string';
import { LinkClickEvent, NodeClickEvent, SELECTORS } from './data';
import { GraphElement, GraphMenuService } from './graph-menu.service';

export const GRAPH_SETTINGS = {
  width: 1080,
  minZoom: 0.5,
  maxZoom: 12,
  minHeight: 300,
  linkAttractingForce: 0.5,
  nodeRepellingForce: 50,
  undirectedForce: 0.025,
  circleSize: 6,
  xForce: 1,
  yForce: 1,
  centeringTransitionTime: 1000,
  hoverTransitionTime: 200,
  strokeWidth: 0.5,
};

type MyZoomBehavior = ZoomBehavior<any, any>;
type ZoomElement = Selection<SVGGElement, undefined, null, undefined>;
type GraphElements = {
  graphElement: GraphElement;
  zoomContainer: ZoomElement;
  zoomBehavior: MyZoomBehavior;
};

@Injectable()
export class GraphService {
  public createGraphEvents$ = new ReplaySubject<NodeMap>(1);
  private _elements$ = new Subject<GraphElements | undefined>();
  public elements$ = this._elements$.asObservable();
  private _nodeClickEvents$ = new Subject<MouseEvent>();
  public nodeClickEvents$ = this._nodeClickEvents$.pipe(
    withLatestFrom(this.createGraphEvents$),
    map(([event, graphData]) => this.toNodeEvent(event, graphData)),
  );
  private _nodeRightClickEvents$ = new Subject<MouseEvent>();
  public nodeRightClickEvents$ = this._nodeRightClickEvents$.pipe(
    withLatestFrom(this.createGraphEvents$),
    map(([event, graphData]) => this.toNodeEvent(event, graphData)),
  );
  private linkRightClickEvents$ = new Subject<LinkClickEvent>();
  public centerNodeEvents$ = new Subject<ArticleNode | undefined>();
  public nodeSelectionChanged$ = new Subject<NodeSelection>();
  private activeNodes$ = this.nodeSelectionChanged$.pipe(
    startWith<NodeSelection>([]),
  );
  private graphClickEvent$ = new Subject<MouseEvent>();

  private graphMenuService = inject(GraphMenuService);
  public zoomLevelChangedEvent$ = new ReplaySubject<number>(1);

  constructor() {
    this.zoomLevelChangedEvent$.next(1);

    this.initCreateGraphOnDataChange();
    this.initCenterNodeOnTrigger();
    this.initNodeRightClickBehavior();
    this.initNodeClickBehavior();
    this.initGraphClickBehavior();
    this.initSyncingActivatedNodesToSVG();
    this.initLinkRightClickBehavior();

    this.graphClickEvent$
      .pipe(takeUntilDestroyed())
      .subscribe((event) =>
        this.graphMenuService.allGraphClickEvents$.next(event),
      );
  }

  // BEHAVIOR
  /**
   * Sets up behavior to create a new graph SVG every time the input data changes
   */
  private initCreateGraphOnDataChange() {
    this.createGraphEvents$
      .pipe(
        tap(() => this._elements$.next(undefined)),
        takeUntilDestroyed(),
      )
      .subscribe((data) => this.createGraph(data));
  }

  /**
   * Sets up behavior when users click on the graph itself and not a node or link.
   * This should be:
   * - Resetting the node selection to nothing
   * - Closing context menus
   */
  private initGraphClickBehavior() {
    this.graphClickEvent$.pipe(takeUntilDestroyed()).subscribe((event) => {
      const isClickOnNode = !!(event.target as Element).closest('g.node');
      if (!isClickOnNode) {
        this.resetNodeSelection();
      }
    });
  }

  /**
   * Sets up behavior when users right click on a node to open context menu.
   * Here, context menu is handled by the graph service
   */
  private initNodeRightClickBehavior() {
    this.nodeRightClickEvents$
      .pipe(
        tap((event) => event.event.preventDefault()),
        filter((event) => !!event.clickedNode),
        map((event) => ({
          menuData: this.graphMenuService.toNodeMenuData(
            event.clickedNode as ArticleNode,
          ),
          ...event,
        })),
        takeUntilDestroyed(),
      )
      .subscribe((data) =>
        this.graphMenuService.showNodeContextMenu(data.event, data.menuData),
      );
  }

  /**
   * Sets up behavior when users click on a node.
   * This should be selecting/unselecting the node in question
   * TODO: Add selecting/unselecting a link
   */
  private initNodeClickBehavior() {
    this.nodeClickEvents$
      .pipe(
        tap((event) => event.event.preventDefault()),
        filter((data) => !!data.clickedNode),
        withLatestFrom(this.activeNodes$),
        takeUntilDestroyed(),
      )
      .subscribe(([data, currentlyActiveNodes]) => {
        this.toggleNode(data.clickedNode as ArticleNode, currentlyActiveNodes);
      });
  }

  /** Sets up behavior when user right clicks on a link.
   * This should open a context menu for links for deleting links mostly
   */

  private initLinkRightClickBehavior() {
    this.linkRightClickEvents$
      .pipe(
        tap((event) => event.event.preventDefault()),
        takeUntilDestroyed(),
      )
      .subscribe((event) => {
        console.log(event);
        if (!event.clickedLink) return;
        this.graphMenuService.showLinkContextMenu(
          event.event,
          event.clickedLink,
        );
        // TODO:
        // 1. Figure out how to extract the clicked links from via event from links.
        // 2. Transform into the data needed to open a context menu
        // 3. render a context menu with its own html etc. Make sure that it has a delete option that is disabled if the link is not a custom link
      });
  }

  /**
   * Sets up behavior when users trigger a center-node-event (i.e. from searching).
   * Triggers an animation that changes the viewport to center the node in question
   */
  private initCenterNodeOnTrigger() {
    this.centerNodeEvents$
      .pipe(
        filterNil(),
        withLatestFrom(
          this.elements$.pipe(
            map((el) => el?.zoomBehavior),
            filterNil(),
          ),
        ),
        takeUntilDestroyed(),
      )
      .subscribe(([centeredNodeData, zoomBehavior]) =>
        this.centerNodeInGraph(centeredNodeData, zoomBehavior),
      );
  }

  /**
   * Sets up behavior to update the styles of the nodes that are currently active to make them look active.
   */
  private initSyncingActivatedNodesToSVG() {
    this.activeNodes$
      .pipe(takeUntilDestroyed())
      .subscribe((data) => this.updateSelectedNodeStyles(data));
  }

  // HELPER FUNCTIONS
  private createGraph(nodeMap: NodeMap) {
    const height = this.inferGraphHeight(GRAPH_SETTINGS.width, getBreakpoint());
    const graphElement = create('svg')
      .attr('viewBox', [0, 0, GRAPH_SETTINGS.width, height])
      .attr(
        'style',
        'max-width: 100%; height: auto; min-height: 300px; cursor: move;',
      )
      .attr('id', SELECTORS.graphId);
    const zoomContainer = graphElement.append('g');
    const zoomBehavior = this.addZoomListener(
      graphElement,
      zoomContainer,
      GRAPH_SETTINGS.width,
      height,
    );

    graphElement.on('click', (event: MouseEvent) =>
      this.graphClickEvent$.next(event),
    );

    this._elements$.next({
      graphElement,
      zoomContainer,
      zoomBehavior,
    });

    // Add a line for each link, and a circle for each node.
    this.addLinks(zoomContainer, nodeMap.links);
    const allNodesElement = this.addNodes(zoomContainer, nodeMap.nodes);

    // Create a simulation with several forces.
    const simulation = forceSimulation(nodeMap.nodes)
      .force(
        'link',
        forceLink<ArticleNode, NodeLink>(nodeMap.links)
          .id((d) => d.record.name)
          .strength(GRAPH_SETTINGS.linkAttractingForce),
      )
      .force(
        'charge',
        forceManyBody().strength(-1 * GRAPH_SETTINGS.nodeRepellingForce),
      )
      .force('x', forceX().strength(GRAPH_SETTINGS.undirectedForce))
      .force('y', forceY().strength(GRAPH_SETTINGS.undirectedForce))
      .force('center', forceCenter(GRAPH_SETTINGS.width / 2, height / 2));
    addDragBehavior(allNodesElement, simulation);

    // Set the position attributes of links and nodes each time the simulation ticks.
    simulation.on('tick', () => this.updateGraphAttributes());
  }

  private addNodes(
    hostElement: Selection<
      SVGSVGElement | SVGGElement,
      undefined,
      null,
      undefined
    >,
    nodeData: ArticleNode[],
  ) {
    const nodes = hostElement
      .append('g')
      .selectAll()
      .data(nodeData)
      .enter()
      .append('g')
      .attr('class', SELECTORS.nodeClass)
      .attr('style', 'cursor: grab;')
      .attr('guid', (d) => d.guid)
      .on('mouseover', function () {
        select(this).select('circle').attr('stroke', 'white');
      })
      .on('mouseleave', function () {
        select(this).select('circle').attr('stroke', 'black');
      });

    // Add image inside circle with background-color
    // const imgGroups = nodes.append('g');
    // imgGroups
    nodes
      .append('circle')
      .attr('r', GRAPH_SETTINGS.circleSize)
      .attr('stroke', 'black')
      .attr('guid', (d) => d.guid)
      .attr(
        'fill',
        (d) =>
          NODE_COLOR_MAP[
            d.record.article_type.toUpperCase() as ArticleNodeKind
          ],
      );

    // Add Label
    nodes
      .append('text')
      .attr('y', GRAPH_SETTINGS.circleSize * 6)
      .attr('text-anchor', 'middle')
      .attr('stroke', '#000')
      .attr('stroke-width', GRAPH_SETTINGS.strokeWidth)
      .attr('transform', 'scale(0.3)')
      .attr('guid', (d) => d.guid)
      .text((d) => d.record.name);

    nodes
      .append('title')
      .text((d) => `${capitalize(d.record.article_type)} - ${d.record.name}`);

    nodes.on('contextmenu', (event: MouseEvent) =>
      this._nodeRightClickEvents$.next(event),
    );

    nodes.on('click', (event: MouseEvent) =>
      this._nodeClickEvents$.next(event),
    );

    return nodes;
  }

  private addLinks(
    hostElement: Selection<
      SVGSVGElement | SVGGElement,
      undefined,
      null,
      undefined
    >,
    links: NodeLink[],
  ) {
    const linkGroups = hostElement
      .append('g')
      .attr('stroke-opacity', 0.6)
      .selectAll()
      .data(links)
      .join('g')
      .attr('title', (d) => d.label)
      .attr('class', SELECTORS.linkClass)
      .on('contextmenu', (event, link) =>
        this.linkRightClickEvents$.next({ event, clickedLink: link }),
      );

    const texts = linkGroups
      .append('text')
      .attr('text-anchor', 'middle')
      .attr('stroke', '#000')
      .attr('stroke-width', 1)
      .attr('class', SELECTORS.linkLabelClass)
      .style('text-anchor', 'middle')
      .style('opacity', '0');

    texts
      .append('tspan')
      .attr('dy', '0px')
      .attr('x', '0px')
      .text((d: any) => d.source.record.name);

    texts
      .append('tspan')
      .attr('dy', '15px')
      .attr('x', '0px')
      .text((d: any) => d.label);

    texts
      .append('tspan')
      .attr('dy', '15px')
      .attr('x', '0px')
      .text((d: any) => d.target.record.name);

    const linkElements = linkGroups
      .append('line')
      .attr('class', SELECTORS.linkClass)
      .style('stroke-width', () => `${Math.sqrt(5)}px`)
      .attr('stroke', '#999')
      .on('mouseover', function (event: MouseEvent) {
        select(this.parentNode as any)
          .transition()
          .duration(200)
          .select(SELECTORS.linkLabelSelector)
          .style('opacity', '1')
          .attr('transform', () => {
            const [centerX, centerY] = pointer(event);
            return `translate(${centerX}, ${centerY + 6}), scale(0.2)`;
          });

        select(this)
          .transition()
          .duration(200)
          .style('stroke', 'var(--bs-primary)')
          .style('stroke-width', () => '6px');
      })
      .on('mouseout', function () {
        select(this.parentNode as any)
          .transition()
          .duration(200)
          .select(SELECTORS.linkLabelSelector)
          .style('opacity', '0');

        select(this)
          .transition()
          .duration(200)
          .style('stroke', '#999')
          .style('stroke-width', () => `${Math.sqrt(5)}px`);
      });

    return linkElements;
  }

  private updateGraphAttributes() {
    selectAll<SVGLineElement, NodeLink>(SELECTORS.linkSelector)
      .attr('x1', (d) => (d.source as any).x)
      .attr('y1', (d) => (d.source as any).y)
      .attr('x2', (d) => (d.target as any).x)
      .attr('y2', (d) => (d.target as any).y);

    selectAll(SELECTORS.nodeSelector).attr(
      'transform',
      (d: any) => `translate(${d.x},${d.y})`,
    );
  }

  private centerNodeInGraph(node: ArticleNode, myZoom: MyZoomBehavior) {
    const graph = select(SELECTORS.graphSelector);
    if (graph.empty()) return;

    myZoom.translateTo(
      graph.transition().duration(GRAPH_SETTINGS.centeringTransitionTime),
      node.x as number,
      node.y as number,
    );
  }

  private toNodeEvent(event: MouseEvent, graphData: NodeMap): NodeClickEvent {
    const nodeGuid = (event.target as Element).getAttribute('guid') as string;
    const node = graphData.nodes.find((node) => node.guid === nodeGuid);
    if (!node) {
      log(GraphService.name, 'Node could not be found', nodeGuid);
    }
    return { event, clickedNode: node };
  }

  /**
   * Toggles the activity state of a node. Must deal with the following scenarios:
   * - You toggle a node off
   * - You toggle a node on that is currently active while you have reached maximum amount of selections
   * - You toggle a node on that is currently not active while you have not reached maximum amount of selections (2)
   */
  private toggleNode(
    clickedNodeData: ArticleNode,
    activeNodesData: NodeSelection,
  ) {
    const isSelectingNode = !activeNodesData.some(
      (n) => n.guid === clickedNodeData.guid,
    );

    if (!isSelectingNode) {
      const otherActiveNodes = activeNodesData.filter(
        (n) => n.guid !== clickedNodeData.guid,
      );
      this.nodeSelectionChanged$.next(otherActiveNodes as NodeSelection);
      return;
    }

    const isSelectionFull = activeNodesData.length === 2;
    if (isSelectionFull) return;

    const newActiveNodes = [...activeNodesData, clickedNodeData];
    this.nodeSelectionChanged$.next(newActiveNodes as NodeSelection);
  }

  private addZoomListener(
    hostElement: Selection<SVGSVGElement, undefined, null, undefined>,
    zoomContainer: ZoomElement,
    width: number,
    height: number,
  ) {
    const zoomBehavior = zoom<any, any>()
      .extent([
        [0, 0],
        [width, height],
      ])
      .scaleExtent([GRAPH_SETTINGS.minZoom, GRAPH_SETTINGS.maxZoom])
      .on('zoom', (val) => {
        zoomContainer.attr('transform', val.transform);
        this.zoomLevelChangedEvent$.next(val.transform.k);
      });
    hostElement.call(zoomBehavior);

    return zoomBehavior;
  }

  private updateSelectedNodeStyles(selectedNodeData: NodeSelection) {
    const graph = select(SELECTORS.graphSelector);
    if (graph.empty()) return;

    // Reset all styles
    graph.selectAll('circle').style('stroke', '').style('stroke-width', '');

    const hasSelectedNodes = selectedNodeData.length > 0;
    if (!hasSelectedNodes) return;

    // Set styles on active
    const activeNodesSelector = selectedNodeData
      .map((node) => this.toSelector(node))
      .join(',');
    graph
      .selectAll(activeNodesSelector)
      .select('circle')
      .style('stroke', 'var(--bs-white)')
      .style('stroke-width', '3px');
  }

  private toSelector(node: ArticleNode) {
    return `g[guid="${node.guid}"]`;
  }

  private resetNodeSelection() {
    this.nodeSelectionChanged$.next([]);
  }

  private inferGraphHeight(width: number, breakpoint: Breakpoint): number {
    switch (breakpoint) {
      case 'sm':
        return width * 1.75;
      case 'md':
        return width * 1.5;
      case 'lg':
        return width * 1.25;
      case 'xl':
        return width;
      case 'xxl':
        return width * 0.75;
    }
  }
}

export function addDragBehavior(
  node: Selection<SVGGElement, ArticleNode, SVGGElement, undefined>,
  simulation: Simulation<ArticleNode, undefined>,
) {
  function dragstarted(
    event: d3.D3DragEvent<SVGElement, ArticleNode, ArticleNode>,
  ) {
    if (!event.active) simulation.alphaTarget(0.3).restart();
    event.subject.fx = event.subject.x;
    event.subject.fy = event.subject.y;
  }

  function dragged(
    event: d3.D3DragEvent<SVGElement, ArticleNode, ArticleNode>,
  ) {
    event.subject.fx = event.x;
    event.subject.fy = event.y;
  }

  function dragended(
    event: d3.D3DragEvent<SVGElement, ArticleNode, ArticleNode>,
  ) {
    if (!event.active) simulation.alphaTarget(0);
    event.subject.fx = null;
    event.subject.fy = null;
  }

  node.call(
    drag<any, any>()
      .on('start', dragstarted)
      .on('drag', dragged)
      .on('end', dragended),
  );
}

export function copy<T>(items: T[]): T[] {
  return items.map((item) => ({ ...item }));
}

export function getBreakpoint(): Breakpoint {
  const screenWidth = window.screen.availWidth;
  if (screenWidth < 767) return 'sm';
  if (screenWidth < 991) return 'md';
  if (screenWidth < 1199) return 'lg';
  if (screenWidth < 1399) return 'xl';
  return 'xxl';
}
