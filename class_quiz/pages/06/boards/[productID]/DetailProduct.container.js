import { useRouter } from "next/router";
import { FETCH_PRODUCT } from "./DetailProduct.queries";
import { useQuery } from "@apollo/client";
import DetailProductUI from "./DetailProduct.presenter";

export default function DetailProduct() {
  const router = useRouter();

  const { data } = useQuery(FETCH_PRODUCT, {
    variables: { productId: router.query.productID },
  });

  return (
    <>
      <DetailProductUI data={data} />
    </>
  );
}
