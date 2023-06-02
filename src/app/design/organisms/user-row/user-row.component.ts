import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';
import { PermissionGroup } from 'src/app/_models/auth';
import { User } from 'src/app/_models/user';
import { BadgeListEntry } from '../../molecules';

@Component({
  selector: 'app-user-row',
  templateUrl: './user-row.component.html',
  styleUrls: ['./user-row.component.scss']
})
export class UserRowComponent implements OnChanges{
  @Input() user!: User;
  @Input() groups!: PermissionGroup[];
  @Input() canCreate: boolean = false;
  @Input() canDelete: boolean = false;
  
  @Output() addGroup: EventEmitter<PermissionGroup> = new EventEmitter();
  @Output() removeGroup: EventEmitter<PermissionGroup> = new EventEmitter();
  @Output() deleteUser: EventEmitter<User> = new EventEmitter();
  
  userGroupEntries!: BadgeListEntry[];
  
  ngOnChanges(): void {
    this.userGroupEntries = this.user.group_details?.map(
      group => ({
        badgeValue: group.pk,
        text: group.name,
      })
    ) ?? [];
  }
}
