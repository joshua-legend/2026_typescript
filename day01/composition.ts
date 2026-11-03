// 변수, 타입 + 어노테이션

// Union[유니온]
const a1: string | number = 1;
const a2: string | null = "1";
const a3: number | number[] = [1];
const a4: { name: string; price: string | number } = {
  name: "초코초코",
  price: +"1000",
};

// Intersection &
const b1: { name: string } & { age: number } = {
  name: "ㅇㅋ?",
  age: 20,
};
