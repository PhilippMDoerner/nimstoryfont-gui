export interface BadgeListEntry{
  text: string;
  link?: string;
  badgeValue: any;
}

export interface BadgeListSelectOptions{
  options: any[];
  labelProp: string;
  valueProp: string;
}