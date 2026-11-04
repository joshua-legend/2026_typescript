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
