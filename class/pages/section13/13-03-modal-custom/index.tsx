import { Modal } from "antd";
import { useState } from "react";

export default function ModalAlertPage() {
  const [isOpen, setIsOpen] = useState(false);

  const showModal = (): void => {
    setIsOpen(true);
  };
  const handleOk = (): void => {
    setIsOpen(false);
  };
  const handelCancel = (): void => {
    setIsOpen(false);
  };

  return (
    <>
      <button onClick={showModal}>모달창 열기</button>
      <Modal
        title="모달 제목"
        open={isOpen}
        onOk={handleOk}
        onCancel={handelCancel}
      >
        비밀번호 입력:
        <input type="password" />
      </Modal>
    </>
  );
}
