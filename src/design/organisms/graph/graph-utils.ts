import { drag, Selection, Simulation } from 'd3';
import { capitalize } from 'src/utils/string';
import { ArticleNode, ArticleNodeKind, Link } from './data';

export type Breakpoint = 'sm' | 'md' | 'lg' | 'xl' | 'xxl';

const colorMap: { [key in ArticleNodeKind]: string } = {
  CHARACTER: 'var(--character-color)',
  LOCATION: 'var(--location-color)',
  ORGANIZATION: 'var(--organization-color)',
  ITEM: 'var(--item-color)',
};

export function addNodes(
  hostElement: Selection<
    SVGSVGElement | SVGGElement,
    undefined,
    null,
    undefined
  >,
  nodeData: ArticleNode[],
) {
  const nodes = hostElement
    .append('g')
    .selectAll()
    .data(nodeData)
    .enter()
    .append('g')
    .attr('class', 'node')
    .attr('style', 'cursor: grab;');

  // Add image inside circle with background-color
  // const imgGroups = nodes.append('g');
  const imgSize = 10;
  // imgGroups
  nodes
    .append('circle')
    .attr('r', imgSize / 2 + 1)
    .attr('stroke', 'black')
    .attr(
      'fill',
      (d) => colorMap[d.record.article_type.toUpperCase() as ArticleNodeKind],
    );

  // imgGroups
  //   .append('image')
  //   .attr('xlink:href', (d) => `/assets/overview_images/creatures.webp`)
  //   .attr('clip-path', 'inset(0% round 50%)')
  //   .attr('width', imgSize)
  //   .attr('height', imgSize)
  //   .attr('x', (imgSize * -1) / 2)
  //   .attr('y', (imgSize * -1) / 2);

  // Add Label
  nodes
    .append('text')
    .attr('y', imgSize * 3.5)
    .attr('text-anchor', 'middle')
    .attr('stroke', '#000')
    .attr('stroke-width', 0.5)
    .attr('transform', 'scale(0.3)')
    .text((d) => d.record.name);

  nodes
    .append('title')
    .text((d) => `${capitalize(d.record.article_type)} - ${d.record.name}`);

  return nodes;
}

export function addConnections(
  hostElement: Selection<
    SVGSVGElement | SVGGElement,
    undefined,
    null,
    undefined
  >,
  links: Link[],
) {
  const allLinksElement = hostElement
    .append('g')
    .attr('stroke', '#999')
    .attr('stroke-opacity', 0.6)
    .selectAll()
    .data(links)
    .join('line')
    .attr('stroke-width', (d) => Math.sqrt(5));

  return allLinksElement;
}

export function addDragBehavior(
  node: Selection<SVGGElement, ArticleNode, SVGGElement, undefined>,
  simulation: Simulation<ArticleNode, undefined>,
) {
  function dragstarted(
    event: d3.D3DragEvent<SVGElement, ArticleNode, ArticleNode>,
  ) {
    if (!event.active) simulation.alphaTarget(0.3).restart();
    event.subject.fx = event.subject.x;
    event.subject.fy = event.subject.y;
  }

  function dragged(
    event: d3.D3DragEvent<SVGElement, ArticleNode, ArticleNode>,
  ) {
    event.subject.fx = event.x;
    event.subject.fy = event.y;
  }

  function dragended(
    event: d3.D3DragEvent<SVGElement, ArticleNode, ArticleNode>,
  ) {
    if (!event.active) simulation.alphaTarget(0);
    event.subject.fx = null;
    event.subject.fy = null;
  }

  node.call(
    drag<any, any>()
      .on('start', dragstarted)
      .on('drag', dragged)
      .on('end', dragended),
  );
}

export function copy<T>(items: T[]): T[] {
  return items.map((item) => ({ ...item }));
}

export function getBreakpoint(): Breakpoint {
  const screenWidth = window.screen.availWidth;
  if (screenWidth < 767) return 'sm';
  if (screenWidth < 991) return 'md';
  if (screenWidth < 1199) return 'lg';
  if (screenWidth < 1399) return 'xl';
  return 'xxl';
}

export function inferGraphHeight(
  width: number,
  breakpoint: Breakpoint,
): number {
  switch (breakpoint) {
    case 'sm':
      return width * 1.75;
    case 'md':
      return width * 1.5;
    case 'lg':
      return width * 1.25;
    case 'xl':
      return width;
    case 'xxl':
      return width * 0.75;
  }
}
