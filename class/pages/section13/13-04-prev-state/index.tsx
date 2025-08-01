import { useState } from "react";

export default function CounterLEtDocumentPage() {
  //let count=0 //let은 리액트 전용 html에서 변경을 감지하지 못하므로 state를 사용해야 한다
  const [count, setCount] = useState(0);

  function onClickCountUp() {
    // setCount(count + 1);
    // setCount(count + 1);
    // setCount(count + 1);
    // setCount(count + 1);
    // setCount(count + 1);
    // 최종 결과 :1

    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1); // prev는 이전의 count값을 의미한다
    // 최종 결과 : 5
  }

  // function onClickCountDown() {
  //   setCount(count - 1);
  // }

  return (
    <div>
      <div id="qqq">{count}</div>
      <button onClick={onClickCountUp}>카운트 올리기</button>
      {/* <button onClick={onClickCountDown}>카운트 내리기</button> */}
    </div>
  );
}
