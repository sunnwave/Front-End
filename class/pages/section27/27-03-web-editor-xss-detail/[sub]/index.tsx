import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import DOMPurify from "dompurify";

const FECTH_BOARD = gql`
  query fetchBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      _id
      writer
      title
      contents
    }
  }
`;

export default function StaticRoutingMovePage(): JSX.Element {
  const router = useRouter();

  const { data } = useQuery(FECTH_BOARD, {
    variables: { boardId: router.query.sub },
  });
  return (
    <div>
      <div>작성자:{data?.fetchBoard?.writer}</div>
      <div>제목:{data?.fetchBoard?.title}</div>
      {/* <div>내용:{data?.fetchBoard?.contents}</div> */}
      {/* <div
        dangerouslySetInnerHTML={{
          __html: data?.fetchBoard.contents ?? "",
        }}
      /> */}

      {/* accessToken가 로컬스토리지에 저장되어 있을 때 탈취당할 수 있는 코드
      <div
        dangerouslySetInnerHTML={{
          __html: `
            <script>
              const qqq=localStorage.getItem("accessToken");
              console.log(qqq);
            </script>
          `,
        }}
      /> */}
      {typeof window !== "undefined" && (
        <div
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(data?.fetchBoard.contents ?? ""),
          }}
        />
      )}
    </div>
  );
}
