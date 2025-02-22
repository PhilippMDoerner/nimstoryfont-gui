import { TitleCasePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { HotkeyDirective } from 'src/app/_directives/hotkey.directive';
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
  imports: [IconComponent, TitleCasePipe, SeparatorComponent, HotkeyDirective],
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
      icon: 'list',
      title: 'List Pages',
      subtitle:
        'Apply on pages with lists of items in them, i.e. spells, rules, sessions',
      keys: [
        {
          key: '⭣',
          description:
            'Focus and scroll into center the next entry of the list',
        },
        {
          key: '⭡',
          description:
            'Focus and scroll into center the previous entry of the list',
        },
        {
          key: 'e',
          description:
            'Toggle edit mode for the currently focused entry of the list',
        },
        {
          key: 'd',
          description:
            'Toggle delete confirmation button if given page has one. This still requires confirming the delete.',
        },
        {
          key: 'q',
          description:
            'Cancel editing/deleting the currently focused entry of the list',
        },
      ],
    },
    {
      icon: 'book-open',
      title: 'Diaryentry Page',
      subtitle:
        'Apply on the Diaryentry page in addition to those from list pages',
      keys: [
        {
          key: 'f',
          description:
            'Focus and scroll into center the currently focused Encounter',
        },
        {
          key: 'x',
          description: 'Start cutting out the currently focused encounter',
        },

        {
          key: 'c',
          description:
            'Start adding a character to the currently focused encounter',
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
      .pipe(takeUntilDestroyed())
      .subscribe(() => this.openModal());
  }

  openModal() {
    if (this.modalService.hasOpenModals()) return;

    this.modalService.open(HotkeyModalComponent);
  }

  dismiss() {
    this.modalService.dismissAll();
  }
}
