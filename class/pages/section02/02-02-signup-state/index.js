import { useState } from "react";

export default function SignupStatePage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");

  function onChangeEmail(event) {
    // console.log(event); //나의 행동
    // console.log(event.target); //작동된 태그
    // console.log(event.target.value); //작동된 태그에 입력된 값

    setEmail(event.target.value);
  }

  function onChangePassword(event) {
    setPassword(event.target.value);
  }

  function onClickSignup() {
    console.log(email);
    console.log(password);

    //1. 검증하기
    if (!email.includes("@")) {
      setEmailError("이메일의 형식이 올바르지 않습니다");
      // document.getElementById("myerror").innerText = "이메일의 형식이 올바르지 않습니다";  //=>옛날 방식
    } else {
      //2. 백엔드 API로 데이터 보내기

      //3. 성공 알람 보여주기
      alert("회원 가입을 축하합니다.");
    }
  }

  return (
    <div>
      이메일: <input type="text" onChange={onChangeEmail} />
      {/* <div id="myerror"></div> 옛날 방식*/}
      <div>{emailError}</div>
      비밀번호: <input type="password" onChange={onChangePassword} />
      <button onClick={onClickSignup}>회원가입</button>
    </div>
  );
}
