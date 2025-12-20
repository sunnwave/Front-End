// import ReactQuill from "react-quill";
import dynamic from "next/dynamic";
// import { useEffect } from "react";
import "react-quill/dist/quill.snow.css";
import { wrapFormAsync } from "../../../src/commons/libraries/asyncFunc";
// import { Modal } from "antd";

const ReactQuill = dynamic(async () => await import("react-quill"), {
  ssr: false,
});

export default function WebEditorPage(): JSX.Element {
  //ReactQulll 만든 사람들이 만든 onChange이므로 event 안 들어옴
  const onChangeContents = (value: string): void => {
    console.log(value);
  };

  // useEffect(() => {
  //   async function importAntd(): Promise<void> {
  //     const { Modal } = await import("antd"); //code splitting
  //     Modal.success({ content: "등록되었습니다!!" });
  //   }

  //   void importAntd();
  // });

  const onClickSubmit = async (): Promise<void> => {
    const { Modal } = await import("antd"); //code splitting
    Modal.success({ content: "등록되었습니다!!" });
  };

  return (
    <form onSubmit={wrapFormAsync(onClickSubmit)}>
      작성자:
      <input type="text" /> <br />
      비밀번호:
      <input type="password" /> <br />
      제목:
      <input type="text" /> <br />
      내용:
      <ReactQuill onChange={onChangeContents} /> <br />
      <button>등록하기</button>
    </form>
  );
}
