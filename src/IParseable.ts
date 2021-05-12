/**
 * @public
 */
export interface IParseable<T> {
  model: T;
  children: IParseable<T>[];
}
