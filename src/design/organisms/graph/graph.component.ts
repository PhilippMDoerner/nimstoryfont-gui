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
import { takeUntilDestroyed, toSignal } from '@angular/core/rxjs-interop';
import {} from 'd3-zoom';
import { filter, map, Subject, take } from 'rxjs';
import { NodeMap, NodeSelection } from 'src/app/_models/nodeMap';
import { ArticleService } from 'src/app/_services/article/article.service';
import { ButtonComponent } from 'src/design/atoms/button/button.component';
import { GraphService } from './graph.service';

const GRAPH_SETTINGS = {
  width: 1080,
  minZoom: 0.5,
  maxZoom: 12,
  minHeight: 300,
  linkAttractingForce: 0.5,
  nodeRepellingForce: 50,
  circleSize: 6,
  xForce: 1,
  yForce: 1,
  centeringTransitionTime: 1000,
  hoverTransitionTime: 200,
  strokeWidth: 0.5,
};

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
  activeNodesData = input.required<NodeSelection>();

  articleService = inject(ArticleService);
  graphService = inject(GraphService); //Accessible as the parent, GraphPageComponent, provides an instance
  destructor = inject(DestroyRef);

  graphContainer = viewChild<ElementRef<HTMLDivElement>>('graphContainer');
  elements = toSignal(this.graphService.elements$);
  zoomLevel$ = this.graphService.zoomLevelChangedEvent$;

  settings = GRAPH_SETTINGS;

  zoomSliderEvents$ = new Subject<string>();

  constructor() {
    effect(() => this.graphService.createGraphEvents$.next(this.data()), {
      allowSignalWrites: true,
    });

    // Replace graph in HTML if graph changes
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
    this.graphService.zoomLevelChangedEvent$
      .pipe(take(1), takeUntilDestroyed(this.destructor))
      .subscribe((zoomLevel) =>
        this.zoomSliderEvents$.next((zoomLevel + modifier).toString()),
      );
  }
}
