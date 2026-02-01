import "@testing-library/jest-dom";
import { server } from "./src/commons/mocks/server";

// 테스트 전체에서 MSW 서버 ON
beforeAll(() => server.listen({ onUnhandledRequest: "error" }));

// 각 테스트 끝날 때 핸들러 리셋(테스트별 override 가능)
afterEach(() => server.resetHandlers());

// 테스트 종료 시 서버 OFF
afterAll(() => server.close());
