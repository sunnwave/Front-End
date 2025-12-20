import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";
import { wrapFormAsync } from "../../../src/commons/libraries/asyncFunc";
import { useForm } from "react-hook-form";

const ReactQuill = dynamic(async () => await import("react-quill"), {
  ssr: false,
});

export default function WebEditorPage(): JSX.Element {
  const { register, setValue, trigger } = useForm();

  //ReactQulll 만든 사람들이 만든 onChange이므로 event 안 들어옴
  const onChangeContents = (value: string): void => {
    console.log(value);

    //register로 등록하지 않고 강제로 값을 넣어주는 기능
    //react-quill은 빈 값일 때 <p><br></p>로 들어오기 때문에 빈 값일 때는 ""로 바꿔서 넣어주기
    setValue("contents", value === "<p><br></p>" ? "" : value);

    //onchane 됐으니 에러검증같은 것들을 해달라고 react-hook-form에 알려주는 기능
    void trigger("contents");
  };

  const onClickSubmit = async (): Promise<void> => {
    const { Modal } = await import("antd"); //code splitting
    Modal.success({ content: "등록되었습니다!!" });
  };

  return (
    <form onSubmit={wrapFormAsync(onClickSubmit)}>
      작성자:
      <input type="text" {...register("writer")} /> <br />
      비밀번호:
      <input type="password" {...register("password")} /> <br />
      제목:
      <input type="text" {...register("title")} /> <br />
      내용:
      <ReactQuill onChange={onChangeContents} /> <br />
      <button>등록하기</button>
    </form>
  );
}
