type Stock = "하이닉스" | "삼전" | "LG";
type Checked<T extends string> = {
  [k in T]: boolean;
};

type U1 = Capitalize<"hello">;
type U2 = Uncapitalize<"HELLO">;
type U3 = Uppercase<"hello">;
type U4 = Lowercase<"HELLO">;

type TEvent = "click" | "mouseover" | "submit";
type Handler = `on${Capitalize<TEvent>}`;

type TTest = {
  main: string;
  sub: string;
};
type Prefixed<T> = {
  [K in keyof T as `my${Capitalize<K & string>}`]: T[K];
};
const a11: Prefixed<TTest> = {
  myMain: "",
  mySub: "",
};
