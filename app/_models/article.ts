export interface ApiObject {
  getAbsoluteRouterUrl: () => string;
  pk?: number;
}

export interface ArticleObject extends ApiObject {
  name?: string;
  creation_datetime?: string;
  update_datetime?: string;
  description?: string;
  campaign?: number;
  campaign_details?: MinimumCampaignOverview;
}

export type MinimumCampaignOverview = { name: string; id: number };
