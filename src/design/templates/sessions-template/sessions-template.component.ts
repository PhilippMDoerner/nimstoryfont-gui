import {
  ChangeDetectionStrategy,
  Component,
  computed,
  EventEmitter,
  inject,
  input,
  Output,
} from '@angular/core';
import { RouterLink } from '@angular/router';
import { Session, SessionRaw } from 'src/app/_models/session';
import { RoutingService } from 'src/app/_services/routing.service';
import { ButtonComponent } from 'src/design/atoms/button/button.component';
import { PageContainerComponent } from 'src/design/organisms/page-container/page-container.component';
import { SessionsComponent } from 'src/design/organisms/sessions/sessions.component';

@Component({
    selector: 'app-sessions-template',
    imports: [
        SessionsComponent,
        PageContainerComponent,
        ButtonComponent,
        RouterLink,
    ],
    templateUrl: './sessions-template.component.html',
    styleUrl: './sessions-template.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SessionsTemplateComponent {
  campaignName = input.required<string>();
  campaignId = input.required<number>();
  sessions = input.required<Session[]>();
  canUpdate = input.required<boolean>();
  canDelete = input.required<boolean>();
  canCreate = input.required<boolean>();
  serverModel = input.required<Session | undefined>();

  @Output() sessionDelete: EventEmitter<Session> = new EventEmitter();
  @Output() sessionUpdate: EventEmitter<Session> = new EventEmitter();
  @Output() sessionCreate: EventEmitter<SessionRaw> = new EventEmitter();

  routingService = inject(RoutingService);

  homeUrl = computed(() =>
    this.routingService.getRoutePath('home', { campaign: this.campaignName() }),
  );
}
