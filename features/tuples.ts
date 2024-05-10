const drink = {
  color: "brown",
  carbonated: true,
  sugar: 40,
};

type Drink = [string, boolean, number];

const pepsi: Drink = ["brown", true, 40];
const sprite: Drink = ["clear", true, 40];
const tea: Drink = ["brown", false, 0];

const carSpec: [number, number] = [400, 3354];

type Car = {
  horsepower: number;
  weight: number;
};

const carStats: Car = {
  horsepower: 400,
  weight: 3354,
};
