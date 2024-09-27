import { useState } from "react";

export default function statePractice2() {
  // let count = 0;
  const [count, setCount] = useState(0);
  const upCount = function () {
    // count = Number(document.getElementById("count").innerText);
    // document.getElementById("count").innerText = count + 1;
    setCount(count + 1);
  };

  return (
    <>
      {/* <div id="count">0</div> */}
      <div>{count}</div>
      <button onClick={upCount}>카운트 증가</button>
    </>
  );
}
