import {
  ChangeDetectionStrategy,
  Component,
  computed,
  EventEmitter,
  input,
  Output,
  signal,
} from '@angular/core';
import { Session, SessionRaw } from 'src/app/_models/session';
import {
  slideOutFromBottom,
  slideUpFromBottom,
} from 'src/design/animations/slideDown';
import { ButtonComponent } from 'src/design/atoms/button/button.component';
import { SpinnerComponent } from 'src/design/atoms/spinner/spinner.component';
import { CollapsiblePanelComponent } from 'src/design/molecules';
import { SessionComponent } from '../session/session.component';

interface SessionCard {
  session: Session;
  isOpen: boolean;
}

@Component({
    selector: 'app-sessions',
    imports: [
        ButtonComponent,
        CollapsiblePanelComponent,
        SessionComponent,
        SpinnerComponent,
    ],
    templateUrl: './sessions.component.html',
    styleUrl: './sessions.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
    animations: [slideOutFromBottom, slideUpFromBottom]
})
export class SessionsComponent {
  DEFAULT_TITLE = 'New Session';

  campaignId = input.required<number>();
  sessions = input.required<Session[]>();
  canUpdate = input.required<boolean>();
  canDelete = input.required<boolean>();
  canCreate = input.required<boolean>();
  serverModel = input.required<Session | undefined>();

  @Output() sessionDelete: EventEmitter<Session> = new EventEmitter();
  @Output() sessionUpdate: EventEmitter<Session> = new EventEmitter();
  @Output() sessionCreate: EventEmitter<SessionRaw> = new EventEmitter();

  isCreatingSession = signal(false);
  createSessionData = computed(
    () =>
      ({
        name: this.DEFAULT_TITLE,
        campaign: this.campaignId(),
      }) as Session,
  );

  sessionCards = computed<SessionCard[]>(() =>
    this.sessions().map((session) => ({ session: session, isOpen: false })),
  );

  onSessionDelete(sessionToDelete: Session) {
    this.sessionDelete.emit(sessionToDelete);
  }

  onSessionCreate(session: Partial<SessionRaw>) {
    this.sessionCreate.emit({
      ...session,
      campaign: this.campaignId(),
    } as SessionRaw);
    this.isCreatingSession.set(false);
  }

  cancelSessionCreation() {
    this.isCreatingSession.set(false);
  }

  addSession() {
    this.isCreatingSession.set(true);
  }
}
