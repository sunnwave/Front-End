import BoardWrite from "../../../../../src/components/units/board/09-write2/BoardWrite.container";
import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";

const FECTH_BOARD = gql`
  query fetchBoard($number: Int) {
    fetchBoard(number: $number) {
      number
      writer
      title
      contents
    }
  }
`;

export default function GraphqlMutationPage() {
  const router = useRouter();
  const { data } = useQuery(FECTH_BOARD, {
    variables: { number: Number(router.query.number) },
  });

  return (
    <>
      <BoardWrite isEdit={true} data={data} />
    </>
  );
}
