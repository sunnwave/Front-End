import { useRouter } from "next/router";
import { useState } from "react";
import { useMutation } from "@apollo/client";
import { CREATE_PRODUCT } from "./RegisterProduct.queries";
import RegisterUI from "./RegisterProduct.presenter";

export default function Register() {
  const router = useRouter();

  const [createProduct] = useMutation(CREATE_PRODUCT);

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
      console.log(result);
    } catch (error) {
      console.error(error);
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
        isActive={isActive}
      />
    </>
  );
}
