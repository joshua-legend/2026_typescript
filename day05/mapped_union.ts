type TMenu = "빅맥" | "상하이" | "1955";

type TStock = {
  [key in TMenu]: number;
};

const ourStock: TStock = {
  빅맥: 10,
  상하이: 15,
  "1955": 10,
};

type TStock1 = {
  [K in TMenu]: K;
};

type TSet = {
  main: string;
  sub: string;
  price: number;
};

//type TChecked 모두 boolean으로 바꾸기
type TChecked = {
  [K in keyof TSet]: boolean;
};

type TCopy = {
  [K in keyof TSet]: TSet[K];
};

type TCopyList = {
  [K in keyof TSet]: TSet[K][];
};

type TCopyOptional = {
  [K in keyof TSet]?: TSet[K];
};
