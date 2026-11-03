// alias [별명]
type Coffee = {
  name: "아메리카노" | "라떼" | "아샷추" | "아이스커피";
  price: number;
  hasShot?: boolean;
};
const dotoru: Coffee = { name: "라떼", price: 2500, hasShot: false };

// 맥도날드 세트 알리아스 만들기
// 메인, 서브, 음료
type Main = "빅맥" | "빅아치" | "1955" | "쿼터파운드치즈" | "상하이";
type MainMorning = "베이컨에그" | "에그" | "소세지" | "팬케이크";

type Sub = "후렌치후라이" | "치즈스틱" | "치킨너겟" | "맥윙" | "코우슬로";
type SubMorning = "해시브라운" | "스낵랩";

type Beverage = "콜라" | "오렌지주스" | "밀크쉐이크" | "아이스티";
type BeverageMorning = "아메리카노" | "아이스커피";

type MacdonalNoraml = { main: Main } & { sub: Sub } & { beverage: Beverage };
type MacdonalMorning = { main: MainMorning } & { sub: SubMorning } & {
  beverage: BeverageMorning;
};

type Macdonal = MacdonalNoraml | MacdonalMorning;
