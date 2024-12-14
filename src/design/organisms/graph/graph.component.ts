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
import { GRAPH_SETTINGS } from '../_model/graph';
import { GraphService } from './graph.service';

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
  graphSettings = input.required<typeof GRAPH_SETTINGS>();

  articleService = inject(ArticleService);
  graphService = inject(GraphService); //Accessible as the parent, GraphPageComponent, provides an instance
  destructor = inject(DestroyRef);

  graphContainer = viewChild<ElementRef<HTMLDivElement>>('graphContainer');
  elements = toSignal(this.graphService.elements$);
  zoomLevel$ = this.graphService.zoomLevelChangedEvent$;

  zoomSliderEvents$ = new Subject<string>();

  constructor() {
    effect(
      () =>
        this.graphService.createGraphEvents$.next({
          data: this.data(),
          settings: this.graphSettings(),
        }),
      {
        allowSignalWrites: true,
      },
    );

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