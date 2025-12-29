import * as PortOne from "@portone/browser-sdk/v2";

export default function PaymentPage(): JSX.Element {
  const onClickPayment = (): void => {
    console.log("결제하기 버튼 클릭됨");
  };
  return (
    <div>
      <button onClick={onClickPayment}>결제하기</button>
    </div>
  );
}
