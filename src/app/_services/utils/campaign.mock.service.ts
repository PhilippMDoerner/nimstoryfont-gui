import { Campaign, CampaignOverview } from "src/app/_models/campaign";

export const dummyCampaigns: CampaignOverview[] = [
  {
    pk: 1,
    name: "Aldrune",
    subtitle: "A campaign made by Samuel Day and recorded by Philipp Dörner<br>through the eyes of Relentless",
    background_image: "/media/campaign_backgrounds/bg.jpg",
    is_deactivated: false,
    has_audio_recording_permission: true,
    icon: "/media/campaign_icons/favicon-128x128.png",
    default_map: 1,
    default_map_details: {
        icon: "map",
        image: "pic05_sMT2d6M.jpg",
        name: "Aldrune",
        id: 1
    },
    duration: {
        start_date: "2020-04-07T00:00:00.000000Z",
        last_date: "2023-04-11T00:00:00.000000Z"
    },
    isMember: false,
    isAdmin: false,
    isGuest: false,
  },
  {
    pk: 2,
    name: "Jōzai Corp",
    subtitle: "Welcome to Jōzai Corp, please enjoy your employment.",
    background_image: "/media/campaign_backgrounds/shanghai_city_snlaYDd.jpg",
    is_deactivated: false,
    has_audio_recording_permission: false,
    icon: "/media/campaign_icons/icon.png",
    default_map: undefined,
    default_map_details: undefined,
    duration: {
        start_date: "2022-01-15T00:00:00.000000Z",
        last_date: "2022-02-19T00:00:00.000000Z"
    },
    isMember: false,
    isAdmin: false,
    isGuest: false,
  }
]

export const dummyCampaign: Campaign = {
  name: 'Aldrune',
  subtitle: 'A campaign for testing',
  pk: 1,
  background_image: '/assets/default_images/audio_pic_default.webp',
  icon: 'https://www.aldrune.com/media/campaign_icons/favicon-128x128.png',
  default_map: 123,
  default_map_details: { id: 123, name: 'Default Map', icon: 'plus', image: 'blub.jpg' },
  is_deactivated: false,
  has_audio_recording_permission: true,
  members: [],
  admins: [],
  guests: [],
  member_group_name: 'Members',
  admin_group_name: 'Admins',
  guest_group_name: 'Guests',
  emptySearchResponses: [
    { id: 1, text: 'Empty response 1', campaign: 1 },
    { id: 2, text: 'Empty response 2', campaign: 1 }
  ]
};
