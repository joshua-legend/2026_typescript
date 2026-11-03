type Subway = {
  bread: string;
  cheese: string;
  baked: boolean;
  vegetable: string[];
  sauce: string[];
};

type C = Subway["vegetable"];

type A = keyof Subway;

const test: A = "bread";
const test1: A = "sauce";

const getValue = (menu: Subway, x: A) => {
  return menu[x];
};

const shrimp: Subway = {
  bread: "위트",
  baked: true,
  cheese: "모짜렐라",
  sauce: ["마라", "후추"],
  vegetable: ["당근", "오이", "가지"],
};

const res = getValue(shrimp, "vegetable");
