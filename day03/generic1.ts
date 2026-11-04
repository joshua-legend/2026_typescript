// Subway
// 빵타입: 허니오트 플랫브래드 위트 오레가노
// 치즈타입: 아메리칸 슈레드 모짜렐라
// 야채타입: 토마토 양상추 양파 피망 피클 올리브
// 소스타입: 렌치 사우스웨스트 치폴레 오일 스위트칠리 머스타트
type Bread = "허니오트" | "플랫브래드" | "위트" | "오레가노";
type SeasonBread = "소금빵" | "단팥빵";
type Cheese = "아메리칸" | "슈레드" | "모짜렐라";
type Vegetable = "토마토" | "양상추" | "양파" | "피망" | "피클" | "올리브";
type Sauce =
  | "렌치"
  | "사우스웨스트"
  | "치폴레"
  | "오일"
  | "스위트칠리"
  | "머스타트";

type Subway<
  T extends Bread | SeasonBread,
  U extends Cheese,
  V extends Vegetable[],
  X extends Sauce[],
> = {
  bread: T;
  cheese: U;
  vegetable: V;
  sauce: X;
};

const myMenu: Subway<Bread, Cheese, Vegetable[], Sauce[]> = {
  bread: "위트",
  cheese: "모짜렐라",
  vegetable: ["양상추", "양파", "토마토"],
  sauce: ["렌치", "렌치", "오일"],
};

const makeSandwich = <
  B extends Bread,
  C extends Cheese,
  V extends Vegetable,
  S extends Sauce,
>(
  bread: B,
  cheese: C,
  vegetables: V[],
  sauce: S[],
) => {
  return { bread, cheese, vegetables, sauce };
};

// 맥도날드
// 점심 메뉴
type TBurger = "빅맥" | "상하이" | "1955";
type TSide = "감자튀김" | "코울슬로";
type TDrink = "콜라" | "사이다" | "제로콜라";

// 맥모닝 메뉴
type TMorning = "에그맥머핀" | "소시지에그맥머핀" | "베이컨토마토머핀";
type TMorningSide = "해시브라운";
type TMorningDrink = "아메리카노" | "카페라떼" | "오렌지주스";

// 1. 점심메뉴 돌려주는 오브젝트 함수 정의하기
const macLunch = <A extends TBurger, B extends TSide, C extends TDrink>(
  main: A,
  sub: B,
  drink: C,
) => {
  return { main, sub, drink };
};

// 2. 아침메뉴 돌려주는 오브젝트 함수 정의하기
const macMorning = <
  A extends TMorning,
  B extends TMorningSide,
  C extends TMorningDrink,
>(
  main: A,
  sub: B,
  drink: C,
) => {
  return { main, sub, drink };
};
// 3. 모든메뉴 돌려주는 오브젝트 함수 정의하기
const macdonald = <
  A extends TMorning | TBurger,
  B extends TMorningSide | TSide,
  C extends TMorningDrink | TDrink,
>(
  main: A,
  sub: B,
  drink: C,
) => {
  return { main, sub, drink };
};
