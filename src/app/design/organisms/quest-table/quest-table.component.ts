import { NgTemplateOutlet } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
  signal,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { OverviewItem } from 'src/app/_models/overview';
import { Icon } from 'src/app/design/atoms/_models/icon';
import { IconComponent } from 'src/app/design/atoms/icon/icon.component';

type DisplayState =
  | 'Default'
  | 'All'
  | 'Completed'
  | 'Failed'
  | 'On hold'
  | 'In progress';

@Component({
  selector: 'app-quest-table',
  templateUrl: './quest-table.component.html',
  styleUrls: ['./quest-table.component.scss'],
  imports: [FormsModule, RouterLink, IconComponent, NgTemplateOutlet],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class QuestTableComponent {
  DISPLAY_STATES: DisplayState[] = [
    'Default',
    'All',
    'Completed',
    'Failed',
    'On hold',
    'In progress',
  ];
  STATE_ICON_MAPPING: { [key: string]: Icon } = {
    Completed: 'square-check',
    'On Hold': 'hourglass-half',
    Failed: 'times',
    'In progress': 'spinner',
  };

  STATE_TABLE_TYPE_MAPPING = {
    Completed: 'success',
    'On Hold': 'warning',
    Failed: 'danger',
    'In progress': '',
  };

  questTaker = input.required<string>();
  quests = input.required<OverviewItem[]>();

  state = signal<DisplayState>('Default');
  displayQuests = computed<OverviewItem[]>(() =>
    this.quests().filter((quest) =>
      this.shouldDisplayQuest(quest, this.state()),
    ),
  );

  updateDisplayState(event: Event) {
    const newDisplayState = (event.target as HTMLSelectElement)
      .value as DisplayState;
    this.state.set(newDisplayState);
  }

  shouldDisplayQuest(quest: OverviewItem, displayState: DisplayState): boolean {
    const isShowingAllQuests = displayState.toLowerCase() === 'all';
    if (isShowingAllQuests) {
      return true;
    }

    const isMatchingDesiredState =
      displayState.toLowerCase() === quest.status?.toLowerCase();
    if (isMatchingDesiredState) {
      return true;
    }

    const isDefaultState = displayState === 'Default';
    const isMatchingDefault = ['in progress', 'on hold'].includes(
      quest.status?.toLowerCase() as string,
    );
    return isDefaultState && isMatchingDefault;
  }
}
