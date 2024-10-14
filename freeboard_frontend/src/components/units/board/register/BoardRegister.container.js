import { useRouter } from "next/router";
import { useState } from "react";
import { useMutation } from "@apollo/client";
import BoardRegisterUI from "./BoardRegister.presenter";
import { CREATE_BOARD } from "./BoardRegister.queries";

export default function BoardRegister() {
  const [writer, setWriter] = useState("");
  const [password, setPassword] = useState("");
  const [subject, setSubject] = useState("");
  const [contents, setContents] = useState("");

  const [writerError, setWriterError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [subjectError, setSubjectError] = useState("");
  const [contentsError, setContentsError] = useState("");

  const [createBoard] = useMutation(CREATE_BOARD);

  const router = useRouter();

  function onChangeWriter(event) {
    setWriter(event.target.value);
    if (event.target.value !== "") {
      setWriterError("");
    }
  }
  function onChangePassword(event) {
    setPassword(event.target.value);
    if (event.target.value !== "") {
      setPasswordError("");
    }
  }
  function onChangeSubject(event) {
    setSubject(event.target.value);
    if (event.target.value !== "") {
      setSubjectError("");
    }
  }
  function onChangeContents(event) {
    setContents(event.target.value);
    if (event.target.value !== "") {
      setContentsError("");
    }
  }
  function onChangeZipcode(event) {
    setZipcode(event.target.value);
  }
  function onChangeAddress(event) {
    setAddress(event.target.value);
  }
  function onChangeAddressDetail(event) {
    setAddressDetail(event.target.value);
  }
  function onChangeYoutube(event) {
    setYoutube(event.target.value);
  }

  const onClickRegister = async (event) => {
    if (!writer) {
      setWriterError("작성자를 입력하지 않았습니다. 작성자를 입력해주세요");
    }
    if (!password) {
      setPasswordError(
        "비밀번호를 입력하지 않았습니다. 비밀번호를 입력해주세요"
      );
    }
    if (!subject) {
      setSubjectError("제목을 입력하지 않았습니다. 제목을 입력해주세요.");
    }
    if (!contents) {
      setContentsError("내용을 입력하지 않았습니다. 내용을 입력해주세요");
    }

    if (writer && password && subject && contents) {
      try {
        const result = await createBoard({
          variables: {
            createBoardInput: {
              writer: writer,
              password: password,
              title: subject,
              contents: contents,
            },
          },
        });
        console.log(result.data);
        alert("게시글이 등록되었습니다.");
        router.push(`/boards/${result.data.createBoard._id}`);
      } catch (error) {
        console.error(error);
      }
    }
  };
  return (
    <>
      <BoardRegisterUI
        onChangeWriter={onChangeWriter}
        writerError={writerError}
        onChangePassword={onChangePassword}
        passwordError={passwordError}
        onChangeSubject={onChangeSubject}
        subjectError={subjectError}
        onChangeContents={onChangeContents}
        contentsError={contentsError}
        onChangeZipcode={onChangeZipcode}
        onChangeAddress={onChangeAddress}
        onChangeAddressDetail={onChangeAddressDetail}
        onChangeYoutube={onChangeYoutube}
        onClickRegister={onClickRegister}
      />
    </>
  );
}
