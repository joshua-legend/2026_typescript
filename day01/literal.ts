// literal.ts
const direction: "up" | "down" | "left" | "right" = "left";
// const student: "윤정은" | "노노카짱" | "김보민" | "오태식" | "홍다현" = "임경태";
const attendance: "출석" | "결석" | "지각" | "조퇴" = "결석";

// 오브젝트 배열
// 커피 이름: 아아,라떼,초코민트, 모카, price: 숫자, hasShot: 불리언
const mega: {
  name: "아아" | "라떼" | "초코민트" | "모카";
  price: number;
  hasShot?: boolean; // ? optional
}[] = [
  { name: "라떼", price: 2500, hasShot: true },
  { name: "모카", price: 3500 },
];
