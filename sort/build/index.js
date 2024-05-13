"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Sorter_1 = require("./Sorter");
const NumbersCollection_1 = require("./NumbersCollection");
const numbersCollection = new NumbersCollection_1.NumbersCollection([10, 3, -5, 100]);
const sorter = new Sorter_1.Sorter(numbersCollection);
console.log("Before: ", sorter.collection);
sorter.sort();
console.log("After: ", sorter.collection);
