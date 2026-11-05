// 1.typeof 연산자
// 타입알려주는 연산자
// 기본 -> 그대로나옴
// 참조 -> 80% obj
const a = new Promise((success, fail) => {});
const b = typeof a;
console.log(b);

//2. in 연산자
const chocolate = { name: "마다카스카 초코", price: 8000 };
const c = "name" in chocolate;
const d = "tasty" in chocolate;

//3. instanceof 연산자
class Student {}
const yoon = new Student();
const oh = new Student();
const a1 = yoon instanceof Student;
const a2 = oh instanceof Math;
