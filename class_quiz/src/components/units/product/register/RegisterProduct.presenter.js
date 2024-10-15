import { Button, Input } from "./RegisterProduct.styles";

export default function RegisterUI(props) {
  return (
    <>
      <div>
        판매자: <Input type="text" onChange={props.onChangeSeller} />
      </div>
      <div>
        상품명: <Input type="text" onChange={props.onChangeName} />
      </div>
      <div>
        상품내용: <Input type="text" onChange={props.onChangeDetail} />
      </div>
      <div>
        상품가격: <Input type="text" onChange={props.onChangePrice} />
      </div>
      <Button onClick={props.onClickRegister} isActive={props.isActive}>
        상품 등록
      </Button>
    </>
  );
}
