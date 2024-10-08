import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";

const FETCH_PRODUCT = gql`
  query fetchProduct($productId: ID) {
    fetchProduct(productId: $productId) {
      seller
      name
      detail
      price
      createdAt
    }
  }
`;

export default function () {
  const router = useRouter();

  const { data } = useQuery(FETCH_PRODUCT, {
    variables: { productId: router.query.productID },
  });
  return (
    <>
      <div>게시물 상세 페이지로 이동 완료</div>
      <div>판매자: {data?.fetchProduct?.seller}</div>
      <div>상품명:{data?.fetchProduct?.name}</div>
      <div>상세정보:{data?.fetchProduct?.detail}</div>
      <div>가격:{data?.fetchProduct?.price}</div>
      <div>등록 날짜: {data ? data.fetchProduct?.createdAt : "loading..."}</div>
    </>
  );
}
