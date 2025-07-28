import React, { useState } from "react";
import { Flex, Rate } from "antd";

export default function App(): JSX.Element {
  const [value, setValue] = useState(3);
  console.log(value);

  // ======1단계 방식=====
  // const onchangeStar = (value: number) => {
  //   setValue(value);
  // };

  // ======2단계 방식=====
  // const onchangeStar = (value) => setValue(value);

  return (
    <Flex gap="middle" vertical>
      {/* <Rate onChange={onchangeStar} value={value} /> 1단계 방식 */}
      {/* <Rate onChange={onchangeStar} value={value} /> 2단계 방식 */}
      {/* <Rate onChange={(value) => setValue(value)} value={value} /> 3단계 방식 */}
      <Rate onChange={setValue} value={value} /> {/* 4단계 방식 */}
    </Flex>
  );
}
