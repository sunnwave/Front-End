//개발자일 때 => 디스코드, 카카오톡, 슬랙 등...

import axios from "axios";

export default function OpengraphDeveloperPage(): JSX.Element {
  const onClickEnter = async () => {
    //1. 채팅데이터에 주소가 있는지 찾기(ex:http~~)
    //2. 해당 주소로 스크래핑하기
    const result = await axios.get(
      "http://localhost:3000/section32/32-01-opengraph-provider",
    ); //CORS 문제
    console.log(result.data);
    //3. 메타태그에서 오픈그래프(og:) 찾기
    console.log(
      result.data.split("<meta").filter((el: string) => el.includes("og")),
    );
  };
  return (
    <>
      <button onClick={onClickEnter}>채팅 입력 후 엔터치기</button>
    </>
  );
}
