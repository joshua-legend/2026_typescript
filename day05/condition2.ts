type RegionOf<C> = C extends "도쿄" | "요코하마"
  ? "간토"
  : C extends "오사카" | "교토"
    ? "간사이"
    : C extends "삿포로"
      ? "홋카이도"
      : C extends "후쿠오카"
        ? "규슈"
        : "개잡지방도시";

type A111 = RegionOf<"서울">;

type KansaiOnly<C> = C extends "오사카" | "교토" ? C : never;
