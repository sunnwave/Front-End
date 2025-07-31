import { Modal } from "antd";
import { useState } from "react";
import DaumPostcodeEmbed, { Address } from "react-daum-postcode";

export default function ModalAlertPage() {
  const [isOpen, setIsOpen] = useState(false);

  const onToggleModal = (): void => {
    setIsOpen((prev) => !prev);
  };

  const handleComplete = (data: Address): void => {
    console.log(data); // 선택한 주소 정보가 출력됩니다.
    onToggleModal(); // 모달 닫기
  };

  return (
    <>
      <button onClick={onToggleModal}>모달창 열기</button>

      {/* 모달 종료 방식 -1. 모달 숨기기 ex)자소서 등 긴 내용 */}
      <Modal
        title="주소 검색"
        open={isOpen}
        onOk={onToggleModal}
        onCancel={onToggleModal}
      >
        {/* 비밀번호 입력:
        <input type="password" /> */}
        <DaumPostcodeEmbed onComplete={handleComplete} />
      </Modal>

      {/* 모달 종료 방식 -2. 모달 삭제하기 ex) 신용카드, 비밀번호 등*/}
      {isOpen && (
        <Modal open={isOpen} onOk={onToggleModal} onCancel={onToggleModal}>
          <DaumPostcodeEmbed onComplete={handleComplete} />
        </Modal>
      )}
    </>
  );
}
