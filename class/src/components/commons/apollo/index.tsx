import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  ApolloLink,
  fromPromise,
} from "@apollo/client"; // module 요즘
import { createUploadLink } from "apollo-upload-client";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../commons/stores";
import { useEffect } from "react";
import { onError } from "@apollo/client/link/error";
import { getAccessToken } from "../../../commons/libraries/getAccessToken";

const GLOBAL_STATE = new InMemoryCache(); //함수 외부에 선언하여 리렌더링되더라도 초기화되지 않도록 함

interface IApolloSettingProps {
  children: JSX.Element;
}
export default function ApolloSetting(props: IApolloSettingProps): JSX.Element {
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);

  //1. 프리렌더링 예제-process.browser 방법
  // if (process.browser) {
  //   alert("여기는 브라우저");
  //   const result = localStorage.getItem("accessToken");
  //   console.log("로컬스토리지에서 가져온 토큰:", result);
  //   setAccessToken(result ?? ""); //로컬스토리지에 저장된 토큰을 리코일 상태관리로 옮김
  // } else {
  //   console.log("여기는 프론트엔드 서버입니다.(yarn dev로 실행시킨 프로그램)");
  // }

  // 2. 프리렌더링 예제 - typeof window 방법
  // if (typeof window !== "undefined") {
  //   console.log("여기는 브라우저");
  //   const result = localStorage.getItem("accessToken");
  //   console.log("로컬스토리지에서 가져온 토큰:", result);
  //   setAccessToken(result ?? ""); //로컬스토리지에 저장된 토큰을 리코일 상태관리로 옮김
  // } else {
  //   console.log("여기는 프론트엔드 서버입니다.(yarn dev로 실행시킨 프로그램)");
  // }

  // 3. 프리렌더링 무시 - useEffect 방법
  useEffect(() => {
    console.log("여기는 브라우저");
    const result = localStorage.getItem("accessToken");
    // console.log("로컬스토리지에서 가져온 토큰:", result);
    setAccessToken(result ?? ""); //로컬스토리지에 저장된 토큰을 리코일 상태관리로 옮김
  }, []);

  const errorLink = onError(({ graphQLErrors, operation, forward }) => {
    //1. 에러를 캐치
    if (typeof graphQLErrors !== "undefined") {
      for (const err of graphQLErrors) {
        //1-2 해당 에러가 토큰만료 에러인지 확인(UNAUTHENTICATED)
        if (err.extensions?.code === "UNAUTHENTICATED") {
          return fromPromise(
            //2. refreshToken으로 accessToken 재발급 받기
            getAccessToken().then((newAccessToken) => {
              setAccessToken(newAccessToken ?? "");
              //3. 재발급 받은 accessToken으로 실패했던 쿼리 재요청하기
              operation.setContext({
                headers: {
                  ...operation.getContext().headers, //Authorization: Bearer xxx =>만료된 토큰이 추가되어 있는 상태
                  Authorization: `Bearer ${newAccessToken}`, //3-2 토큰만 새로운 토큰으로 교체
                },
              });
            }),
          ).flatMap(() => forward(operation));
        }
      }
    }
  });

  const uploadLink = createUploadLink({
    uri: "https://backendonline.codebootcamp.co.kr/graphql",
    headers: { Authorization: `Bearer ${accessToken}` },
    credentials: "include", //주고받을 때 쿠키도 포함시키기 위해
  });

  const client = new ApolloClient({
    link: ApolloLink.from([errorLink, uploadLink]),
    // cache: new InMemoryCache(), //컴퓨터의 메모리에 백엔드에서 받아온 데이터를 임시 저장. 페이지를 이동할 때마다 초기화 됨
    cache: GLOBAL_STATE,
  });

  // prettier-ignore
  return (
    <ApolloProvider client={client}>
      {props.children}
    </ApolloProvider>
  )
}
