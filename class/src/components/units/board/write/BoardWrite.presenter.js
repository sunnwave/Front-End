import { RedInput, BlueButton } from "./BoardWrite.styles.js";
export default function BoardWriteUI(props) {
  return (
    <>
      <div>%%%%%%%%%%%%여기는 프레젠터컴포넌트입니다%%%%%%%%%%%%%%%%%%</div>
      <div>
        작성자: <RedInput type="text" onChange={props.bbb} />
        제목: <RedInput type="text" onChange={props.ccc} />
        내용: <input type="text" onChange={props.ddd} />
        <BlueButton onClick={props.aaa}>GRAPHQL-API 요청하기</BlueButton>
      </div>
      <div>%%%%%%%%%%%%여기는 프레젠터컴포넌트입니다%%%%%%%%%%%%%%%%%%</div>
    </>
  );
}

export const apple = 3;
