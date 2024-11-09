import { TitleCasePipe } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  EventEmitter,
  input,
  Output,
} from '@angular/core';
import { PermissionGroup } from 'src/app/_models/auth';
import { User } from 'src/app/_models/user';
import { IconComponent } from 'src/design/atoms/icon/icon.component';
import {
  BadgeListComponent,
  BadgeListEntry,
  ConfirmationToggleButtonComponent,
} from '../../molecules';

@Component({
  selector: 'app-user-row',
  templateUrl: './user-row.component.html',
  styleUrls: ['./user-row.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    IconComponent,
    BadgeListComponent,
    TitleCasePipe,
    ConfirmationToggleButtonComponent,
  ],
})
export class UserRowComponent {
  user = input.required<User>();
  groups = input<PermissionGroup[] | undefined>();
  canCreate = input<boolean>(false);
  canDelete = input<boolean>(false);

  @Output() addGroup: EventEmitter<PermissionGroup> = new EventEmitter();
  @Output() removeGroup: EventEmitter<number> = new EventEmitter();
  @Output() deleteUser: EventEmitter<User> = new EventEmitter();

  userGroupEntries = computed<BadgeListEntry<number>[]>(() => {
    return (
      this.user().group_details?.map((group) => ({
        badgeValue: group.pk,
        text: group.name,
      })) ?? []
    );
  });
}
