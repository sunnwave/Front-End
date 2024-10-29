import { Wrapper } from "./DetailProduct.styles";

export default function DetailProductUI(props) {
  return (
    <Wrapper>
      <div> 상품 상세 페이지</div>
      <div>판매자: {props.data?.fetchProduct?.seller}</div>
      <div>상품명:{props.data?.fetchProduct?.name}</div>
      <div>상세정보:{props.data?.fetchProduct?.detail}</div>
      <div>가격:{props.data?.fetchProduct?.price}</div>
      <div>
        등록 날짜:
        {props.data ? props.data.fetchProduct?.createdAt : "loading..."}
      </div>
      <button onClick={props.onClickMoveToEdit}>수정하러 가기</button>
    </Wrapper>
  );
}
