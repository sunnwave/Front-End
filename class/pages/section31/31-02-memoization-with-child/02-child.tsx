import { memo } from "react";

function MemoizationChildPage(): JSX.Element {
  console.log("자식 컴포넌트가 렌더링 되었습니다.");

  return (
    <>
      <div>================================</div>
      <div>자식 컴포넌트</div>
      <div>================================</div>
    </>
  );
}

export default memo(MemoizationChildPage);
