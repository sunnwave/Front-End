import { useMutation, gql } from "@apollo/client";
import { useRouter } from "next/router";

const myGraphql = gql`
  mutation createBoard($writer: String, $title: String, $contents: String) {
    createBoard(writer: $writer, title: $title, contents: $contents) {
      _id
      number
      message
    }
  }
`;

export default function GraphqlMutationPage() {
  const router = useRouter();
  const [myFunc] = useMutation(myGraphql);

  const onClickSubmit = async () => {
    try {
      //try에 작성된 내용을 시도하다가 실패하면 다음에 있는 모든 줄들을 모두 무시하고, catch에 있는 내용을 실행
      const result = await myFunc({
        variables: {
          writer: "훈이",
          title: "안녕하세요",
          contents: "반갑습니다",
        },
      });
      console.log(result);
      console.log(result.data.createBoard.number);
      router.push(
        `/section05/05-05-dynamic-routing-board-mutation-moved/${result.data.createBoard.number}`,
      );
    } catch (error) {
      alert(error.message);
    }
  };

  return <button onClick={onClickSubmit}>GRAPHQL-API 요청하기</button>;
}
