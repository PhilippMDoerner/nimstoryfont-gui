import { Icon } from 'src/design/atoms';

export interface ArticleMetaData {
  title: string;
  iconClass: Icon;
  route: string;
  color: string;
  article_types: string[];
  showInSidebar: boolean;
}

export const SIDEBAR_ENTRIES: ArticleMetaData[] = [
  {
    title: 'Creatures',
    iconClass: 'dragon',
    route: 'creature-overview',
    color: 'red',
    article_types: ['creature'],
    showInSidebar: true,
  },
  {
    title: 'Characters',
    iconClass: 'male',
    route: 'character-overview',
    color: 'blue',
    article_types: ['character'],
    showInSidebar: true,
  },
  {
    title: 'DiaryEntries',
    iconClass: 'book-open',
    route: 'diaryentry-overview',
    color: 'darkgreen',
    article_types: ['diaryentry'],
    showInSidebar: true,
  },
  {
    title: 'Items',
    iconClass: 'magic',
    route: 'item-overview',
    color: 'yellow',
    article_types: ['item'],
    showInSidebar: true,
  },
  {
    title: 'Locations',
    iconClass: 'compass',
    route: 'location-overview',
    color: 'brown',
    article_types: ['location'],
    showInSidebar: true,
  },
  {
    title: 'Maps',
    iconClass: 'map',
    route: 'default-map',
    color: 'beige',
    article_types: ['map'],
    showInSidebar: true,
  },
  {
    title: 'Organizations',
    iconClass: 'sitemap',
    route: 'organization-overview',
    color: 'purple',
    article_types: ['organization'],
    showInSidebar: true,
  },
  {
    title: 'Quests',
    iconClass: 'question-circle',
    route: 'quest-overview',
    color: 'white',
    article_types: ['quest'],
    showInSidebar: true,
  },
  {
    title: 'Recordings',
    iconClass: 'file-audio-o',
    route: 'sessionaudio-overview',
    color: 'green',
    article_types: ['sessionaudio', 'recording'],
    showInSidebar: true,
  },
  {
    title: 'Rules',
    iconClass: 'book',
    route: 'rules',
    color: 'orange',
    article_types: ['rule', 'rules'],
    showInSidebar: true,
  },
  {
    title: 'Spells',
    iconClass: 'hand-sparkles',
    route: 'spells',
    color: 'violet',
    article_types: ['spell', 'spells'],
    showInSidebar: true,
  },
  {
    title: 'Sessions',
    iconClass: 'calendar-alt',
    route: 'sessions',
    color: 'green',
    article_types: ['session', 'sessions'],
    showInSidebar: true,
  },
];
