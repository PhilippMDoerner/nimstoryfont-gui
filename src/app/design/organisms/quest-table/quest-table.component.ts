import { NgTemplateOutlet } from '@angular/common';
import { Component, Input, OnChanges, OnInit } from '@angular/core';
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
type TableType = 'success' | 'warning' | 'danger';

@Component({
  selector: 'app-quest-table',
  templateUrl: './quest-table.component.html',
  styleUrls: ['./quest-table.component.scss'],
  imports: [FormsModule, RouterLink, IconComponent, NgTemplateOutlet],
})
export class QuestTableComponent implements OnInit, OnChanges {
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

  @Input() questTaker!: string;
  @Input() quests!: OverviewItem[];

  state: DisplayState = 'Default';
  displayQuests!: OverviewItem[];

  ngOnInit(): void {
    this.filterQuests();
  }

  ngOnChanges(): void {
    this.filterQuests();
  }

  filterQuests() {
    this.displayQuests = this.quests.filter((quest) =>
      this.shouldDisplayQuest(quest),
    );
  }

  shouldDisplayQuest(quest: OverviewItem): boolean {
    const isShowingAllQuests = this.state.toLowerCase() === 'all';
    if (isShowingAllQuests) {
      return true;
    }

    const isMatchingDesiredState =
      this.state.toLowerCase() === quest.status?.toLowerCase();
    if (isMatchingDesiredState) {
      return true;
    }

    const isDefaultState = this.state === 'Default';
    const isMatchingDefault = ['in progress', 'on hold'].includes(
      quest.status?.toLowerCase() as string,
    );
    return isDefaultState && isMatchingDefault;
  }
}
