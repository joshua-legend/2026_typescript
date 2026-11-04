"템플릿 리터럴 타입";
type TFish = "계란말이" | "도미" | "광어" | "연어";
type TSushi = "계란말이초밥" | "연어초밥" | "새우초밥" | "장어초밥";
type TSushi1 = `${TFish}초밥`;
const a11: TSushi1 = "도미초밥";
type TPixel = `${number}px`;

type TColor =
  | 0
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | "a"
  | "b"
  | "c"
  | "d"
  | "e"
  | "f";
type THex = `#${TColor}${TColor}${TColor}${TColor}`;
