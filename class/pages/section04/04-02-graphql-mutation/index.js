import { useMutation, gql } from "@apollo/client";

const myGraphql = gql`
  mutation {
    createBoard(writer: "짱구", title: "허허이", contents: "부리부리") {
      _id
      number
      message
    }
  }
`;

export default function GraphqlMutationPage() {
  const [myFunc] = useMutation(myGraphql);

  const onClickSubmit = async () => {
    const result = await myFunc();
    console.log(result);
  };

  return <button onClick={onClickSubmit}>GRAPHQL-API 요청하기</button>;
}
