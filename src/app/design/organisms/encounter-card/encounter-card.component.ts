import { NgTemplateOutlet } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  input,
  output,
} from '@angular/core';
import { CharacterEncounter } from 'src/app/_models/character';
import {
  Encounter,
  EncounterConnection,
  EncounterConnectionRaw,
  EncounterRaw,
} from 'src/app/_models/encounter';
import { OverviewItem } from 'src/app/_models/overview';
import { CardComponent } from '../../atoms/card/card.component';
import { HtmlTextComponent } from '../../atoms/html-text/html-text.component';
import { SpinnerComponent } from '../../atoms/spinner/spinner.component';
import { EncounterComponent } from '../encounter/encounter.component';

export type EncounterCardState = 'READ' | 'EDIT';

@Component({
  selector: 'app-encounter-card',
  imports: [
    EncounterComponent,
    CardComponent,
    HtmlTextComponent,
    SpinnerComponent,
    NgTemplateOutlet,
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
  disabled = input.required<boolean>();
  isUpdating = input.required<boolean>();
  canUpdate = input.required<boolean>();
  canCreate = input.required<boolean>();
  canDelete = input.required<boolean>();
  isInFocus = input.required<boolean>();

  connectionDelete = output<EncounterConnection>();
  connectionCreate = output<EncounterConnectionRaw>();
  encounterDelete = output<Encounter | CharacterEncounter>();
  encounterUpdate = output<Encounter>();
  encounterCreate = output<EncounterRaw>();
  encounterCreateCancel = output<void>();
}
