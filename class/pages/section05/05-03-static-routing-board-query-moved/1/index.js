import { gql, useQuery } from "@apollo/client";

const FECTH_BOARD = gql`
  query {
    fetchBoard(number: 397) {
      number
      writer
      title
      contents
    }
  }
`;

export default function StaticRoutingMovePage() {
  const { data } = useQuery(FECTH_BOARD);

  console.log(data);

  return (
    <div>
      <div>1번 게시글로 이동이 완료되었습니다</div>
      <div>작성자:{data?.fetchBoard?.writer}</div>
      <div>제목:{data?.fetchBoard?.title}</div>
      <div>내용:{data?.fetchBoard?.contents}</div>
    </div>
  );
}
