import axios from "axios";

export default function RestGetPaege() {
  function onClickAsync() {
    const result = axios.get("https://koreanjson.com/posts/1");
    console.log(result); //promise
  }

  // async function onClickSync() {
  //   const result = await axios.get("https://koreanjson.com/posts/1");
  //   console.log(result.data.title); //제대로된 결과
  // }
  //=>함수 중복선언 문제

  const onClickSync = async () => {
    const result = await axios.get("https://koreanjson.com/posts/1");
    console.log(result.data.title); //제대로된 결과
  };

  return (
    <div>
      <button onClick={onClickAsync}>REST-API(비동기)</button>
      <button onClick={onClickSync}>REST-API(동기)</button>
    </div>
  );
}
