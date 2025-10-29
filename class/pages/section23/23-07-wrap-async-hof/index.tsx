import { useMutation, gql } from "@apollo/client";
import { wrapAsync } from "../../../src/commons/libraries/asyncFunc";

const myGraphql = gql`
  mutation {
    createBoard(writer: "짱구", title: "허허이", contents: "부리부리") {
      _id
      number
      message
    }
  }
`;

export default function GraphqlMutationPage(): JSX.Element {
  const [myFunc] = useMutation(myGraphql);

  const onClickSubmit = async (): Promise<void> => {
    const result = await myFunc();
    console.log(result);
  };

  return (
    <button onClick={wrapAsync(onClickSubmit)}>GRAPHQL-API 요청하기</button>
  );
}
