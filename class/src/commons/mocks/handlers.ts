import { graphql } from "msw";
import { IMutationCreateBoardArgs } from "../types/generated/types";

const gql = graphql.link("http://mock.com/graphql");

export const handlers = [
  // ✅ GraphQL 예시: 엔드포인트가 보통 /graphql
  // (네 프로젝트에서 실제 엔드포인트에 맞춰 조정)
  gql.query("fetchBoard", (req, res, ctx) => {
    // req.variables 로 변수 접근 가능
    return res(
      ctx.data({
        fetchBoards: [
          { _id: "1", title: "MSW 제목1", contents: "MSW 내용1" },
          { _id: "2", title: "MSW 제목2", contents: "MSW 내용2" },
        ],
      }),
    );
  }),

  gql.mutation("createBoard", (req, res, ctx) => {
    const input = (req.variables as IMutationCreateBoardArgs)?.createBoardInput;
    console.log("(handler)🔥 MSW createBoard input:", input);

    return res(
      ctx.data({
        createBoard: {
          _id: "qqq",
          writer: req.variables.createBoardInput.writer,
          title: req.variables.createBoardInput.title,
          contents: req.variables.createBoardInput.contents,
          __typename: "Board",
        },
      }),
    );
  }),
];
