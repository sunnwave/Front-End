import React, { useState } from "react";
import { Button, Modal } from "antd";
import DaumPostcodeEmbed, { Address } from "react-daum-postcode";

export default function App(): JSX.Element {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [address, setAddress] = useState("");

  const onToggleModal = (): void => {
    setIsModalOpen((prev) => !prev);
  };

  const handleComplete = (data: Address): void => {
    setAddress(data.address);
    onToggleModal();
  };

  return (
    <>
      <Button type="primary" onClick={onToggleModal}>
        Open Modal
      </Button>
      {isModalOpen && (
        <Modal
          title="주소 검색"
          closable={{ "aria-label": "Custom Close Button" }}
          open={isModalOpen}
          onOk={onToggleModal}
          onCancel={onToggleModal}
        >
          <DaumPostcodeEmbed onComplete={handleComplete}></DaumPostcodeEmbed>
        </Modal>
      )}
      {address && (
        <div>
          <h3>Selected Address</h3>
          <p>{address}</p>
        </div>
      )}
    </>
  );
}
