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

  const onClickMove = () => {
    router.push(
      `/section10/10-02-typescript-boards/${router.query.number}/edit`,
    );
  };
  return (
    <div>
      <div>{router.query.number}번 게시글로 이동이 완료되었습니다</div>
      <div>작성자:{data?.fetchBoard?.writer}</div>
      <div>제목:{data?.fetchBoard?.title}</div>
      <div>내용:{data?.fetchBoard?.contents}</div>
      <button onClick={onClickMove}>수정하러 가기</button>
    </div>
  );
}
