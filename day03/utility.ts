type Student = {
  id: number;
  name: string;
  major: string;
  age: number;
};

type Student1 = {
  id?: number;
  name?: string;
  major?: string;
  age?: number;
};

type A123 = Partial<Student>;
type B123 = Required<Student1>;
type C123 = Pick<Student, "name" | "major">
type D123 = Omit<Student, "name" | "major">
type E123 = Record<"name" | "age" | "major", number>;
//student를 모두 string[]로 바꾸고 싶음
type F123 = Record<keyof Student, string[]>;