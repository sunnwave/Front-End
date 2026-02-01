import { add } from "../../pages/section33/33-01-jest";

it("더하기 테스트", () => {
  const result = add(3, 5);
  expect(result).toBe(8);
});

// describe("더하기 테스트 그룹", () => {
//   it("더하기 테스트 1", () => {
//     const result = add(3, 5);
//   });

//   it("더하기 테스트 2", () => {
//     const result = add(-3, 5);
//   });

//   it("더하기 테스트 3", () => {
//     const result = add(0, 0);
//   });
// });
