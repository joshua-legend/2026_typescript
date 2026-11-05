//narrowing
//1.typeof
const order = (menu: string | number) => {
  if (typeof menu == "string") {
    // menu는 string
  } else {
    // menu는 number
  }
};

//2.truthiness
const applyCoupon = (code?: string) => {
  if (code) {
    return `쿠폰 ${code.toUpperCase()}`;
  }
  return "쿠폰 없음";
};

const checkCart = (items: string[] | null) => {
  if (items && items.length) {
    return `${items.length}개 담김`;
  }
  return "장바구니 없음";
};

//3. 동등비교
type TSize = "R" | "L" | "F";
const pizzaPrice = (size: TSize) => {
  if (size == "R") return 10000;
  else if (size == "L") return 15000;
  else if (size == "F") return 2000;
  else return "오류";
};

//4. in 연산자
type TBurger = { name: string; patty: number };
type TDrink = { name: string; ice: boolean };

const describe = (item: TBurger | TDrink) => {
  if ("patty" in item) {
    return `${item.name} (패티 ${item.patty}장)`;
  }
  return `${item.name} (얼음 ${item.ice ? "있음" : "없음"})`;
};

const formatOrderTime = (time: Date | string) => {
  if (time instanceof Date) {
    return time.toLocaleDateString();
  }
  return time.toUpperCase();
};

// early return
// return, throw 문법으로 필터링 되면 아래는 자동으로
// 타입추론되는 문법
type TOrder = { menu: string; qty: number } | null;
const checkout = (order: TOrder) => {
  if (!order) return "주문없음";
  // order 오브젝트 타입 확정
  return `${order.menu}`;
};

const pay = (amount: number | undefined) => {
  if (amount == undefined) {
    throw new Error("돈이 없음");
  }
  return amount;
};
