import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  ApolloLink,
} from "@apollo/client"; // module 요즘
import { createUploadLink } from "apollo-upload-client";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../commons/stores";
import { useEffect } from "react";

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

  const uploadLink = createUploadLink({
    uri: "https://backendonline.codebootcamp.co.kr/graphql",
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  const client = new ApolloClient({
    link: ApolloLink.from([uploadLink]),
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
