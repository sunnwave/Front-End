import { useState } from "react";

export default function statePractice3() {
  const [certNum, setCerNum] = useState("000000");
  const sendNum = function () {
    const getRandom = String(Math.floor(Math.random() * 1000000)).padStart(
      6,
      "0"
    );
    // document.getElementById("certNum").innerText = getRandom;
    setCerNum(getRandom);
  };

  return (
    <>
      {/* <div id="certNum">000000</div> */}
      <div>{certNum}</div>
      <button onClick={sendNum}>인증번호전송</button>
    </>
  );
}
