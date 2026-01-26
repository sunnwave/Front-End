//제공자일 때 => 네이버, 다음, 쿠팡 등등..

import { gql, useQuery } from "@apollo/client";
import Head from "next/head";
import { GraphQLClient } from "graphql-request";

const FETCH_USEDITEM = gql`
  query fetchUseditem($useditemId: ID!) {
    fetchUseditem(useditemId: $useditemId) {
      _id
      name
      remarks
      images
    }
  }
`;

export default function OpengraphProviderPage(props: any): JSX.Element {
  // const { data } = useQuery(FETCH_USEDITEM, {
  //   variables: { useditemId: "663325b0bfc0f900299a9195" },
  // });

  return (
    <>
      <Head>
        <meta property="og:title" content={props?.qqq.name} />
        <meta property="og:description" content={props?.qqq.remarks} />
        <meta property="og:image" content={props?.qqq.images?.[0]} />
      </Head>
      <div>중고마켓에 오신 것을 환영합니다. 여기는 Body입니다 </div>
    </>
  );
}

//1. getServerSideProps는 존재하는 단어이므로 변경 불가능
//2. server에서만 실행됨(프론트엔드 서버프로그램-webpack 서버 프로그램 //useEffect-브라우저에서만 실행)와 반대
//3. 먼저 실행=> 백엔드에 데이터 요청 로직 구현
export const getServerSideProps = async (): Promise<any> => {
  console.log("여기는 서버입니다.");

  //1. 여기서 API 요청
  const graphQLClient = new GraphQLClient(
    "https://backendonline.codebootcamp.co.kr/graphql",
  );

  const result = await graphQLClient.request(FETCH_USEDITEM, {
    useditemId: "663325b0bfc0f900299a9195",
  });

  //2. 받은 결과를 return
  return {
    props: {
      qqq: {
        name: result.fetchUseditem.name,
        remark: result.fetchUseditem.remarks,
        images: result.fetchUseditem.images,
      },
    },
  };
};
