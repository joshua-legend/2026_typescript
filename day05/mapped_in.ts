// mapped.ts
// 1. in
type LOL = {
  top: string;
  jg: string;
  mid: string;
  ad: string;
  sp: string;
};
const dk: LOL = {
  top: "siwoo",
  jg: "lucid",
  mid: "showmaker",
  ad: "smash",
  sp: "career",
};
const a = "jg" in dk;

type A = { [key: string]: string };
const test: A = { nation: "korean" };
type B = { [key in "top" | "jg" | "mid" | "ad" | "sp"]: string };
type B1 = { [key in keyof LOL]: string };

// type Macdonal 만들고,
// key는 main, sub, beverage 만 허용
// value는 obj[]
type Macdonal = { [key in "main" | "sub" | "beverage"]: {}[] };
const myMenu: Partial<Macdonal> = {};
