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

export default function StaticRoutingMovePage() {
  const router = useRouter();
  console.log(router.query.sub);

  const { data } = useQuery(FECTH_BOARD, {
    variables: { number: Number(router.query.sub) },
  });
  return (
    <div>
      <div>{router.query.sub}번 게시글로 이동이 완료되었습니다</div>
      <div>작성자:{data?.fetchBoard?.writer}</div>
      <div>제목:{data?.fetchBoard?.title}</div>
      <div>내용:{data?.fetchBoard?.contents}</div>
    </div>
  );
}
