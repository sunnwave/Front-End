import { useState } from "react";
import { Button, Table, Td, Th, Tr } from "./bonus3.styles";

const Notices = [
  { number: 1, title: "9월달 시스템점검 안내입니다", date: "2020.09.19" },
  {
    number: 2,
    title: "안녕하세요! 공지사항 전달드립니다.",
    date: "2020.09.17",
  },
  { number: 3, title: "개인정보 처리방침 변경 사전 안내", date: "2020.09.12" },
  { number: 4, title: "iOS 10.0 이하 지원 중단 안내", date: "2020.08.10" },
  {
    number: 5,
    title: "이용약관 변경 사전 안내",
    date: "2020.08.01",
  },
  { number: 6, title: "개인정보 처리방침 변경 사전 안내", date: "2020.07.19" },
];

export default function Bonus3Page() {
  const [checkedItems, SetCheckedItems] = useState([]);

  const onChangeAllCheckBox = () => {
    if (checkedItems.length !== Notices.length) {
      SetCheckedItems(Notices);
    } else {
      SetCheckedItems([]);
    }
    // if (event.target.checked) {
    //   const temp = Array.from({ length: Notices.length }, (el, i) =>
    //     String(i + 1)
    //   );
    //   SetCheckedItems(temp);
    // } else {
    //   SetCheckedItems([]);
    // }

    // if (checkedItems.length === Notices.length) {
    //   event.target.checked = true;
    // } else {
    //   event.target.checked = false;
    // }
  };

  const onChangeSingleCheckBox = (el) => {
    if (checkedItems.every((temp) => temp.number !== el.number)) {
      SetCheckedItems([...checkedItems, el]);
      console.log([...checkedItems, el]);
    } else {
      const result = checkedItems.filter((temp) => temp.number !== el.number);
      SetCheckedItems(result);
      console.log(result);
    }
  };

  const isChecked = (el) => {
    return checkedItems.some((temp) => temp.number === el.number);
  };

  return (
    <>
      <Table>
        <Tr>
          <Th>
            <input
              type="checkbox"
              checked={checkedItems.length === Notices.length}
              onChange={onChangeAllCheckBox}
            />
          </Th>
          <Th>번호</Th>
          <Th>제목</Th>
          <Th>작성일</Th>
        </Tr>
        {Notices.map((el, index) => (
          <Tr key={index}>
            <Td>
              <input
                type="checkbox"
                onChange={() => onChangeSingleCheckBox(el)}
                checked={isChecked(el)}
                id={el.number}
              />
            </Td>
            <Td>{el.number}</Td>
            <Td>{el.title}</Td>
            <Td>{el.date}</Td>
          </Tr>
        ))}
      </Table>
      <Button>선택 삭제</Button>
    </>
  );
}
