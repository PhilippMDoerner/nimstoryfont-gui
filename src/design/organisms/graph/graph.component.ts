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
  Selection,
  zoom,
  ZoomBehavior,
} from 'd3';
import { filter, map, ReplaySubject, Subject, take } from 'rxjs';
import { ArticleNode, NodeLink, NodeMap } from 'src/app/_models/nodeMap';
import { ButtonComponent } from 'src/design/atoms/button/button.component';
import {
  addConnections,
  addDragBehavior,
  addNodes,
  getBreakpoint,
  inferGraphHeight,
} from './graph-utils';

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
      );
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

    // Create a simulation with several forces.
    const simulation = forceSimulation(nodes)
      .force(
        'link',
        forceLink<ArticleNode, NodeLink>(links)
          .id((d) => (d.record as any).name)
          .strength(0.5),
      )
      .force('charge', forceManyBody().strength(-5))
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
        console.log('Zoom event');
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
}
