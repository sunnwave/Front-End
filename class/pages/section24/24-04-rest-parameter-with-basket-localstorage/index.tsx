import { gql, useQuery } from "@apollo/client";
import {
  IBoard,
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../../src/commons/types/generated/types";
import { MouseEvent } from "react";

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

export default function StaticRoutingMovePage(): JSX.Element {
  const { data, refetch } = useQuery<
    Pick<IQuery, "fetchBoards">,
    IQueryFetchBoardsArgs
  >(FECTH_BOARDS);

  const onClickBasket =
    (basket: IBoard) =>
    (event: MouseEvent<HTMLButtonElement>): void => {
      //1. 기존 장바구니 가져오기
      const baskets: IBoard[] = JSON.parse(
        localStorage.getItem("baskets") ?? "[]",
      );

      //2. 이미 담겼는지 확인하기
      const temp = baskets.filter((el) => el._id === basket._id);
      if (temp.length >= 1) {
        alert("이미 담으신 물품입니다.");
        return;
      }

      //3. 내가 클릭한 것 추가하기
      // delete basket.__typename //안전하지 못한 사례(basket 원본을 건드리기 때문에)
      const { __typename, ...newBasket } = basket; //안전한 사례
      baskets.push(newBasket);

      //4. 추가된 장바구니 다시 저장하기
      localStorage.setItem("baskets", JSON.stringify(baskets));
    };

  //만약 장바구니 페이지에서 가져오기도 만들고 싶다면?
  //localStorage.getItem()=> 프리렌더링시 에러 발생하므로 useEffect 사용하기

  return (
    <div>
      {data?.fetchBoards.map((el) => (
        <div key={el._id}>
          <span style={{ margin: "10px" }}>{el.title}</span>
          <span style={{ margin: "10px" }}>{el.writer}</span>
          <button onClick={onClickBasket(el)}>장바구니 담기</button>
        </div>
      ))}
    </div>
  );
}
