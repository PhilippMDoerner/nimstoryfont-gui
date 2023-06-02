import {
  Campaign,
  CampaignOverview,
  WikiStatistics,
} from 'src/app/_models/campaign';

export const dummyCampaigns: CampaignOverview[] = [
  {
    pk: 1,
    name: 'Aldrune',
    subtitle:
      'A campaign made by Samuel Day and recorded by Philipp Dörner<br>through the eyes of Relentless',
    background_image: '/media/campaign_backgrounds/bg.jpg',
    is_deactivated: false,
    has_audio_recording_permission: true,
    icon: '/media/campaign_icons/favicon-128x128.png',
    default_map: 1,
    default_map_details: {
      icon: 'map',
      image: 'pic05_sMT2d6M.jpg',
      name: 'Aldrune',
      id: 1,
    },
    duration: {
      start_date: '2020-04-07T00:00:00.000000Z',
      last_date: '2023-04-11T00:00:00.000000Z',
    },
    isMember: false,
    isAdmin: false,
    isGuest: false,
  },
  {
    pk: 2,
    name: 'Jōzai Corp',
    subtitle: 'Welcome to Jōzai Corp, please enjoy your employment.',
    background_image: '/media/campaign_backgrounds/shanghai_city_snlaYDd.jpg',
    is_deactivated: false,
    has_audio_recording_permission: false,
    icon: '/media/campaign_icons/icon.png',
    default_map: undefined,
    default_map_details: undefined,
    duration: {
      start_date: '2022-01-15T00:00:00.000000Z',
      last_date: '2022-02-19T00:00:00.000000Z',
    },
    isMember: false,
    isAdmin: false,
    isGuest: false,
  },
];

export const dummyStatistics: WikiStatistics = {
  character_count: 265,
  item_count: 142,
  location_count: 229,
  creature_count: 42,
  diaryentry_count: 101,
  encounter_count: 954,
  organization_count: 46,
  quest_count: 69,
  quote_count: 203,
  session_audio_count: 69,
  timestamp_count: 1121,
  map_count: 7,
  marker_count: 136,
  spell_count: 22,
  session_count: 90,
  rule_count: 17,
};

export const dummySiteStatistics = {
  character_count: 294,
  item_count: 142,
  location_count: 263,
  creature_count: 43,
  diaryentry_count: 101,
  encounter_count: 954,
  organization_count: 56,
  quest_count: 69,
  quote_count: 209,
  session_audio_count: 69,
  timestamp_count: 1121,
  map_count: 8,
  marker_count: 142,
  spell_count: 22,
  rule_count: 17,
};

export const dummyCampaign: Campaign = {
  name: 'Aldrune',
  subtitle: 'A campaign for testing',
  pk: 1,
  background_image: '/assets/default_images/audio_pic_default.webp',
  icon: 'https://www.aldrune.com/media/campaign_icons/favicon-128x128.png',
  default_map: 123,
  default_map_details: {
    id: 123,
    name: 'Default Map',
    icon: 'plus',
    image: 'blub.jpg',
  },
  is_deactivated: false,
  has_audio_recording_permission: true,
  members: [
    {
      username: 'isofruit',
      password: 'password1',
      pk: 1,
      api_permissions: ['permission1', 'permission2'],
      groups: [1, 2],
      group_details: [
        { name: 'group1', pk: 1 },
        { name: 'group2', pk: 2 },
      ],
      is_staff: true,
      is_superuser: false,
      email: 'user1@example.com',
      is_active: true,
    },
    {
      username: 'user2',
      password: 'password2',
      pk: 2,
      api_permissions: ['permission3', 'permission4'],
      groups: [1, 3],
      group_details: [
        { name: 'group1', pk: 1 },
        { name: 'group3', pk: 3 },
      ],
      is_staff: false,
      is_superuser: false,
      email: 'user2@example.com',
      is_active: true,
    },
  ],
  admins: [
    {
      username: 'admin',
      password: 'adminpassword',
      pk: 3,
      api_permissions: [
        'permission1',
        'permission2',
        'permission3',
        'permission4',
      ],
      groups: [1, 2, 3],
      group_details: [
        { name: 'group1', pk: 1 },
        { name: 'group2', pk: 2 },
        { name: 'group3', pk: 3 },
      ],
      is_staff: true,
      is_superuser: true,
      email: 'admin@example.com',
      is_active: true,
    },
    {
      username: 'user3',
      password: 'password3',
      pk: 4,
      api_permissions: ['permission1'],
      groups: [1],
      group_details: [{ name: 'group1', pk: 1 }],
      is_staff: false,
      is_superuser: false,
      email: 'user3@example.com',
      is_active: true,
    },
  ],
  guests: [
    {
      username: 'user4',
      password: 'password4',
      pk: 5,
      api_permissions: ['permission2', 'permission3'],
      groups: [2, 3],
      group_details: [
        { name: 'group2', pk: 2 },
        { name: 'group3', pk: 3 },
      ],
      is_staff: false,
      is_superuser: false,
      email: 'user4@example.com',
      is_active: true,
    },
    {
      username: 'user5',
      password: 'password5',
      pk: 6,
      api_permissions: ['permission4'],
      groups: [3],
      group_details: [{ name: 'group3', pk: 3 }],
      is_staff: false,
      is_superuser: false,
      email: 'user5@example.com',
      is_active: true,
    },
  ],
  member_group_name: 'Members',
  admin_group_name: 'Admins',
  guest_group_name: 'Guests',
  emptySearchResponses: [
    { id: 1, text: 'Empty response 1', campaign: 1 },
    { id: 2, text: 'Empty response 2', campaign: 1 },
  ],
};
