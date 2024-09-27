import { useState } from "react";

export default function statePractice() {
  const [text, setText] = useState("안녕하세요");

  const toggleBg = function () {
    // document.getElementById("btn").innerText = "반갑습니다";
    setText("반갑습니다");
  };
  return (
    <>
      {/* <button id="btn" onClick={toggleBg}>
        안녕하세요
      </button> */}

      <button onClick={toggleBg}>{text}</button>
    </>
  );
}
