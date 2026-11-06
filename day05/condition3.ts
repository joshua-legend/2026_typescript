//infer

type StationCity<S> = S extends `${infer C}역` ? C : never;
type D111 = StationCity<"하네다역">;
type D222 = StationCity<"하네다공항">;

type Route<S> = S extends `${infer From} -> ${infer To}` ? [From, To] : never;
type E111 = Route<"유럽 -> 아프리카">;
type E222 = Route<"인천 -> 도쿄">;

type CityOf<T> = T extends { city: infer C } ? C : never;
type F111 = CityOf<{ city: "newyork"; time: 14 }>;

//infer + extends
type Nights<S> = S extends `${infer N extends number}박` ? N : "오찬시기";
type G111 = Nights<"오사카박">;

// 3박 4일 -> {nights:3, days:4} 아니면 "당일치기"
type Schedule<S> =
  S extends `${infer N extends number}박  ${infer M extends number}일`
    ? { nights: N; days: M }
    : "당일치기";

type Destination<S> = S extends `${infer _} -> ${infer Rest}`
  ? Destination<Rest>
  : S;

type Z = Destination<"도쿄 -> 나고야 -> 오사카 -> 시모노새끼 -> 후쿠오카">;
