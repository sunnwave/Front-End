import { useMutation, useQuery } from "@apollo/client";
import { DELETE_PRODUCT, FETCH_PRODUCTS } from "./FetchProducts.queries";
import FetchProductsUI from "./FetchProducts.presenter";

export default function FetchProducts() {
  const { data } = useQuery(FETCH_PRODUCTS, {
    variables: { page: 1 },
  });

  const [deleteProduct] = useMutation(DELETE_PRODUCT);

  const onClickDelete = (event) => {
    deleteProduct({
      variables: {
        productId: event.target.id,
      },
      refetchQueries: [{ query: FETCH_PRODUCTS, variables: { page: 1 } }],
    });
  };

  return (
    <>
      <FetchProductsUI data={data} onClickDelete={onClickDelete} />
    </>
  );
}
