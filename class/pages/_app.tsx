import { AppProps } from "next/app";
import Layout from "../src/components/commons/layout";
import ApolloSetting from "../src/components/commons/apollo";
import { Global } from "@emotion/react";
import { globalStyles } from "../src/commons/styles/globalStyes";

export default function App({ Component }: AppProps) {
  return (
    <>
      <div>=============여기는 app.js컴포넌트입니다===========</div>
      <ApolloSetting>
        <>
          <Global styles={globalStyles} />
          <Layout>
            <Component />
          </Layout>
        </>
      </ApolloSetting>
      <div>=============여기는 app.js컴포넌트입니다===========</div>
    </>
  );
}
