import { Modal } from "antd";

export default function ModalAlertPage() {
  const onClickSuccess = (): void => {
    Modal.success({
      title: "성공",
      content: "성공적으로 처리되었습니다.",
    });
  };
  const onClickError = (): void => {
    Modal.error({
      title: "실패",
      content: "처리 중 오류가 발생했습니다.",
    });
  };

  return (
    <>
      <button onClick={onClickSuccess}>성공</button>
      <button onClick={onClickError}>실패</button>
    </>
  );
}
