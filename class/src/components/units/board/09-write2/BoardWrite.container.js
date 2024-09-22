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
    router.push(`/section09/09-04-boards/${result.data.createBoard.number}`);
  };

  const onClickUpdate = async () => {
    const myvariables = {
      number: Number(router.query.number),
    };

    if (writer) myvariables.writer = writer;
    if (title) myvariables.title = title;
    if (contents) myvariables.contents = contents;

    const result = await updateBoard({
      variables: myvariables,
    });

    console.log(result);
    router.push(`/section09/09-04-boards/${result.data.updateBoard.number}`);
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
      <BoardWriteUI
        onClickSubmit={onClickSubmit}
        onClickUpdate={onClickUpdate}
        onChangeWriter={onChangeWriter}
        onChangeTitle={onChangeTitle}
        onChangeContents={onChangeContents}
        isEdit={props.isEdit}
        data={props.data} //undefined(등록)이거나 data(수정)이거나
      />
    </>
  );
}
