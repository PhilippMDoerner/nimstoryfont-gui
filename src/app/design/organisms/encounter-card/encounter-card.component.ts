import { NgTemplateOutlet } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  input,
  output,
} from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { of } from 'rxjs';
import { HotkeyDirective } from 'src/app/_directives/hotkey.directive';
import { CharacterEncounter } from 'src/app/_models/character';
import {
  Encounter,
  EncounterConnection,
  EncounterConnectionRaw,
  EncounterRaw,
} from 'src/app/_models/encounter';
import { OverviewItem } from 'src/app/_models/overview';
import { HotkeyService } from 'src/app/_services/hotkey.service';
import { ArrowButtonComponent } from '../../atoms/arrow-button/arrow-button.component';
import { ButtonComponent } from '../../atoms/button/button.component';
import { CardComponent } from '../../atoms/card/card.component';
import { HtmlTextComponent } from '../../atoms/html-text/html-text.component';
import { SpinnerComponent } from '../../atoms/spinner/spinner.component';
import { EncounterComponent } from '../encounter/encounter.component';

export type EncounterCardState = 'READ' | 'EDIT';

@Component({
  selector: 'app-encounter-card',
  imports: [
    ButtonComponent,
    EncounterComponent,
    CardComponent,
    HtmlTextComponent,
    SpinnerComponent,
    ArrowButtonComponent,
    NgTemplateOutlet,
    HotkeyDirective,
  ],
  templateUrl: './encounter-card.component.html',
  styleUrl: './encounter-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EncounterCardComponent {
  state = input.required<EncounterCardState>();
  characters = input.required<OverviewItem[]>();
  locations = input.required<OverviewItem[]>();
  encounter = input.required<Encounter | CharacterEncounter>();
  serverModel = input.required<Encounter | undefined>();
  isBeingCut = input.required<boolean>();
  isCutInProgress = input.required<boolean>();
  disabled = input.required<boolean>();
  canActivateCut = input.required<boolean>();
  isValidCutTarget = input.required<boolean>();
  canUpdate = input.required<boolean>();
  canCreate = input.required<boolean>();
  canDelete = input.required<boolean>();
  isInFocus = input.required<boolean>();
  isHotkeyActive = toSignal(inject(HotkeyService).isHotkeyActive$ ?? of(false));
  showHotkeyHelp = computed<boolean>(
    () => !!this.isHotkeyActive() && this.isInFocus(),
  );

  connectionDelete = output<EncounterConnection>();
  connectionCreate = output<EncounterConnectionRaw>();
  encounterDelete = output<Encounter | CharacterEncounter>();
  encounterUpdate = output<Encounter>();
  encounterCreate = output<EncounterRaw>();
  encounterCreateCancel = output<void>();
  startCutEncounter = output<void>();
  cutEncounterCancel = output<void>();
  moveEncounter = output<'up' | 'down'>();
}
