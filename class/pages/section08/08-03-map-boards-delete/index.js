import { gql, useMutation, useQuery } from "@apollo/client";

const FETCH_BOARDS = gql`
  query {
    fetchBoards {
      number
      writer
      title
      contents
    }
  }
`;

const DELETE_BOARD = gql`
  mutation deleteBoard($number: Int) {
    deleteBoard(number: $number) {
      message
    }
  }
`;

export default function StaticRoutingMovePage() {
  const { data } = useQuery(FETCH_BOARDS);

  const [deleteBoard] = useMutation(DELETE_BOARD);

  console.log(data?.fetchBoards);

  const onClickDelete = (event) => {
    deleteBoard({
      variables: {
        number: Number(event.target.id),
      },
      refetchQueries: [{ query: FETCH_BOARDS }],
    });
  };
  return (
    <div>
      {data?.fetchBoards.map((el) => (
        //1.프레그먼트란? <></>, <Fragment></Fragment>
        //2.프레그먼트에 key를 입력하는 방법 => <Fragment key={i}></Fragment>
        //3. 특별한 이유가 없으면? Fragment로 감싸자. <div></div>는 1개 더 그려야돼서 조금 느려짐

        <div key={el.number}>
          {/* key를 부여함으로 인해 각각 고유한 태그임을 알려주게 된다. 키 값은 중복되지 않는 고유한 값을 주어야 한다.*/}
          {/* key값에 index값을 부여하게 되면 index는 게시글을 삭제할 때, 다음 게시글이 올라오면서 기존 index와 동일한 값을 갖게 됨. 즉, 유일한 값이 아님*/}
          <span>
            <input type="checkbox" />
          </span>
          <span style={{ margin: "10px" }}>{el.number}</span>
          <span style={{ margin: "10px" }}>{el.title}</span>
          <span style={{ margin: "10px" }}>{el.writer}</span>
          <span>
            <button id={el.number} onClick={onClickDelete}>
              삭제
            </button>
          </span>
        </div>
      ))}
    </div>
  );
}
