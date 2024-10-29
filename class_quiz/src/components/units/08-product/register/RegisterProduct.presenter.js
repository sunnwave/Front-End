import { Button, Input } from "./RegisterProduct.styles";

export default function RegisterUI(props) {
  return (
    <>
      <h1>{props.isEdit ? "수정" : "등록"}페이지</h1>
      <div>
        판매자:{" "}
        <Input
          type="text"
          onChange={props.onChangeSeller}
          defaultValue={props.data?.fetchProduct.seller}
        />
      </div>
      <div>
        상품명:{" "}
        <Input
          type="text"
          onChange={props.onChangeName}
          defaultValue={props.data?.fetchProduct.name}
        />
      </div>
      <div>
        상품내용:{" "}
        <Input
          type="text"
          onChange={props.onChangeDetail}
          defaultValue={props.data?.fetchProduct.detail}
        />
      </div>
      <div>
        상품가격:{" "}
        <Input
          type="text"
          onChange={props.onChangePrice}
          defaultValue={props.data?.fetchProduct.price}
        />
      </div>
      <Button
        onClick={props.isEdit ? props.onClickUpdate : props.onClickRegister}
        isActive={props.isActive}
      >
        {props.isEdit ? "수정" : "등록"}하기
      </Button>
    </>
  );
}
