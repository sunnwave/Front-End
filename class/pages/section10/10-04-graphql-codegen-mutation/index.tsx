import { useMutation, gql } from "@apollo/client";
import {
  IMutation,
  IMutationCreateBoardArgs,
} from "../../../src/commons/types/generated/types";

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
  // const [counter, setCounter]=useState<number>(0)
  // const [myFunc] = useMutation<결과타입, 변수타입>(myGraphql);
  const [myFunc] = useMutation<
    Pick<IMutation, "createBoard">,
    IMutationCreateBoardArgs
  >(myGraphql);

  const onClickSubmit = async () => {
    const result = await myFunc({
      variables: {
        writer: "훈이",
        title: "안녕하세요",
        contents: "반갑습니다",
      },
    });
    console.log(result);
  };

  return <button onClick={onClickSubmit}>GRAPHQL-API 요청하기</button>;
}
