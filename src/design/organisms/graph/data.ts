import { ArticleNode, NodeLink } from 'src/app/_models/nodeMap';

export const SELECTORS = {
  nodeClass: 'node',
  nodeSelector: '.node',
  linkClass: 'link',
  linkSelector: 'line.link',
  linkLabelClass: 'link-label',
  linkLabelSelector: 'text.link-label',
  activeClass: `node--active`,
  activeSelector: `g.node.node--active`,
  graphId: 'graph',
  graphSelector: `#graph`,
  nodeMenuId: 'context-menu',
  nodeMenuSelector: `#context-menu`,
  nodeMenuCloseBtnId: 'context-menu-close',
  nodeMenuCloseBtnSelector: '#context-menu-close',
  linkMenuId: 'link-context-menu',
  linkMenuSelector: `#link-context-menu`,
  deleteLinkId: 'delete-link',
  deleteLinkSelector: '#delete-link',
};

export type NodeClickEvent = {
  event: MouseEvent;
  clickedNode: ArticleNode | undefined;
};
export type LinkClickEvent = {
  event: MouseEvent;
  clickedLink: NodeLink | undefined;
};
