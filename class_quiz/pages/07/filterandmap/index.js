const classmates = [
  { name: "철수", age: 10, school: "토끼초등학교" },
  { name: "영희", age: 13, school: "다람쥐초등학교" },
  { name: "훈이", age: 11, school: "토끼초등학교" },
];

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

export default function FilterAndMapPage() {
  return (
    <>
      <div>
        <span style={{ color: "blue" }}>
          토끼초등학교만 골라낸 후, candy:10개씩 추가해 주세요
        </span>
        {classmates
          .filter((el) => el.school === "토끼초등학교")
          .map((el) => (
            <div key={el.name}>
              이름:{el.name} 나이:{el.age} 학교:{el.school} 사탕{" "}
              {(el.candy = 10)}개
            </div>
          ))}
      </div>
      <div>
        <span style={{ color: "blue" }}>
          다람쥐초등학교만 골라낸 후 name 뒤에 "어린이"를 붙여주세요
        </span>
        {classmates
          .filter((el) => el.school == "다람쥐초등학교")
          .map((el) => (
            <div key={el.name}>
              이름:{(el.name = el.name + "어린이")} 나이:{el.age} 학교:
              {el.school}
            </div>
          ))}
      </div>
      <div>
        <span style={{ color: "blue" }}>filter, map 결과</span>
        {classmates.map((el) => (
          <div key={el.name}>
            이름:{el.name} 나이:{el.age} 학교:{el.school} 사탕{el.candy}개
          </div>
        ))}
      </div>
      <div>
        <span style={{ color: "blue" }}>짝수만 나오도록 만들어주세요</span>
        {FRUITS.filter((fr) => fr.number % 2 === 0).map((fr) => (
          <div key={fr.number}>
            번호:{fr.number} 이름: {fr.title}
          </div>
        ))}
      </div>
    </>
  );
}
