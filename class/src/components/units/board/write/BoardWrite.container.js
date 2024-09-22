import { useMutation } from "@apollo/client";
import { useState } from "react";
import BoardWriteUI from "./BoardWrite.presenter";
import { myGraphql } from "./BoardWrite.queries"; //export는 골라서 가져오기 가능
// import BoardWriteUI from "./BoardWrite.presenter";       //export default는 한 개만 가져오기 가능
// import 새로운이름 from "./BoardWrite.presenter";            //export default는 이름 바꾸서 가져오기 가능
// import 새로운이름, { apple } from "./BoardWrite.presenter"; //export default와 export 함께 가져오기 가능
// import * as S from "./BoardWrite.styles";                //한번에 export 모두 가져오기
// S.BlueButton
// S.RedInput
export default function BoardWrite() {
  const [writer, setWriter] = useState();
  const [title, setTitle] = useState();
  const [contents, setContents] = useState();

  const [myFunc] = useMutation(myGraphql);

  const onClickSubmit = async () => {
    const result = await myFunc({
      variables: {
        writer: writer,
        title: title,
        contents: contents,
      },
    });
    console.log(result);
  };

  const onChangeWriter = (event) => {
    setWriter(event.target.value);
  };

  const onChangeTitle = (event) => {
    setTitle(event.target.value);
  };
  const onChangeContents = (event) => {
    setContents(event.target.value);
  };

  return (
    <>
      <div>***************여기는 컨테이너 컴포넌트입니다*************</div>
      <BoardWriteUI
        aaa={onClickSubmit}
        bbb={onChangeWriter}
        ccc={onChangeTitle}
        ddd={onChangeContents}
      />
      <div>***************여기는 컨테이너 컴포넌트입니다*************</div>
    </>
  );
}
