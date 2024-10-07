import { useMutation, gql } from "@apollo/client";
import { useState } from "react";

const CREATE_BOARD = gql`
  mutation createBoard($writer: String, $title: String, $contents: String) {
    createBoard(writer: $writer, title: $title, contents: $contents) {
      _id
      number
      message
    }
  }
`;

const CREATE_PRODUCT = gql`
  mutation createProduct(
    $seller: String
    $createProductInput: CreateProductInput!
  ) {
    createProduct(seller: $seller, createProductInput: $createProductInput) {
      _id
      number
      message
    }
  }
`;

export default function GraphqlQuiz() {
  const [createBoard] = useMutation(CREATE_BOARD);
  const [createProduct] = useMutation(CREATE_PRODUCT);

  const [writer, setWriter] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");

  const [seller, setSeller] = useState("");
  const [name, setName] = useState("");
  const [detail, setDetail] = useState("");
  const [price, setPrice] = useState("");

  const onClickBoard = async () => {
    const result = await createBoard({
      variables: {
        writer: writer,
        title: title,
        contents: contents,
      },
    });
    console.log(result);
  };

  const onClickProduct = async () => {
    const result = await createProduct({
      variables: {
        seller: seller,
        createProductInput: {
          name: name,
          detail: detail,
          price: Number(price),
        },
      },
    });
    console.log(result);
  };

  const onChangeWriter = (event) => {
    setWriter(event.target.value);
  };
  const onChangeTitle = (event) => {
    setTitle(event.target.value);
  };
  const onChangeContents = (event) => {
    setContents(event.target.value);
  };
  const onChangeSeller = (event) => {
    setSeller(event.target.value);
  };
  const onChangeName = (event) => {
    setName(event.target.value);
  };
  const onChangeDetail = (event) => {
    setDetail(event.target.value);
  };
  const onChangePrice = (event) => {
    setPrice(event.target.value);
  };
  return (
    <>
      <div>
        <div>
          작성자: <input type="text" onChange={onChangeWriter} />
        </div>
        <div>
          제목: <input type="text" onChange={onChangeTitle} />
        </div>
        <div>
          내용: <input type="text" onChange={onChangeContents} />
        </div>
        <button onClick={onClickBoard}>
          CREATE_BOARD GRAPHQL-API 요청하기
        </button>
      </div>
      <div>
        <div>
          판매자: <input type="text" onChange={onChangeSeller} />
        </div>
        <div>
          상품명: <input type="text" onChange={onChangeName} />
        </div>
        <div>
          상품 설명: <input type="text" onChange={onChangeDetail} />
        </div>
        <div>
          가격: <input type="text" onChange={onChangePrice} />
        </div>
        <button onClick={onClickProduct}>
          {" "}
          CREATE_PRODUCT GRAPHQL-API 요청하기{" "}
        </button>
      </div>
    </>
  );
}
