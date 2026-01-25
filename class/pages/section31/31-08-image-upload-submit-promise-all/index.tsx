import { gql, useMutation } from "@apollo/client";
import { ChangeEvent, useState } from "react";
import {
  IMutation,
  IMutationUploadFileArgs,
} from "../../../src/commons/types/generated/types";
import { wrapAsync } from "../../../src/commons/libraries/asyncFunc";

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
  const [imageUrls, setImageUrls] = useState(["", "", ""]);
  const [files, setFiles] = useState<File[]>([]);

  const [myFunc] = useMutation(myGraphql);

  const [uploadFile] = useMutation<
    Pick<IMutation, "uploadFile">,
    IMutationUploadFileArgs
  >(UPLOAD_FILE);

  const onClickSubmit = async (): Promise<void> => {
    //1. uploadFile로 이미지를 업로드해서, 이미지 URL을 받아오기
    //1-1) 안 좋은 예제 - await를 매번 기다림 => for문 사용해도 마찬가지(이유: i 값에 의존하기 때문에)
    // const resultFile0 = await uploadFile({ variables: { file: files[0] } });
    // const resultFile1 = await uploadFile({ variables: { file: files[1] } });
    // const resultFile2 = await uploadFile({ variables: { file: files[2] } });
    // const url0 = resultFile0.data?.uploadFile.url;
    // const url1 = resultFile1.data?.uploadFile.url;
    // const url2 = resultFile2.data?.uploadFile.url;
    // const resultUrls = [url0, url1, url2];

    //1-2) 좋은 예제 - Promise.all 사용 => 병렬처리
    // const results = await Promise.all([
    // uploadFile({ variables: { file: files[0] } }),
    // uploadFile({ variables: { file: files[1] } }),
    // uploadFile({ variables: { file: files[2] } }),
    // ]);

    // console.log(results);
    // const resultUrls = results.map((el) =>
    //   console.log(el.data?.uploadFile.url),
    // );

    //1-2) 좋은 예제 - Promise.all 사용. 리팩토링
    const results = await Promise.all(
      files.map((el) => uploadFile({ variables: { file: el } })),
    );
    console.log(results);
    const resultUrls = results.map((el) => el.data?.uploadFile.url);
    console.log(resultUrls);

    //2. createBoard로 게시글 등록하기
    const result = await myFunc({
      variables: {
        createBoardInput: {
          writer: "철수",
          password: "1234",
          title: "제목입니다~~",
          contents: "내용입니다@@@",
          images: resultUrls,
        },
      },
    });
    console.log(result);
  };

  const onChangeFile =
    (index: number) => async (event: ChangeEvent<HTMLInputElement>) => {
      const file = event.target.files?.[0]; //배열로 들어오는 이유: <input type="file" multiple /> 일 때, 여러개 드래그 가능
      if (file === undefined) return;
      console.log(file);
      console.log("파일까지 나옴");

      //2. 임시 URL 생성(진짜 URL, 다른 브라우저에서도 접근 가능)
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = (event) => {
        console.log(event.target?.result); //게시판에서 event.target.id를 쓰면 eslint 오류가 났던 이유 : event.target은 태그만을 가르키지 않음

        const tempUrls = [...imageUrls];
        tempUrls[index] = event.target?.result as string;
        setImageUrls(tempUrls);

        const tempFiles = [...files];
        tempFiles[index] = file;
        setFiles(tempFiles);
      };
    };

  return (
    <>
      <input type="file" onChange={wrapAsync(onChangeFile(0))} />
      <input type="file" onChange={wrapAsync(onChangeFile(1))} />
      <input type="file" onChange={wrapAsync(onChangeFile(2))} />
      {/* <img src={`https://storage.googleapis.com/${imageUrl}`} /> */}
      <img src={imageUrls[0]} />
      <img src={imageUrls[1]} />
      <img src={imageUrls[2]} />

      <button onClick={wrapAsync(onClickSubmit)}>게시글 등록하기</button>
    </>
  );
}
