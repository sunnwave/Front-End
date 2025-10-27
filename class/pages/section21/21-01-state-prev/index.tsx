import { useState } from "react";

export default function CounterLEtDocumentPage(): JSX.Element {
  const [count, setCount] = useState(0);

  function onClickCountUp(): void {
    //1. 화살표 함수
    setCount((prev) => prev + 1);

    //2. 함수 선언식
    setCount(function (prev) {
      //로직 추가 가능 ex: if문, for문

      return prev + 1;
    });

    //3. 매개변수 변경
    setCount((asdf) => asdf + 1);
  }

  return (
    <div>
      <div id="qqq">{count}</div>
      <button onClick={onClickCountUp}>카운트 올리기</button>
    </div>
  );
}
