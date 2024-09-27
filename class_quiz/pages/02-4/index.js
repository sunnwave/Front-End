import { useState } from "react";

export default function statePractice4() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");

  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const onChangeEmail = function (event) {
    const inputEmail = event.target.value;
    setEmail(inputEmail);
  };

  const onChangePassword = function (event) {
    setPassword(event.target.value);
  };

  const onChangePasswordCheck = function (event) {
    const inputPasswordCheck = event.target.value;
    setPasswordCheck(inputPasswordCheck);
  };

  const register = function () {
    if (!email) {
      setEmailError("이메일을 입력해주세요");
    }
    if (!password || !passwordCheck) {
      setPasswordError("비밀번호를 입력해주세요");
    }
    if (email && password && passwordCheck) {
      if (!email.includes("@")) {
        setEmailError("이메일 형식이 올바르지 않습니다");
      } else {
        setEmailError("");
      }

      if (password !== passwordCheck) {
        setPasswordError("입력하신 비밀번호가 일치하지 않습니다");
      } else {
        setPasswordError("");
      }

      if (email.includes("@") && password === passwordCheck) {
        alert("가입 완료");
      }
    }
  };

  return (
    <>
      이메일 : <input onChange={onChangeEmail} />
      <div style={{ color: "red" }}>{emailError}</div>
      비밀번호: <input onChange={onChangePassword} />
      <div></div>
      비밀번호 확인: <input onChange={onChangePasswordCheck} />
      <div style={{ color: "red" }}>{passwordError}</div>
      <button onClick={register}>가입하기</button>
    </>
  );
}
