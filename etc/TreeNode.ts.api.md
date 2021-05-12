## API Report File for "TreeNode.ts"

> Do not edit this file. It is a report generated by [API Extractor](https://api-extractor.com/).

```ts

// @public (undocumented)
export interface IParseable<T> {
    // (undocumented)
    children: IParseable<T>[];
    // (undocumented)
    model: T;
}

// @public
export type SearchCallback<T> = (node: TreeNode<T>) => (boolean | void);

// @public
export type SearchStrategy = 'pre' | 'post' | 'breadth';

// @public (undocumented)
export class TreeNode<T> {
    constructor(model: T, parent?: TreeNode<T> | null, children?: TreeNode<T>[]);
    add(child: TreeNode<T>): TreeNode<T>;
    breadth(callback: SearchCallback<T>): TreeNode<T> | null;
    // (undocumented)
    children: TreeNode<T>[];
    clone(): TreeNode<T>;
    drop(): TreeNode<T>;
    flatten(method: SearchStrategy): TreeNode<T>[];
    get hasChildren(): boolean;
    get index(): number;
    map<U>(callback: (obj: T) => U): TreeNode<U>;
    // (undocumented)
    model: T;
    // (undocumented)
    parent: TreeNode<T> | null;
    static parse<T>(tree: IParseable<T>): TreeNode<T>;
    path(): TreeNode<T>[];
    post(callback: SearchCallback<T>): TreeNode<T> | null;
    pre(callback: SearchCallback<T>): TreeNode<T> | null;
    toObject(): IParseable<T>;
}


// (No @packageDocumentation comment for this package)

```