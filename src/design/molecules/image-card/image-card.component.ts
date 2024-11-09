import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-image-card',
  templateUrl: './image-card.component.html',
  styleUrls: ['./image-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [],
})
export class ImageCardComponent {
  serverUrl = input.required<string>();
  imageUrl = input.required<string>();
  text = input.required<string>();
  alt = input<string>();
}
