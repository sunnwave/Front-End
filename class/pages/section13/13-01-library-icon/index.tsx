import { UpCircleOutlined } from "@ant-design/icons";
import styled from "@emotion/styled";
import { MouseEvent } from "react";

export default function LibraryIconPage(): JSX.Element {
  const MyIcon = styled(UpCircleOutlined)`
    font-size: 50px; //폰트 사이즈로 아이콘 크기 조절
    color: red;
  `;

  const onClickIcon = (event: MouseEvent<HTMLDivElement>): void => {
    // console.log(event.target.id); //icon이 svg로 바뀌고 그 위를 span 태그가 덮고 있어서 id가 span에 있음
    console.log(event.currentTarget.id); // 클릭한 요소의 id를 출력
  };

  return (
    <>
      {/* <MyIcon id="circle-icon" onClick={onClickIcon} /> */}
      <div id="circle-icon" onClick={onClickIcon}>
        {/*아이콘을 감싸는 div를 만들어 이벤트 버블링을 이용하여 클릭 이벤트를 처리*/}
        <MyIcon />
      </div>
    </>
  );
}
