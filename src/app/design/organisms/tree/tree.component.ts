import { DataSource } from '@angular/cdk/collections';
import { CdkTree, CdkTreeModule } from '@angular/cdk/tree';
import {
  ChangeDetectionStrategy,
  Component,
  input,
  viewChild,
} from '@angular/core';
import { RouterLink } from '@angular/router';

export interface TreeNode {
  children?: TreeNode[] | undefined;
  label: string;
  link: string;
  id: number | string;
  isRootNode: boolean;
  level: number;
}

@Component({
  selector: 'app-tree',
  imports: [CdkTreeModule, RouterLink],
  templateUrl: './tree.component.html',
  styleUrl: './tree.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TreeComponent {
  data = input.required<DataSource<TreeNode>>();
  Array = Array;

  tree = viewChild.required<CdkTree<TreeNode, TreeNode>>('tree');

  childrenAccessor = (dataNode: TreeNode) => dataNode.children ?? [];

  hasChild = (_: number, node: TreeNode) =>
    !!node.children && node.children.length > 0;

  trackByFn = (_: number, node: TreeNode) => node.id;
}
