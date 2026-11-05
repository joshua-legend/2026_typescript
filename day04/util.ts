type TStudent = { name: string; age: number; subjects: string[] };
type A = Pick<TStudent, "name">;
type B = Omit<TStudent, "name">;

type Fruit = "Apple" | "Orange" | "Grape" | "Kiwi";

type C = Exclude<Fruit, "Apple">;
type D = Extract<Fruit, "Apple" | "Orange">;
