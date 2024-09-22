import { useMutation } from "@apollo/client";
import { useState } from "react";
import BoardWriteUI from "./BoardWrite.presenter";
import { myGraphql, UPDATE_BOARD } from "./BoardWrite.queries"; //export는 골라서 가져오기 가능
import { useRouter } from "next/router";
// import BoardWriteUI from "./BoardWrite.presenter";       //export default는 한 개만 가져오기 가능
// import 새로운이름 from "./BoardWrite.presenter";            //export default는 이름 바꾸서 가져오기 가능
// import 새로운이름, { apple } from "./BoardWrite.presenter"; //export default와 export 함께 가져오기 가능
// import * as S from "./BoardWrite.styles";                //한번에 export 모두 가져오기
// S.BlueButton
// S.RedInput
export default function BoardWrite(props) {
  const [writer, setWriter] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");
  const router = useRouter();

  const [myFunc] = useMutation(myGraphql);
  const [updateBoard] = useMutation(UPDATE_BOARD);

  const onClickSubmit = async () => {
    const result = await myFunc({
      variables: {
        writer: writer,
        title: title,
        contents: contents,
      },
    });
    console.log(result);
    router.push(`/section09/09-03-boards/${result.data.createBoard.number}`);
  };

  const onClickUpdate = async () => {
    //여기서 수정하기
    const result = await updateBoard({
      variables: {
        number: Number(router.query.number),
        writer: writer,
        title: title,
        contents: contents,
      },
    });

    console.log(result);
    router.push(`/section09/09-03-boards/${result.data.updateBoard.number}`);
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
        onClickSubmit={onClickSubmit}
        onClickUpdate={onClickUpdate}
        onChangeWriter={onChangeWriter}
        onChangeTitle={onChangeTitle}
        onChangeContents={onChangeContents}
        isEdit={props.isEdit}
      />
      <div>***************여기는 컨테이너 컴포넌트입니다*************</div>
    </>
  );
}
