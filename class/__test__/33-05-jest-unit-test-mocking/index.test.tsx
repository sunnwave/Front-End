import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import JestMockingTestPage from "../../pages/section33/33-05-jest-unit-test-mocking";
import {
  ApolloClient,
  ApolloProvider,
  HttpLink,
  InMemoryCache,
} from "@apollo/client";
import fetch from "cross-fetch";
import mockRouter from "next-router-mock";

jest.mock("next/router", () => require("next-router-mock"));

it("게시글 등록 테스트", async () => {
  const client = new ApolloClient({
    link: new HttpLink({
      uri: "http://mock.com/graphql",
      fetch,
    }),
    cache: new InMemoryCache(),
  });
  render(
    <ApolloProvider client={client}>
      <JestMockingTestPage />
    </ApolloProvider>,
  );

  fireEvent.change(screen.getByRole("input-writer"), {
    target: { value: "철수" },
  });
  fireEvent.change(screen.getByRole("input-title"), {
    target: { value: "제목입니다." },
  });
  fireEvent.change(screen.getByRole("input-contents"), {
    target: { value: "내용입니다." },
  });

  fireEvent.click(screen.getByRole("submit-button"));

  await waitFor(() => {
    expect(mockRouter.asPath).toEqual("/boards/qqq");
  });
});
