//배열을 컴포넌트 위에 만든 이유 : 컴포넌트가 리렌더링돼도 다시 만들어지지 않아 효율적이다

const FRUITS = [
  { number: 1, title: "레드향" },
  { number: 2, title: "샤인머스캣" },
  { number: 3, title: "산청딸기" },
  { number: 4, title: "한라봉" },
  { number: 5, title: "사과" },
  { number: 6, title: "애플망고" },
  { number: 7, title: "딸기" },
  { number: 8, title: "천헤향" },
  { number: 9, title: "과인선물세트" },
  { number: 10, title: "귤" },
];

export default function MapFruitsPage() {
  //1. 가장 기본 예제
  const aaa = [
    <div key={1}>1. 레드향</div>,
    <div key={2}>2. 샤인머스캣</div>,
    <div key={3}>3. 산청딸기</div>,
  ];

  //2. 실무 백엔드 데이터 예제
  const bbb = FRUITS.map((el) => (
    <div key={el.number}>
      {el.number} {el.title}
    </div>
  ));

  return (
    <>
      <div>{aaa}</div>
      <div>=======================</div>
      <div>{bbb}</div>
      <div>=======================</div>
      <div>
        {/* 실무 효율적인 렌더링 예제 */}
        {FRUITS.map((el) => (
          <div key={el.number}>
            {el.number}. {el.title}
          </div>
        ))}
      </div>
    </>
  );
}
