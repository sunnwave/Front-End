import { gql, useMutation } from "@apollo/client";
import { ChangeEvent, useState } from "react";
import {
  IMutation,
  IMutationUploadFileArgs,
} from "../../../src/commons/types/generated/types";
import { wrapAsync } from "../../../src/commons/libraries/asyncFunc";
import { set } from "lodash";

const myGraphql = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
      images
    }
  }
`;

const UPLOAD_FILE = gql`
  mutation uploadFile($file: Upload!) {
    uploadFile(file: $file) {
      url
    }
  }
`;

export default function ImageUploadPage(): JSX.Element {
  const [imageUrl, setImageUrl] = useState("");
  const [file, setFile] = useState<File>();

  const [myFunc] = useMutation(myGraphql);

  const [uploadFile] = useMutation<
    Pick<IMutation, "uploadFile">,
    IMutationUploadFileArgs
  >(UPLOAD_FILE);

  const onClickSubmit = async (): Promise<void> => {
    //1. uploadFile로 이미지를 업로드해서, 이미지 URL을 받아오기
    uploadFile({ variables: { file } });
    const resultFile = await uploadFile({ variables: { file } });
    const url = resultFile.data?.uploadFile.url;
    console.log("이미지 URL : ", imageUrl);

    //2. createBoard로 게시글 등록하기
    const result = await myFunc({
      variables: {
        createBoardInput: {
          writer: "철수",
          password: "1234",
          title: "제목입니다~~",
          contents: "내용입니다@@@",
          images: [url],
        },
      },
    });
    console.log(result);
  };

  const onChangeFile = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]; //배열로 들어오는 이유: <input type="file" multiple /> 일 때, 여러개 드래그 가능
    if (file === undefined) return;
    console.log(file);
    console.log("파일까지 나옴");

    //2. 임시 URL 생성(진짜 URL, 다른 브라우저에서도 접근 가능)
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = (event) => {
      console.log(event.target?.result); //게시판에서 event.target.id를 쓰면 eslint 오류가 났던 이유 : event.target은 태그만을 가르키지 않음
      setImageUrl(event.target?.result as string);
      setFile(file);
    };
  };

  return (
    <>
      <input type="file" onChange={wrapAsync(onChangeFile)} />
      {/* <img src={`https://storage.googleapis.com/${imageUrl}`} /> */}
      <img src={imageUrl} />

      <button onClick={wrapAsync(onClickSubmit)}>게시글 등록하기</button>
    </>
  );
}
