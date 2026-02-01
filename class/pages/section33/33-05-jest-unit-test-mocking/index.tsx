import { gql, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react";

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

export default function JestMockingTestPage(): JSX.Element {
  const router = useRouter();
  const [writer, setWriter] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");

  const [myFunc] = useMutation(myGraphql);

  const onClickSubmit = async (): Promise<void> => {
    const result = await myFunc({
      variables: {
        createBoardInput: {
          writer,
          title,
          contents,
          password: "1234",
        },
      },
    });
    console.log("🔥 아폴로 응답:", result);
    const boardId = result.data.createBoard._id;
    void router.push(`/boards/${boardId}`);
  };
  const onChangeWriter = (event: ChangeEvent<HTMLInputElement>): void => {
    setWriter(event.currentTarget.value);
  };

  const onChangeTitle = (event: ChangeEvent<HTMLInputElement>): void => {
    setTitle(event.currentTarget.value);
  };
  const onChangeContents = (event: ChangeEvent<HTMLInputElement>): void => {
    setContents(event.currentTarget.value);
  };

  return (
    <div>
      작성자:{" "}
      <input role="input-writer" type="text" onChange={onChangeWriter} />
      제목: <input role="input-title" type="text" onChange={onChangeTitle} />
      내용:{" "}
      <input role="input-contents" type="text" onChange={onChangeContents} />
      <button role="submit-button" onClick={onClickSubmit}>
        GRAPHQL-API 요청하기
      </button>
    </div>
  );
}
