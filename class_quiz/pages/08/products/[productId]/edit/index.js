import Register from "../../../../../src/components/units/08-product/register/RegisterProduct.container";
import { useQuery } from "@apollo/client";
import { FETCH_PRODUCT } from "../../../../../src/components/units/08-product/detail/DetailProduct.queries";
import { useRouter } from "next/router";

export default function EditPage() {
  const router = useRouter();

  const { data } = useQuery(FETCH_PRODUCT, {
    variables: { productId: router.query.productId },
  });
  return (
    <>
      <Register isEdit={true} data={data} />
    </>
  );
}
