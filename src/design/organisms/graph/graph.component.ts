import { AsyncPipe } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  effect,
  ElementRef,
  inject,
  input,
  output,
  signal,
  viewChild,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import {
  create,
  forceCenter,
  forceLink,
  forceManyBody,
  forceSimulation,
  forceX,
  forceY,
  select,
  selectAll,
  Selection,
  zoom,
  ZoomBehavior,
} from 'd3';
import {} from 'd3-zoom';
import { filter, map, ReplaySubject, Subject, take } from 'rxjs';
import {
  ArticleNode,
  ArticleNodeKind,
  NODE_COLOR_MAP,
  NodeLink,
  NodeMap,
  NodeSelection,
} from 'src/app/_models/nodeMap';
import { ArticleService } from 'src/app/_services/article/article.service';
import { ButtonComponent } from 'src/design/atoms/button/button.component';
import { log } from 'src/utils/logging';
import { capitalize } from 'src/utils/string';
import { GraphElement, GraphService, PopupData } from './graph-menu';
import {
  addDragBehavior,
  addLinks,
  getBreakpoint,
  inferGraphHeight,
} from './graph-utils';

type ZoomElement = Selection<SVGGElement, undefined, null, undefined>;
const GRAPH_SETTINGS = {
  width: 1080,
  minZoom: 0.5,
  maxZoom: 12,
  minHeight: 300,
  linkAttractingForce: 0.5,
  nodeRepellingForce: 50,
  xForce: 1,
  yForce: 1,
};

@Component({
  selector: 'app-graph',
  standalone: true,
  imports: [AsyncPipe, ButtonComponent],
  templateUrl: './graph.component.html',
  styleUrl: './graph.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [GraphService],
})
export class GraphComponent {
  data = input.required<NodeMap>();
  centeredNodeData = input.required<ArticleNode | undefined>();
  activeNodesData = input.required<NodeSelection>();

  articleService = inject(ArticleService);
  graphService = inject(GraphService);
  destructor = inject(DestroyRef);

  nodeSelectionChanged = output<NodeSelection>();

  graphContainer = viewChild<ElementRef<HTMLDivElement>>('graphContainer');
  elements = signal<
    | {
        graphElement: GraphElement;
        zoomContainer: ZoomElement;
        zoomBehavior: ZoomBehavior<any, any>;
      }
    | undefined
  >(undefined);

  settings = GRAPH_SETTINGS;

  zoomSliderEvents$ = new Subject<string>();
  zoomLevel$ = new ReplaySubject<number>(1);
  popupMenu$ = new Subject<{ x: number; y: number; data: PopupData }>();

  nodeClass = 'node';
  nodeSelector = '.node';
  linkClass = 'link';
  linkSelector = 'line.link';
  linkLabelSelector = 'text.link-label';
  activeClass = `${this.nodeClass}--active`;
  activeSelector = `g.${this.nodeClass}.${this.activeClass}`;

  constructor() {
    this.zoomLevel$.next(1);

    // Center node if one is selected
    effect(() => {
      const centeredNode = this.centeredNodeData();
      if (centeredNode) {
        this.centerNodeInGraph(centeredNode);
      }
    });

    // Recreate Graph when Data changes
    effect(
      () => {
        this.elements.set(undefined);
        this.createGraph(this.data());
      },
      { allowSignalWrites: true },
    );

    // Replace graph in HTML if graph changes
    effect(() => {
      const graph = this.elements()?.graphElement.node();
      if (this.graphContainer() && graph) {
        const graphContainerElement = this.graphContainer()?.nativeElement;
        graphContainerElement?.querySelector('svg')?.remove();
        graphContainerElement?.appendChild(graph);
        console.log('Replaced graph');
      }
    });

    // Update which nodes are displayed as active
    effect(() => this.updateSelectedNodeStyles(this.activeNodesData()));
    effect(() => this.nodeSelectionChanged.emit(this.activeNodesData()));
    // Zoom via control
    this.zoomSliderEvents$
      .pipe(
        map(Number),
        filter((newZoomLevel) => !isNaN(newZoomLevel)),
        takeUntilDestroyed(),
      )
      .subscribe((newZoomLevel) => {
        this.elements()?.zoomBehavior.scaleTo(
          this.elements()!.zoomContainer,
          newZoomLevel,
        );
      });
  }

  onZoomButtonClick(modifier: number) {
    this.zoomLevel$
      .pipe(take(1), takeUntilDestroyed(this.destructor))
      .subscribe((zoomLevel) =>
        this.zoomSliderEvents$.next((zoomLevel + modifier).toString()),
      );
  }

  private createGraph(nodeMap: NodeMap) {
    const width = 1080;
    const height = inferGraphHeight(width, getBreakpoint());
    const graphElement = create('svg')
      .attr('viewBox', [0, 0, width, height])
      .attr(
        'style',
        'max-width: 100%; height: auto; min-height: 300px; cursor: move;',
      )
      .attr('id', this.graphService.graphId);
    const zoomContainer = graphElement.append('g');
    const zoomBehavior = this.addZoomListener(
      graphElement,
      zoomContainer,
      width,
      height,
    );

    graphElement.on('click', (event: MouseEvent) => {
      const isClickOnNode = !!(event.target as Element).closest('g.node');
      if (!isClickOnNode) {
        this.resetSelectedNodes();
      }
    });

    this.elements.set({
      graphElement,
      zoomContainer,
      zoomBehavior,
    });

    // Add a line for each link, and a circle for each node.
    addLinks(zoomContainer, nodeMap.links);
    const allNodesElement = this.addNodes(zoomContainer, nodeMap.nodes);

    // Create a simulation with several forces.
    const simulation = forceSimulation(nodeMap.nodes)
      .force(
        'link',
        forceLink<ArticleNode, NodeLink>(nodeMap.links)
          .id((d) => d.record.name)
          .strength(this.settings.linkAttractingForce),
      )
      .force(
        'charge',
        forceManyBody().strength(-1 * this.settings.nodeRepellingForce),
      )
      .force('x', forceX().strength(0.025))
      .force('y', forceY().strength(0.025))
      .force('center', forceCenter(width / 2, height / 2));
    addDragBehavior(allNodesElement, simulation);

    // Set the position attributes of links and nodes each time the simulation ticks.
    simulation.on('tick', () => this.updateGraphAttributes());
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
      .scaleExtent([this.settings.minZoom, this.settings.maxZoom])
      .on('zoom', (val) => {
        zoomContainer.attr('transform', val.transform);
        this.zoomLevel$.next(val.transform.k);
      });
    hostElement.call(zoomBehavior);

    return zoomBehavior;
  }

  private onNodeRightClick(event: MouseEvent) {
    const node = this.getNodeData(event);
    if (!node) return;
    const popupData = this.toPopupData(node);
    this.graphService.showContextMenu(event, popupData);
  }

  private onNodeClick(event: MouseEvent) {
    const clickedNodeData = this.getNodeData(event);
    if (!clickedNodeData) return;

    this.toggleNode(clickedNodeData);
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
      .attr('class', this.nodeClass)
      .attr('style', 'cursor: grab;')
      .attr('guid', (d) => d.guid);

    // Add image inside circle with background-color
    // const imgGroups = nodes.append('g');
    const imgSize = 10;
    // imgGroups
    nodes
      .append('circle')
      .attr('r', imgSize / 2 + 1)
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
      .attr('y', imgSize * 3.5)
      .attr('text-anchor', 'middle')
      .attr('stroke', '#000')
      .attr('stroke-width', 0.5)
      .attr('transform', 'scale(0.3)')
      .attr('guid', (d) => d.guid)
      .text((d) => d.record.name);

    nodes
      .append('title')
      .text((d) => `${capitalize(d.record.article_type)} - ${d.record.name}`);

    nodes.on('contextmenu', (event: MouseEvent) => {
      this.onNodeRightClick(event);
      event.preventDefault();
    });

    nodes.on('click', (event: MouseEvent) => {
      this.onNodeClick(event);
      event.preventDefault();
    });

    return nodes;
  }

  private toPopupData(node: ArticleNode): PopupData {
    return {
      title: node?.record.name,
      description: node?.record['description'] as string | undefined,
      link: this.articleService.generateUrlCallback(node?.record)(),
      kind: node?.record.article_type,
    };
  }

  private centerNodeInGraph(node: ArticleNode) {
    const graph = select(this.graphService.graphSelector);
    if (graph.empty()) return;

    this.elements()?.zoomBehavior.translateTo(
      graph.transition().duration(1000),
      node.x as number,
      node.y as number,
    );
  }

  /**
   * Toggles the activity state of a node. Must deal with the following scenarios:
   * - You toggle a node off
   * - You toggle a node on that is currently active while you have reached maximum amount of selections
   * - You toggle a node on that is currently not active while you have not reached maximum amount of selections (2)
   */
  private toggleNode(clickedNodeData: ArticleNode) {
    const activeNodes = this.activeNodesData();
    const isSelectingNode = !activeNodes.some(
      (n) => n.guid === clickedNodeData.guid,
    );

    if (!isSelectingNode) {
      const otherActiveNodes = activeNodes.filter(
        (n) => n.guid !== clickedNodeData.guid,
      );
      this.nodeSelectionChanged.emit(otherActiveNodes as NodeSelection);
      return;
    }

    const isSelectionFull = activeNodes.length === 2;
    if (isSelectionFull) return;

    const newActiveNodes = [...activeNodes, clickedNodeData];
    this.nodeSelectionChanged.emit(newActiveNodes as NodeSelection);
  }

  private resetSelectedNodes() {
    this.nodeSelectionChanged.emit([]);
  }

  private getNodeData(event: MouseEvent | string) {
    const nodeGuid =
      typeof event === 'string'
        ? event
        : ((event.target as Element).getAttribute('guid') as string);
    const node = this.data().nodes.find((node) => node.guid === nodeGuid);
    if (!node) {
      log(GraphComponent.name, 'Node could not be found', nodeGuid);
      return;
    }
    return node;
  }

  private updateGraphAttributes() {
    selectAll<SVGLineElement, NodeLink>(this.linkSelector)
      .attr('x1', (d) => (d.source as any).x)
      .attr('y1', (d) => (d.source as any).y)
      .attr('x2', (d) => (d.target as any).x)
      .attr('y2', (d) => (d.target as any).y);

    selectAll<SVGTextElement, NodeLink>(this.linkLabelSelector).attr(
      'transform',
      (d: any) => {
        const centerX = (d.source.x + d.target.x) / 2;
        const centerY = (d.source.y + d.target.y) / 2;
        return `translate(${centerX}, ${centerY}), scale(0.2)`;
      },
    );

    selectAll(this.nodeSelector).attr(
      'transform',
      (d: any) => `translate(${d.x},${d.y})`,
    );
  }

  private updateSelectedNodeStyles(selectedNodeData: NodeSelection) {
    const graph = select(this.graphService.graphSelector);
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
}
