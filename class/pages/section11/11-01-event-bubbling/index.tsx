import { gql, useQuery } from "@apollo/client";
import { MouseEvent } from "react";

const FECTH_BOARDS = gql`
  query {
    fetchBoards {
      number
      writer
      title
      contents
    }
  }
`;

export default function StaticRoutingMovePage() {
  const { data } = useQuery(FECTH_BOARDS);

  console.log(data?.fetchBoards);

  // const onClickBoard = (writer: string) => {
  //   alert(`${writer}님이 작성한 글입니다.`);
  // };

  const onClickBoard = (event: MouseEvent<HTMLDivElement>) => {
    // alert(`${event.target.id}님이 작성한 글입니다.`);
    alert(`${event.currentTarget.id}님이 작성한 글입니다.`);
  };

  return (
    <div>
      {data?.fetchBoards.map((el: any) => (
        <div id={el.writer} key={el.number} onClick={onClickBoard}>
          <span>
            <input type="checkbox" />
          </span>
          <span style={{ margin: "10px", cursor: "pointer" }}>{el.number}</span>
          <span style={{ margin: "10px", cursor: "pointer" }}>{el.title}</span>
          <span style={{ margin: "10px", cursor: "pointer" }}>{el.writer}</span>
        </div>
      ))}
    </div>
  );
}
