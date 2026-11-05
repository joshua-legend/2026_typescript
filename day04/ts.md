타입스크립트
│
├─ 0. 시작하기
│ ├─ TS란? (JS와 차이)
│ ├─ 실행 방법
│ │ ├─ tsc로 변환 후 실행
│ │ ├─ node로 바로 실행
│ │ └─ npx tsx
│ └─ tsconfig.json 기초
│
├─ 1. 기본 타입
│ ├─ string / number / boolean
│ ├─ 배열 / 튜플
│ ├─ any vs unknown
│ ├─ never
│ ├─ 타입 추론
│ ├─ 함수 타입 (매개변수, 반환)
│ └─ 타입 단언 as (⚠ 우기기)
│
├─ 2. 타입 만들기
│ ├─ type 별칭
│ ├─ interface
│ ├─ 선택 속성(?) / readonly
│ └─ type vs interface
│
├─ 3. 타입 조합하기
│ ├─ 리터럴 타입
│ ├─ 유니언 ( | )
│ ├─ 인터섹션 ( & )
│ └─ as const
│
├─ 4. 타입 좁히기 (Narrowing)
│ ├─ 왜 필요한가?
│ │
│ ├─ [JS 문법 그대로]
│ │ ├─ typeof 가드
│ │ ├─ truthiness
│ │ ├─ 동등 비교 (===, != null)
│ │ ├─ in 연산자
│ │ ├─ instanceof
│ │ ├─ 할당 (let 문법)
│ │ └─ 제어 흐름 분석 (early return)
│
├─ ★ 타입으로 타입 만들기
│ │ (Creating Types from Types)
│ │
│ ├─ 5. 타입 연산자 & 인덱스 접근
│ │ ├─ typeof (타입 위치)
│ │ ├─ keyof
│ │ ├─ keyof typeof
│ │ ├─ 인덱스 접근 T[K]
│ │ ├─ T[keyof T]
│ │ └─ T[number]
│ │
│ ├─ 6. 템플릿 리터럴 타입
│ │ ├─ `${number}px`
│ │ ├─ 유니언 조합
│ │ ├─ Uppercase / Capitalize
│ │ └─ ⚠ 조합 개수 한계 (10만)
│ │
│ ├─ 7. 제네릭 (Generics)
│ │ ├─ 제네릭 함수 / 화살표
│ │ ├─ 제네릭 타입 별칭
│ │ ├─ 여러 매개변수 <K, V>
│ │ ├─ 제약 (extends)
│ │ └─ 기본값 <T = string>
│ │
│ ├─ 8. 유틸리티 타입
│ │ ├─ Partial / Required / Readonly
│ │ ├─ Pick / Omit
│ │ ├─ Record
│ │ ├─ Exclude / Extract
│ │ ├─ NonNullable
│ │ └─ ReturnType / Parameters / Awaited
│ │
│ ├─ 9. 매핑된 타입 (Mapped Types)
│ │ ├─ in: 값 위치 vs 타입 위치
│ │ ├─ [K in 유니언]
│ │ ├─ [K in keyof T]
│ │ ├─ 수정자 (?, readonly, -)
│ │ ├─ as로 키 이름 바꾸기
│ │ └─ 유틸리티 직접 구현
│ │
│ └─ 10. 조건부 타입 & infer
│ ├─ T extends U ? X : Y
│ ├─ extends의 두 가지 뜻
│ ├─ 중첩 (else if)
│ ├─ 분배 법칙
│ ├─ infer (빈칸 채우기)
│ ├─ infer + extends
│ └─ 재귀 타입
│
├─ 11. React + TS
│ ├─ Props 타입
│ ├─ CSSProperties
│ ├─ ComponentProps<"button">
│ └─ useState<T>
│
└─ 12. 종합 실습
├─ 🍔 서브웨이 주문 (제네릭)
├─ 🍳 맥도날드 + 맥모닝 세트
│ (조건부 타입, 판별 유니언)
├─ 🎨 버튼 컴포넌트 리팩터링
│ (as const, keyof typeof)
└─ 🔷 헥사코드 검증 타입
(템플릿 리터럴 + infer)
