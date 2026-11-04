type TSubject = "국어" | "수학" | "영어";
type TCoffee = { name: string; price: number; hasShot?: boolean };
type A = keyof TCoffee;
