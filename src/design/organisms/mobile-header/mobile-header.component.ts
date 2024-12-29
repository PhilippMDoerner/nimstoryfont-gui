import { AsyncPipe } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  input,
  output,
} from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { OnlineService } from 'src/app/_services/online.service';
import { environment } from 'src/environments/environment';
import { IconComponent } from '../../atoms/icon/icon.component';

@Component({
  selector: 'app-mobile-header',
  standalone: true,
  imports: [IconComponent, RouterLink, AsyncPipe, NgbTooltipModule],
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

  online$ = inject(OnlineService).online$;
}
