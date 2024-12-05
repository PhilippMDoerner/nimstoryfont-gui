export interface NodeLinkRaw {
  node1Guid: string;
  node2Guid: string;
  label: string;
  weight: number;
}

export interface ArticleNode extends d3.SimulationNodeDatum {
  record: { article_type: ArticleNodeKind; name: string } & unknown;
  guid: string;
}

export interface NodeLink extends d3.SimulationLinkDatum<ArticleNode> {
  weight: number;
  label: string;
  linkKind: string;
  id?: number; //Available if linkKind === 'custom'
}

export interface NodeMap {
  nodes: ArticleNode[];
  links: NodeLink[];
}

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
