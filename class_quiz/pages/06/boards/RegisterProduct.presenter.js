export default function RegisterUI(props) {
  return (
    <>
      <div>
        판매자: <input type="text" onChange={props.onChangeSeller} />
      </div>
      <div>
        상품명: <input type="text" onChange={props.onChangeName} />
      </div>
      <div>
        상품내용: <input type="text" onChange={props.onChangeDetail} />
      </div>
      <div>
        상품가격: <input type="text" onChange={props.onChangePrice} />
      </div>
      <button onClick={props.onClickRegister}>상품 등록</button>
    </>
  );
}
