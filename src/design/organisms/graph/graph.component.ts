import { AsyncPipe } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  effect,
  ElementRef,
  inject,
  input,
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
  Selection,
  zoom,
  ZoomBehavior,
} from 'd3';
import { filter, map, ReplaySubject, Subject, take } from 'rxjs';
import { ArticleNode, NodeLink, NodeMap } from 'src/app/_models/nodeMap';
import { ArticleService } from 'src/app/_services/article/article.service';
import { ButtonComponent } from 'src/design/atoms/button/button.component';
import { log } from 'src/utils/logging';
import { GraphElement, GraphService, PopupData } from './graph-menu';
import {
  addConnections,
  addDragBehavior,
  addNodes,
  getBreakpoint,
  inferGraphHeight,
} from './graph-utils';

type ZoomElement = Selection<SVGGElement, undefined, null, undefined>;

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

  articleService = inject(ArticleService);
  graphService = inject(GraphService);
  destructor = inject(DestroyRef);
  graphContainer = viewChild<ElementRef<HTMLDivElement>>('graphContainer');
  elements = signal<
    | {
        graphElement: GraphElement;
        zoomContainer: ZoomElement;
        zoomBehavior: ZoomBehavior<any, any>;
      }
    | undefined
  >(undefined);

  minZoom = 0.5;
  maxZoom = 12;

  zoomSliderEvents$ = new Subject<string>();
  zoomLevel$ = new ReplaySubject<number>(1);
  popupMenu$ = new Subject<{ x: number; y: number; data: PopupData }>();

  constructor() {
    this.zoomLevel$.next(1);
    effect(() => this.createGraph(this.data()), { allowSignalWrites: true });

    effect(() => {
      const graph = this.elements()?.graphElement.node();
      if (this.graphContainer() && graph) {
        const graphContainerElement = this.graphContainer()?.nativeElement;
        graphContainerElement?.querySelector('svg')?.remove();
        graphContainerElement?.appendChild(graph);
      }
    });

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

  private createGraph({ links, nodes }: NodeMap) {
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

    this.elements.set({
      graphElement,
      zoomContainer,
      zoomBehavior,
    });

    // Add a line for each link, and a circle for each node.
    const allLinksElement = addConnections(zoomContainer, links);
    const allNodesElement = addNodes(zoomContainer, nodes);

    allNodesElement.on('contextmenu', (event: MouseEvent) => {
      this.onNodeClick(event);
      event.preventDefault();
    });

    // Create a simulation with several forces.
    const simulation = forceSimulation(nodes)
      .force(
        'link',
        forceLink<ArticleNode, NodeLink>(links)
          .id((d) => d.record.name)
          .strength(0.5),
      )
      .force('charge', forceManyBody().strength(-50))
      .force('x', forceX())
      .force('y', forceY())
      .force('center', forceCenter(width / 2, height / 2));
    addDragBehavior(allNodesElement, simulation);

    // Set the position attributes of links and nodes each time the simulation ticks.
    simulation.on('tick', () =>
      this.updateGraphdata(allLinksElement, allNodesElement),
    );
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
      .scaleExtent([this.minZoom, this.maxZoom])
      .on('zoom', (val) => {
        zoomContainer.attr('transform', val.transform);
        this.zoomLevel$.next(val.transform.k);
      });
    hostElement.call(zoomBehavior);

    return zoomBehavior;
  }

  private updateGraphdata(
    allLinksElement: Selection<SVGLineElement | null, any, any, any>,
    allNodesElement: Selection<SVGGElement, any, any, any>,
  ) {
    allLinksElement
      .attr('x1', (d) => (d.source as any).x)
      .attr('y1', (d) => (d.source as any).y)
      .attr('x2', (d) => (d.target as any).x)
      .attr('y2', (d) => (d.target as any).y);

    allNodesElement.attr('transform', (d: any) => `translate(${d.x},${d.y})`);
  }

  private onNodeClick(event: MouseEvent) {
    const nodeGuid = (event.target as Element).getAttribute('guid') as string;
    const node = this.data().nodes.find((node) => node.guid === nodeGuid);
    if (!node) {
      log(GraphComponent.name, 'Clicked node could not be found', nodeGuid);
      return;
    }

    const popupData = this.toPopupData(node);
    this.graphService.showContextMenu(event, popupData);
  }

  private toPopupData(node: ArticleNode): PopupData {
    return {
      title: node?.record.name,
      description: node?.record['description'] as string | undefined,
      link: this.articleService.generateUrlCallback(node?.record)(),
      kind: node?.record.article_type,
    };
  }
}
