import { AsyncPipe } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  effect,
  ElementRef,
  inject,
  input,
  viewChild,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import {
  create,
  forceCenter,
  forceLink,
  forceManyBody,
  forceSimulation,
  scaleOrdinal,
  schemeCategory10,
  Selection,
  zoom,
  ZoomBehavior,
} from 'd3';
import { filter, map, ReplaySubject, Subject, take } from 'rxjs';
import { ButtonComponent } from 'src/design/atoms/button/button.component';
import { ArticleNode, Link, NodeMap } from './data';
import {
  addConnections,
  addDragBehavior,
  addNodes,
  getBreakpoint,
  inferGraphHeight,
} from './graph-utils';

const color = scaleOrdinal(schemeCategory10);

type GraphElement = Selection<SVGSVGElement, undefined, null, undefined>;
type ZoomElement = Selection<SVGGElement, undefined, null, undefined>;
@Component({
  selector: 'app-graph',
  standalone: true,
  imports: [AsyncPipe, ButtonComponent],
  templateUrl: './graph.component.html',
  styleUrl: './graph.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GraphComponent {
  data = input.required<NodeMap>();

  destructor = inject(DestroyRef);
  graphContainer = viewChild<ElementRef<HTMLDivElement>>('graphContainer');
  graphElement!: GraphElement;
  zoomContainer!: ZoomElement;
  zoomBehavior!: ZoomBehavior<any, any>;
  minZoom = 1;
  maxZoom = 8;

  zoomSliderEvents$ = new Subject<string>();
  zoomLevel$ = new ReplaySubject<number>(1);

  constructor() {
    effect(() => console.log(this.data()));
    this.zoomLevel$.next(1);
    effect(() => this.createGraph(this.data()), { allowSignalWrites: true });

    effect(() => {
      const graph = this.graphElement.node();
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
        this.zoomBehavior.scaleTo(this.zoomContainer, newZoomLevel);
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
    const width = 1600;
    const height = inferGraphHeight(width, getBreakpoint());
    this.graphElement = create('svg')
      .attr('viewBox', [0, 0, width, height])
      .attr(
        'style',
        'max-width: 100%; height: auto; min-height: 300px; cursor: move;',
      );
    this.zoomContainer = this.graphElement.append('g');

    this.addZoomListener(this.graphElement, width, height);

    // Add a line for each link, and a circle for each node.
    const allLinksElement = addConnections(this.zoomContainer, links);
    const allNodesElement = addNodes(this.zoomContainer, nodes);

    // Create a simulation with several forces.
    const simulation = forceSimulation(nodes)
      .force(
        'link',
        forceLink<ArticleNode, Link>(links).id((d) => (d.record as any).name),
      )
      .force('charge', forceManyBody())
      .force('center', forceCenter(width / 2, height / 2));
    addDragBehavior(allNodesElement, simulation);

    // Set the position attributes of links and nodes each time the simulation ticks.
    simulation.on('tick', () =>
      this.updateGraphdata(allLinksElement, allNodesElement),
    );
  }

  private addZoomListener(
    hostElement: Selection<SVGSVGElement, undefined, null, undefined>,
    width: number,
    height: number,
  ) {
    this.zoomBehavior = zoom<any, any>()
      .extent([
        [0, 0],
        [width, height],
      ])
      .scaleExtent([this.minZoom, this.maxZoom])
      .on('zoom', (val) => {
        console.log('Zoom event');
        this.zoomContainer.attr('transform', val.transform);
        this.zoomLevel$.next(val.transform.k);
      });
    hostElement.call(this.zoomBehavior);
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
}
