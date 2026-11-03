const user = {
  name: "윤정은",
  age: 30,
  gender: "female",
};

type A = typeof user;

const user1 = {
  name: "오재히",
  age: 27,
  gender: "female",
} as const;

type B = typeof user1;
const user2: B = { name: "오재히", age: 27, gender: "female" };

const getAge = (age: number) => age + 1;
type C = typeof getAge;
