import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";
import { wrapFormAsync } from "../../../src/commons/libraries/asyncFunc";
import { useForm } from "react-hook-form";
import { gql, useMutation } from "@apollo/client";
import { useRouter } from "next/router";

const ReactQuill = dynamic(async () => await import("react-quill"), {
  ssr: false,
});

const myGraphql = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
      writer
      title
      contents
    }
  }
`;

export default function WebEditorPage(): JSX.Element {
  const { register, handleSubmit, setValue, trigger } = useForm();

  const router = useRouter();
  const [myFunc] = useMutation(myGraphql);

  //ReactQulll 만든 사람들이 만든 onChange이므로 event 안 들어옴
  const onChangeContents = (value: string): void => {
    console.log(value);

    //register로 등록하지 않고 강제로 값을 넣어주는 기능
    //react-quill은 빈 값일 때 <p><br></p>로 들어오기 때문에 빈 값일 때는 ""로 바꿔서 넣어주기
    setValue("contents", value === "<p><br></p>" ? "" : value);

    //onchane 됐으니 에러검증같은 것들을 해달라고 react-hook-form에 알려주는 기능
    void trigger("contents");
  };

  const onClickSubmit = async (data: any): Promise<void> => {
    const result = await myFunc({
      variables: {
        createBoardInput: {
          writer: data.writer,
          password: data.password,
          title: data.title,
          contents: data.contents,
        },
      },

      update(cache, { data }) {
        cache.modify({
          fields: {
            fetchBoards: (prev) => {
              return [data?.createBoard, ...prev];
            },
          },
        });
      },
    });

    const { Modal } = await import("antd"); //code splitting
    Modal.success({ content: "등록되었습니다!!" });

    const boardId = result.data?.createBoard._id;
    void router.push(`/section27/27-03-web-editor-xss-detail/${boardId}`);
  };

  return (
    <form onSubmit={wrapFormAsync(handleSubmit(onClickSubmit))}>
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
