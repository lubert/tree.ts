import { TreeNode } from './TreeNode';
import { IParseable } from './IParseable';

/**
 * @public
 */
export class Tree {
  static parse<T>(tree: IParseable<T>): TreeNode<T> {
    const node = new TreeNode(tree.model);
    tree.children.forEach((child) => node.add(Tree.parse(child)));
    return node;
  }
}
