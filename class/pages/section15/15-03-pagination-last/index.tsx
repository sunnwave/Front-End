import { gql, useQuery } from "@apollo/client";
import {
  IQuery,
  IQueryFetchBoardsArgs,
  IQueryFetchBoardsCountArgs,
} from "../../../src/commons/types/generated/types";
import { useState } from "react";
import type { MouseEvent } from "react";

const FECTH_BOARDS = gql`
  query fechBoards($page: Int) {
    fetchBoards(page: $page) {
      _id
      writer
      title
      contents
    }
  }
`;

const FETCH_BOARDS_COUNT = gql`
  query {
    fetchBoardsCount
  }
`;

export default function StaticRoutingMovePage(): JSX.Element {
  const [startPage, setStartPage] = useState(1);

  const { data, refetch } = useQuery<
    Pick<IQuery, "fetchBoards">,
    IQueryFetchBoardsArgs
  >(FECTH_BOARDS);

  const { data: dataBoardsCount } = useQuery<
    Pick<IQuery, "fetchBoardsCount">,
    IQueryFetchBoardsCountArgs
  >(FETCH_BOARDS_COUNT);

  const lastPage = Math.ceil((dataBoardsCount?.fetchBoardsCount ?? 10) / 10);

  const onClickPage = (event: MouseEvent<HTMLSpanElement>) => {
    void refetch({ page: Number(event.currentTarget.id) });
  };

  const onClickPrevPage = (): void => {
    if (startPage === 1) return;

    setStartPage(startPage - 10);
    void refetch({ page: startPage - 10 });
  };

  const onClickFirstPage = (): void => {
    setStartPage(1);
    void refetch({ page: 1 });
  };

  const onClickNextPage = (): void => {
    if (startPage + 10 > lastPage) return;
    setStartPage(startPage + 10);
    void refetch({ page: startPage + 10 });
  };

  const onClickLastPage = (): void => {
    const lastPageStart = Math.floor((lastPage - 1) / 10) * 10 + 1;
    setStartPage(lastPageStart);
    void refetch({ page: lastPage });
  };

  return (
    <div>
      {data?.fetchBoards.map((el) => (
        <div key={el._id}>
          <span style={{ margin: "10px" }}>{el.title}</span>
          <span style={{ margin: "10px" }}>{el.writer}</span>
        </div>
      ))}

      {startPage !== 1 && (
        <span
          onClick={onClickFirstPage}
          style={{ margin: "10px", cursor: "pointer" }}
        >
          {"<<"}
        </span>
      )}
      {startPage !== 1 && (
        <span
          onClick={onClickPrevPage}
          style={{ margin: "10px", cursor: "pointer" }}
        >
          {"<"}
        </span>
      )}

      {new Array(10).fill(1).map(
        (_, index) =>
          index + startPage <= lastPage && (
            <span
              key={index + startPage}
              id={String(index + startPage)}
              onClick={onClickPage}
              style={{ margin: "10px", cursor: "pointer" }}
            >
              {index + startPage}
            </span>
          ),
      )}
      {startPage + 10 <= lastPage && (
        <span
          onClick={onClickNextPage}
          style={{ margin: "10px", cursor: "pointer" }}
        >
          {">"}
        </span>
      )}

      {startPage + 10 <= lastPage && (
        <span
          onClick={onClickLastPage}
          style={{ margin: "10px", cursor: "pointer" }}
        >
          {">>"}
        </span>
      )}
    </div>
  );
}
