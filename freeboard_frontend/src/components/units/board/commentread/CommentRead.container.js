import { useQuery } from "@apollo/client";
import CommentReadUI from "./CommentRead.presenter";
import { FETCH_BOARD_COMMENTS } from "./CommentRead.queries";
import { useRouter } from "next/router";
import CommentWriteUI from "../commentwrite/CommentWrite.presenter";

export default function CommentRead() {
  const router = useRouter();

  const { data } = useQuery(FETCH_BOARD_COMMENTS, {
    variables: {
      page: 1,
      boardId: router.query.boardId,
    },
  });

  const onClickUpdate = () => {
    console.log("update clicked");
    return <CommentWriteUI isUpdate={true} />;
  };
  console.log(data?.fetchBoardComments);
  return <CommentReadUI data={data} onClickUpdate={onClickUpdate} />;
}
