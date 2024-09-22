import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

export default function App({ Component, pageProps }) {
  const client = new ApolloClient({
    uri: "http://practice.codebootcamp.co.kr/graphql",
    cache: new InMemoryCache(), //컴퓨터의 메모리에 백엔드에서 받아온 데이터 임시로 저장해 놓기
  });

  return (
    <>
      <div>=============여기는 app.js컴포넌트입니다===========</div>
      <ApolloProvider client={client}>
        <Component {...pageProps} />
      </ApolloProvider>
      <div>=============여기는 app.js컴포넌트입니다===========</div>
    </>
  );
}
