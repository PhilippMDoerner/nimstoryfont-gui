export interface NodeLinkTypeRaw {
  name: string;
  icon?: string;
  color: string;
  weight: number;
  campaign_id: number;
}

export interface NodeLinkType {
  id: number;
  name: string;
  icon?: string;
  color: string;
  weight: number;
  campaign_id: number;
}

export interface NodeLinkRaw {
  sourceGuid: string;
  targetGuid: string;
  label: string;
  weight: number;
  campaign_id: number;
  link_type_id: number;
}

export interface ArticleNode extends d3.SimulationNodeDatum {
  record: { article_type: ArticleNodeKind; name: string } & Record<
    string,
    string | number | boolean | null
  >;
  guid: string;
}

export interface NodeLink extends d3.SimulationLinkDatum<ArticleNode> {
  id?: number; //Available if linkKind === 'custom'
  label: string;
  weight: number;
  color: string;
  icon: string | null;
  linkKind: string;
}

export interface NodeMap {
  nodes: ArticleNode[];
  links: NodeLink[];
}

export type NodeSelection = [] | [ArticleNode] | [ArticleNode, ArticleNode];

export type Breakpoint = 'sm' | 'md' | 'lg' | 'xl' | 'xxl';

export type ArticleNodeKind =
  | 'LOCATION'
  | 'CHARACTER'
  | 'ORGANIZATION'
  | 'ITEM';

export const NODE_COLOR_MAP: { [key in ArticleNodeKind]: string } = {
  CHARACTER: 'var(--character-color)',
  LOCATION: 'var(--location-color)',
  ORGANIZATION: 'var(--organization-color)',
  ITEM: 'var(--item-color)',
};
