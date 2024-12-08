import { ArticleObject } from './article';

export interface RuleRaw {
  name: string;
  description?: string;
  campaign: number;
}

export interface Rule extends ArticleObject {
  pk?: number;
  name: string;
  creation_datetime?: string;
  update_datetime?: string;
  description: string;
}
