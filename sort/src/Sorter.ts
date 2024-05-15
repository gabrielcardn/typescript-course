/*
 * Abstract Class
 * - Can't be used toc reate an object directly
 * - Only used as parent class
 * - Can contain real implementation for some methods
 * - The implemented methods can refer to other methods that don't
 * actually exist yet (we still have to provide names and types for
 * the un-implemented methods)
 * - Can make child classes promisse to implement some other method
 */

export abstract class Sorter {
  // 'promise' that this methods and properties will exists
  abstract compare(leftIndex: number, rightIndex: number): boolean;
  abstract swap(leftIndex: number, rightIndex: number): void;
  abstract length: number;
  sort(): void {
    const { length } = this;
    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - i - 1; j++) {
        if (this.compare(j, j + 1)) {
          this.swap(j, j + 1);
        }
      }
    }
  }
}
