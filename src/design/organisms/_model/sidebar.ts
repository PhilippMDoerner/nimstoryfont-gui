import { Icon } from 'src/design/atoms/_models/icon';

export interface ArticleMetaData {
  title: string;
  iconClass: Icon;
  route: string;
  color: string;
  article_types: string[];
  showInSidebar: boolean;
  availableOffline: boolean;
}

export const SIDEBAR_ENTRIES: ArticleMetaData[] = [
  {
    title: 'Creatures',
    iconClass: 'dragon',
    route: 'creature-overview',
    color: 'red',
    article_types: ['creature'],
    showInSidebar: true,
    availableOffline: true,
  },
  {
    title: 'Characters',
    iconClass: 'male',
    route: 'character-overview',
    color: 'blue',
    article_types: ['character'],
    showInSidebar: true,
    availableOffline: true,
  },
  {
    title: 'DiaryEntries',
    iconClass: 'book-open',
    route: 'diaryentry-overview',
    color: 'darkgreen',
    article_types: ['diaryentry'],
    showInSidebar: true,
    availableOffline: true,
  },
  {
    title: 'Items',
    iconClass: 'magic',
    route: 'item-overview',
    color: 'yellow',
    article_types: ['item'],
    showInSidebar: true,
    availableOffline: true,
  },
  {
    title: 'Locations',
    iconClass: 'compass',
    route: 'location-overview',
    color: 'brown',
    article_types: ['location'],
    showInSidebar: true,
    availableOffline: true,
  },
  {
    title: 'Maps',
    iconClass: 'map',
    route: 'default-map',
    color: 'beige',
    article_types: ['map'],
    showInSidebar: true,
    availableOffline: true,
  },
  {
    title: 'Organizations',
    iconClass: 'sitemap',
    route: 'organization-overview',
    color: 'purple',
    article_types: ['organization'],
    showInSidebar: true,
    availableOffline: true,
  },
  {
    title: 'Quests',
    iconClass: 'question-circle',
    route: 'quest-overview',
    color: 'white',
    article_types: ['quest'],
    showInSidebar: true,
    availableOffline: true,
  },
  {
    title: 'Recordings',
    iconClass: 'file-audio',
    route: 'sessionaudio-overview',
    color: 'green',
    article_types: ['sessionaudio', 'recording'],
    showInSidebar: true,
    availableOffline: false,
  },
  {
    title: 'Rules',
    iconClass: 'book',
    route: 'rules',
    color: 'orange',
    article_types: ['rule', 'rules'],
    showInSidebar: true,
    availableOffline: true,
  },
  {
    title: 'Spells',
    iconClass: 'hand-sparkles',
    route: 'spells',
    color: 'violet',
    article_types: ['spell', 'spells'],
    showInSidebar: true,
    availableOffline: true,
  },
  {
    title: 'Sessions',
    iconClass: 'calendar-alt',
    route: 'sessions',
    color: 'green',
    article_types: ['session', 'sessions'],
    showInSidebar: true,
    availableOffline: true,
  },
  {
    title: 'Wiki-Overview',
    iconClass: 'diagram-project',
    route: 'graph',
    color: 'white',
    article_types: [],
    showInSidebar: true,
    availableOffline: true,
  },
  {
    title: 'Wiki Configuration',
    iconClass: 'gear',
    route: 'campaign-config-tables',
    color: 'black',
    article_types: [],
    showInSidebar: true,
    availableOffline: false,
  },
];
