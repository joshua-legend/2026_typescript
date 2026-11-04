// generic.ts 일반화

type Box<T> = { value: T };
const aBox: Box<string> = { value: "false" };

type FruitsBox<T> = { value: T };
type Fruit = "사과" | "오렌지" | "포도" | "키위";
const bBox: FruitsBox<Fruit> = { value: "오렌지" };

type HexBox<T> = { value: T };
type Hex = `#${number}`;
const cBox: HexBox<Hex> = { value: "#123123" };
