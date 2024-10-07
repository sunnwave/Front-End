import axios from "axios";

export default function RestQuiz() {
  const onClickButton = async () => {
    const result = await axios.get("https://koreanjson.com/users");
    console.log(result);
  };

  return (
    <>
      <button onClick={onClickButton}>REST-API 요청하기</button>
    </>
  );
}
