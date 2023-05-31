import { Observable, of } from "rxjs";
import { User } from "src/app/_models/user";
import { UserService } from "./user.service";

export const dummyUsers: User[] = [
  {
      "username": "isofruit",
      "pk": 3,
      "email": "philippmdoerner@web.de",
      "is_staff": true,
      "is_superuser": true,
      "is_active": true,
      "groups": [3, 4],
      "group_details": [
          { "name": "Aldrune_campaign_group", "pk": 3 },
          { "name": "Aldrune_campaign_admin_group", "pk": 4 }
      ]
  },
  {
      "username": "Rhiannon",
      "pk": 6,
      "email": "dianaday@gmx.net",
      "is_staff": false,
      "is_superuser": false,
      "is_active": true,
      "groups": [3],
      "group_details": [{ "name": "Aldrune_campaign_group", "pk": 3 }]
  },
  {
      "username": "SamDay",
      "pk": 7,
      email: undefined,
      "is_staff": true,
      "is_superuser": false,
      "is_active": true,
      "groups": [],
      "group_details": []
  },
  {
      "username": "Murtagh",
      "pk": 8,
      email: undefined,
      "is_staff": false,
      "is_superuser": false,
      "is_active": true,
      "groups": [3, 6],
      "group_details": [
          { "name": "Aldrune_campaign_group", "pk": 3 },
          { "name": "Jōzai Corporation_guest_campaign_group", "pk": 6 }
      ]
  },
  {
      "username": "Ailis",
      "pk": 9,
      email: undefined,
      "is_staff": false,
      "is_superuser": false,
      "is_active": true,
      "groups": [5],
      "group_details": [{ "name": "Aldrune_guest_campaign_group", "pk": 5 }]
  },
  {
      "username": "Caitriona",
      "pk": 10,
      email: undefined,
      "is_staff": false,
      "is_superuser": false,
      "is_active": true,
      "groups": [3, 7, 8],
      "group_details": [
          { "name": "Aldrune_campaign_group", "pk": 3 },
          { "name": "Jōzai Corporation_campaign_group", "pk": 7 },
          { "name": "Jōzai Corporation_campaign_admin_group", "pk": 8 }
      ]
  },
  {
      "username": "Fen",
      "pk": 11,
      email: undefined,
      "is_staff": false,
      "is_superuser": false,
      "is_active": true,
      "groups": [3],
      "group_details": [{ "name": "Aldrune_campaign_group", "pk": 3 }]
  },
  {
      "username": "Bathilde",
      "pk": 12,
      email: undefined,
      "is_staff": false,
      "is_superuser": false,
      "is_active": true,
      "groups": [3, 7],
      "group_details": [
          { "name": "Aldrune_campaign_group", "pk": 3 },
          { "name": "Jōzai Corporation_campaign_group", "pk": 7 }
      ]
  },
  {
      "username": "Guest",
      "pk": 14,
      email: undefined,
      "is_staff": false,
      "is_superuser": false,
      "is_active": true,
      "groups": [5],
      "group_details": [{ "name": "Aldrune_guest_campaign_group", "pk": 5 }]
  },
  {
      "username": "Relentless",
      "pk": 15,
      "email": "philipp3000doerner@web.de",
      "is_staff": true,
      "is_superuser": false,
      "is_active": true,
      "groups": [3],
      "group_details": [{ "name": "Aldrune_campaign_group", "pk": 3 }]
  },
  {
      "username": "Guest2",
      "pk": 16,
      email: undefined,
      "is_staff": false,
      "is_superuser": false,
      "is_active": true,
      "groups": [5],
      "group_details": [{ "name": "Aldrune_guest_campaign_group", "pk": 5 }]
  },
  {
      "username": "Mipp1",
      "pk": 17,
      email: undefined,
      "is_staff": false,
      "is_superuser": false,
      "is_active": true,
      "groups": [5],
      "group_details": [{ "name": "Aldrune_guest_campaign_group", "pk": 5 }]
  },
  {
      "username": "Spleeti",
      "pk": 18,
      "email": "Laura.spleet@posteo.de",
      "is_staff": false,
      "is_superuser": false,
      "is_active": true,
      "groups": [5],
      "group_details": [{ "name": "Aldrune_guest_campaign_group", "pk": 5 }]
  },
  {
      "username": "Christian",
      "pk": 19,
      email: undefined,
      "is_staff": false,
      "is_superuser": false,
      "is_active": true,
      "groups": [5],
      "group_details": [{ "name": "Aldrune_guest_campaign_group", "pk": 5 }]
  },
  {
      "username": "Norbert",
      "pk": 20,
      email: undefined,
      "is_staff": false,
      "is_superuser": false,
      "is_active": true,
      "groups": [5],
      "group_details": [{ "name": "Aldrune_guest_campaign_group", "pk": 5 }]
  },
  {
      "username": "Papa",
      "pk": 21,
      "email": "Dr.KlemensDoerner@gmx.de",
      "is_staff": false,
      "is_superuser": false,
      "is_active": true,
      "groups": [5],
      "group_details": [{ "name": "Aldrune_guest_campaign_group", "pk": 5 }]
  },
  {
      "username": "Tecatin",
      "pk": 22,
      email: undefined,
      "is_staff": false,
      "is_superuser": false,
      "is_active": true,
      "groups": [7],
      "group_details": [{ "name": "Jōzai Corporation_campaign_group", "pk": 7 }]
  },
  {
      "username": "Roach",
      "pk": 23,
      email: undefined,
      "is_staff": false,
      "is_superuser": false,
      "is_active": true,
      "groups": [5, 7],
      "group_details": [
          { "name": "Aldrune_guest_campaign_group", "pk": 5 },
          { "name": "Jōzai Corporation_campaign_group", "pk": 7 }
      ]
  },
  {
      "username": "Mav",
      "pk": 25,
      email: undefined,
      "is_staff": false,
      "is_superuser": false,
      "is_active": true,
      "groups": [5],
      "group_details": [{ "name": "Aldrune_guest_campaign_group", "pk": 5 }]
  },
  {
      "username": "Sam",
      "pk": 28,
      email: undefined,
      "is_staff": false,
      "is_superuser": false,
      "is_active": true,
      "groups": [4],
      "group_details": [{ "name": "Aldrune_campaign_admin_group", "pk": 4 }]
  }
];

class UserServiceMock implements Partial<UserService> {
  list(): Observable<User[]> {
    return of(dummyUsers);
  }
}

export const UserServiceMockProvider = {
  provide: UserService,
  useClass: UserServiceMock,
}