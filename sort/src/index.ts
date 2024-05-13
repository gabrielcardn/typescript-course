import { Sorter } from "./Sorter";
import { NumbersCollection } from "./NumbersCollection";

const numbersCollection = new NumbersCollection([10, 3, -5, 100]);
const sorter = new Sorter(numbersCollection);
console.log("Before: ", sorter.collection);
sorter.sort();
console.log("After: ", sorter.collection);


