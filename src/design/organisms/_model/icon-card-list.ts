import { ArticleKind } from 'src/app/_models/overview';
import { Icon } from 'src/design/atoms/_models/icon';

export interface IconCardEntry {
  entryType: ArticleKind;
  icon: Icon;
  link: string;
  title: string;
  subText: string;
  updateDatetime: string;
  decoration?: string;
}
