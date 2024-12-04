import {
  ChangeDetectionStrategy,
  Component,
  input,
  output,
} from '@angular/core';
import { RouterLink } from '@angular/router';
import { environment } from 'src/environments/environment';
import { IconComponent } from '../../atoms/icon/icon.component';

@Component({
  selector: 'app-mobile-header',
  standalone: true,
  imports: [IconComponent, RouterLink],
  templateUrl: './mobile-header.component.html',
  styleUrl: './mobile-header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MobileHeaderComponent {
  currentCampaignIconUrl = input.required<string | undefined>();
  title = input.required<string>();
  titleUrl = input.required<string>();
  canShowSidebar = input.required<boolean>();

  openSidebar = output<void>();
  serverUrl = environment.backendDomain;
}
