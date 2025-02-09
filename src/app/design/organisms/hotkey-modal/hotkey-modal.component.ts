import { TitleCasePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { filter } from 'rxjs';
import { HotkeyService } from 'src/app/_services/hotkey.service';
import { Icon } from '../../atoms/_models/icon';
import { IconComponent } from '../../atoms/icon/icon.component';
import { SeparatorComponent } from '../../atoms/separator/separator.component';

type Section = {
  title: string;
  subtitle?: string;
  icon: Icon;
  keys: Hotkey[];
};

type Hotkey = {
  key: string;
  description: string;
};

@Component({
  selector: 'app-hotkey-modal',
  imports: [IconComponent, TitleCasePipe, SeparatorComponent],
  templateUrl: './hotkey-modal.component.html',
  styleUrl: './hotkey-modal.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HotkeyModalComponent {
  sections: Section[] = [
    {
      icon: 'globe-americas',
      title: 'Global',
      subtitle: 'Apply everywhere in the app',
      keys: [
        {
          key: 't',
          description: 'Scroll back to top instantly',
        },
        {
          key: 'd',
          description:
            'General delete action. Toggle delete confirmation button if given page has one. This still requires confirming the delete.',
        },
        {
          key: 'q',
          description: 'General quit action. Cancels currently active actions',
        },
        {
          key: 'e',
          description:
            'General edit action. Activates edit mode if given page has one',
        },
        {
          key: 'c',
          description:
            'General create action. Moves to creating a specific item if given page has a way to create one',
        },
      ],
    },
    {
      icon: 'book-open',
      title: 'Diaryentry Page',
      keys: [
        {
          key: 'f',
          description:
            'Focus and scroll into center the currently focused Encounter',
        },
        {
          key: '⭣',
          description: 'Focus and scroll into center the next Encounter',
        },
        {
          key: '⭡',
          description: 'Focus and scroll into center the previous Encounter',
        },
        {
          key: 'x',
          description: 'Start cutting out the currently focused encounter',
        },
        {
          key: 'e',
          description: 'Toggle edit mode for the currently focused encounter',
        },
        {
          key: 'c',
          description:
            'Start adding a character to the currently focused encounter',
        },
        {
          key: 'q',
          description:
            'Cancel adding a character to the currently focused encounter',
        },
        {
          key: 'r',
          description: 'Toggle view of diaryentry to read or edit mode',
        },
      ],
    },
  ];

  modalService = inject(NgbModal);

  constructor(hotkeyService: HotkeyService) {
    hotkeyService
      .watch('h')
      .pipe(
        filter(() => !this.modalService.hasOpenModals()),
        takeUntilDestroyed(),
      )
      .subscribe(() => this.modalService.open(HotkeyModalComponent));
  }

  dismiss() {
    this.modalService.dismissAll();
  }
}
