import { NumbersCollection } from "./NumbersCollection";
import { CharactersCollection } from "./CharactersCollection";
import { LinkedList } from "./LinkedList";

console.log("\nSort numbers:");
const numbersCollection = new NumbersCollection([10, 3, -5, 100]);
numbersCollection.sort();
console.log("Before: ", numbersCollection.data);
numbersCollection.sort();
console.log("After: ", numbersCollection.data);

console.log("\nSort strings:");
const charactersCollection = new CharactersCollection("XXaaaxcccbb");
console.log("Before: ", charactersCollection.data);
charactersCollection.sort();
console.log("After: ", charactersCollection.data);

console.log("\nSort linked list:");
const linkedList = new LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(-3);
linkedList.add(4);

linkedList.sort();
let linkedListSortedValues = linkedList.getSortedValues();
console.log("Sorted: ", linkedListSortedValues);
