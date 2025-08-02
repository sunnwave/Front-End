import React, { useState } from "react";
import { Flex, message, Rate } from "antd";

const desc = ["1점", "2점", "3점", "4점", "5점"];

export default function App(): JSX.Element {
  const [alertValue, setAlertValue] = useState(3);
  const [value, setValue] = useState(3);
  const [messageApi, contextHolder] = message.useMessage();

  const handleChange = (value: number) => {
    setAlertValue(value);
    console.log(value);
    messageApi.open({
      type: "error",
      content: `현재 선택된 별점은 ${value}점 입니다.`,
    });
  };

  return (
    <>
      <div>
        <h2>별점을 클릭하면, 해당 점수를 경고메시지로 나타내기</h2>
        {contextHolder}
        <Flex gap="middle" vertical>
          <Rate tooltips={desc} onChange={handleChange} value={alertValue} />
        </Flex>
      </div>

      <div>
        <h2>별점 아래부분에 해당 점수 나타내기</h2>
        <Flex gap="middle" vertical>
          <Rate tooltips={desc} onChange={setValue} value={value} />
          {value ? <span>{desc[value - 1]}</span> : null}
        </Flex>
      </div>
    </>
  );
}
