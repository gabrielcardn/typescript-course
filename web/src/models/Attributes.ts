export class Attributes<T extends Object> {
  constructor(private data: T) {}

  // generics return type of function
  get = <K extends keyof T>(key: K): T[K] => {
    return this.data[key];
  };

  set = (update: T): void => {
    // Copy the values of all of the enumerable own properties
    // from one or more source objects to a target object.
    // Returns the target object. (update -> this.data)
    Object.assign(this.data, update);
  };
}
