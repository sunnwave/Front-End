import { gql, useApolloClient } from "@apollo/client";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../src/commons/stores";

const FETCH_USER_LOGGED_IN = gql`
  query {
    fetchUserLoggedIn {
      _id
      name
      email
    }
  }
`;

export default function LoginPage(): JSX.Element {
  //1. 페이지 접속하면 자동으로 data에 받아지고 data는 글로벌스테이트 저장, 리렌더링됨.
  // const { data } =
  //   useQuery<Pick<IQuery, "fetchUserLoggedIn">>(FETCH_USER_LOGGED_IN);

  //2. 버튼 클릭 시 data에 받아지고 (data는 글로벌스테이트 저장) 리렌더린됨
  // const [myFunc, { data }] = useLazyQuery(FETCH_USER_LOGGED_IN);

  //3. axios처럼 사용하는 방법(data는 글로벌스테이트 저장)
  // const client = useApolloClient();
  // client.query()===axios.get()과 동일

  const client = useApolloClient();

  const onClickButton = async (): Promise<void> => {
    const result = await client.query({
      query: FETCH_USER_LOGGED_IN,
    });
    console.log(result);
  };

  return <button onClick={onClickButton}>프로필정보 조회하기</button>;

  // return <>{data?.fetchUserLoggedIn.name}님 환영합니다</>;
}
