// annotation
const a: number = 1;
const b: string = "1";
const c: boolean = true;
const d: { name: string; level: number } = { name: "티모", level: 10 };
const e: number[] = [1, 2, 3, 4, 5];
const f: string[] = ["오재희", "정지영", "김보민", "김정엽", "유형근"];
const g: { name: string; price: number }[] = [
  { name: "딸기", price: 1000 },
  { name: "메론", price: 1500 },
];

const add = (x: number, y: number): number => {
  return x + y;
};
// 두 문자를 넣으면 문자를 돌려주는 함수 정의
const test = (a: string, b: string): string => {
  return a + b;
};
const test1 = (a: number): boolean => {
  return !!a;
};
