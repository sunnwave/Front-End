import { useRouter } from "next/router";
import CommentWriteUI from "./CommentWrite.presenter";
import { useMutation, useQuery } from "@apollo/client";
import {
  CREATE_BOARD_COMMENT,
  FETCH_BOARD_COMMENTS,
  FETCH_BOARD,
} from "./CommentWrite.queries";
import { useState } from "react";

export default function CommentWrite(props) {
  const router = useRouter();

  const [createBoardComment] = useMutation(CREATE_BOARD_COMMENT);

  const [writer, setWriter] = useState("");
  const [password, setPassword] = useState("");
  const [rating, setRating] = useState(0);
  const [contents, setContents] = useState("");
  const [contentsCount, setContentsCount] = useState(0);

  function onChangeWriter(event) {
    setWriter(event.target.value);
  }

  function onChangePassword(event) {
    setPassword(event.target.value);
  }

  function onChangeRating(event) {
    setRating(event.target.value);
  }

  function onChangeContents(event) {
    setContents(event.target.value);
    setContentsCount(event.target.value.length);
  }

  const onClickRegister = async () => {
    console.log("clicked");
    // if (!contents) {
    // }
    try {
      const result = await createBoardComment({
        variables: {
          boardId: router.query.boardId,
          createBoardCommentInput: {
            writer: writer ? writer : "익명",
            password,
            contents,
            rating,
          },
        },
        refetchQueries: [
          {
            query: FETCH_BOARD_COMMENTS,
            variables: {
              page: 1,
              boardId: router.query.boardId,
            },
          },
        ],
      });
    } catch (err) {
      console.error(err);
    }
    setWriter("");
    setPassword("");
    setRating(0);
    setContents("");
    console.log(writer, password, rating, contents);
  };

  return (
    <CommentWriteUI
      isUpdate={props.isUpdate}
      onChangeWriter={onChangeWriter}
      onChangePassword={onChangePassword}
      onChangeRating={onChangeRating}
      onChangeContents={onChangeContents}
      onClickRegister={onClickRegister}
      contentsCount={contentsCount}
    />
  );
}
