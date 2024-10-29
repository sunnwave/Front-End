import { useRouter } from "next/router";
import { useState } from "react";
import { useMutation } from "@apollo/client";
import { CREATE_PRODUCT, UPDATE_PRODUCT } from "./RegisterProduct.queries";
import RegisterUI from "./RegisterProduct.presenter";

export default function Register(props) {
  const router = useRouter();

  const [createProduct] = useMutation(CREATE_PRODUCT);
  const [updateProduct] = useMutation(UPDATE_PRODUCT);

  const [seller, setSeller] = useState("");
  const [name, setName] = useState("");
  const [detail, setDetail] = useState("");
  const [price, setPrice] = useState("");
  const [isActive, setIsActive] = useState(false);

  const onChangeSeller = (event) => {
    setSeller(event.target.value);
    if (event.target.value && name && detail && price) {
      setIsActive(true);
    }
  };
  const onChangeName = (event) => {
    setName(event.target.value);
    if (seller && event.target.value && detail && price) {
      setIsActive(true);
    }
  };
  const onChangeDetail = (event) => {
    setDetail(event.target.value);
    if (seller && name && event.target.value && price) {
      setIsActive(true);
    }
  };
  const onChangePrice = (event) => {
    setPrice(Number(event.target.value));
    if (seller && name && detail && event.target.value) {
      setIsActive(true);
    }
  };

  const onClickRegister = async () => {
    try {
      const result = await createProduct({
        variables: {
          seller,
          createProductInput: {
            name,
            detail,
            price,
          },
        },
      });
      console.log(result.data.createProduct._id);
      router.push(`/08/products/${result.data.createProduct._id}`);
    } catch (error) {
      console.error(error);
    }
  };

  const onClickUpdate = async () => {
    const myUpdateProductInput = {};
    if (name) myUpdateProductInput.name = name;
    if (detail) myUpdateProductInput.detail = detail;
    if (price) myUpdateProductInput.price = Number(price);

    try {
      const result = await updateProduct({
        variables: {
          productId: router.query.productId,
          updateProductInput: myUpdateProductInput,
        },
      });
      router.push(`/08/products/${router.query.productId}`);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <RegisterUI
        onChangeSeller={onChangeSeller}
        onChangeName={onChangeName}
        onChangeDetail={onChangeDetail}
        onChangePrice={onChangePrice}
        onClickRegister={onClickRegister}
        onClickUpdate={onClickUpdate}
        isActive={isActive}
        isEdit={props.isEdit}
        data={props.data}
      />
    </>
  );
}
