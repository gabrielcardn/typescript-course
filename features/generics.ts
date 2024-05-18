class ArrayOfNumbers {
  constructor(public collection: number[]) {}

  get(index: number): number {
    return this.collection[index];
  }
}

class ArrayOfStrings {
  constructor(public collection: string[]) {}

  get(index: number): string {
    return this.collection[index];
  }
}

class ArrayOfAnything<T> {
  constructor(public collection: T[]) {}

  get(index: number): T {
    return this.collection[index];
  }
}

new ArrayOfAnything<string>(["a", "b", "c"]);
// type inference!
new ArrayOfAnything(["a", "b", "c"]);

// generics with functions
function printAnything<T>(arr: T[]): void {
  for (let i = 0; i < arr.length; i++) console.log(arr[i]);
}
printAnything<string>(["a", "b", "c"]);
// type inference!
printAnything(["a", "b", "c"]);

// generic constraint
interface Printable {
  print(): void;
}

function printHousesOrCards<T extends Printable>(arr: T[]): void {
  for (let i = 0; i < arr.length; i++) arr[i].print();
}
