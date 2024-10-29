import { useRouter } from "next/router";
import { useMutation, useQuery } from "@apollo/client";
import BoardDetailUI from "./BoardDetail.presenter";
import { DELETE_BOARD, FETCH_BOARD } from "./BoardDetail.queries";
import { FETCH_BOARDS } from "../list/BoardList.queries";

export default function BoardDetail() {
  const router = useRouter();

  const { data } = useQuery(FETCH_BOARD, {
    variables: { boardId: router.query.boardId },
  });
  const [deleteBoard] = useMutation(DELETE_BOARD);

  const onClickDelete = async () => {
    const confirmResult = confirm("게시물을 삭제하시겠습니까?");
    if (confirmResult) {
      console.log("if문 안에서");
      try {
        const result = await deleteBoard({
          variables: {
            boardId: router.query.boardId,
          },
        });
        alert("게시물을 삭제하였습니다");
        router.push(`/boards`);
      } catch (err) {
        console.error(err);
      }
    }
  };
  return (
    <>
      <BoardDetailUI data={data} onClickDelete={onClickDelete} />
    </>
  );
}
