// 조건부 타입
type TCity = "도쿄" | "오사카" | "교토" | "삿포로" | "후쿠오카" | "나고야";

//1. T extends U ? X : Y
type IsCap<C> = C extends "도쿄" ? "수도" : "지방 도시";
type A = IsCap<"도쿄">;
type B = IsCap<"후쿠오카">;
type C = IsCap<Extract<TCity, "도쿄">>;

// 간사이 or 간사이 아님
type IsKansai<K> =
  K extends Extract<TCity, "오사카" | "교토"> ? "간사이" : "간사이 아님";
type D = IsKansai<"후쿠오카">;
