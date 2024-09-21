import {
  Wrapper,
  Title,
  WriterWrapper,
  InputWrapper,
  Label,
  Writer,
  Password,
  Subject,
  Contents,
  ZipcodeWrapper,
  Zipcode,
  SearchButton,
  Address,
  Youtube,
  ImageWrapper,
  UploadButtonWrapper,
  UploadButton,
  OptionWrapper,
  RadioWrapper,
  RadioButton,
  RadioLabel,
  ButtonWrapper,
  RegisterButton,
  Error,
} from "../../../styles/newBoards";

import { useState } from "react";
import { gql, useMutation } from "@apollo/client";

const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
      writer
      title
      contents
      youtubeUrl
      likeCount
      dislikeCount
      images
      createdAt
      updatedAt
      deletedAt
    }
  }
`;

export default function NewPage() {
  const [writer, setWriter] = useState("");
  const [password, setPassword] = useState("");
  const [subject, setSubject] = useState("");
  const [contents, setContents] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [address, setAddress] = useState("");
  const [addressDetail, setAddressDetail] = useState("");
  const [youtube, setYoutube] = useState("");

  const [writerError, setWriterError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [subjectError, setSubjectError] = useState("");
  const [contentsError, setContentsError] = useState("");

  const [createBoard] = useMutation(CREATE_BOARD);

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
    console.log(result);
    if (writer && password && subject && contents && result) {
      alert("게시글이 등록되었습니다.");
    }
  };

  return (
    <Wrapper>
      <Title>게시물 등록</Title>
      <WriterWrapper>
        <InputWrapper>
          <Label>작성자</Label>
          <Writer
            type="text"
            placeholder="이름을 적어주세요."
            onChange={onChangeWriter}
          />
          <Error>{writerError}</Error>
        </InputWrapper>
        <InputWrapper>
          <Label>비밀번호</Label>
          <Password
            type="password"
            placeholder="비밀번호를 입력해주세요."
            onChange={onChangePassword}
          />
          <Error>{passwordError}</Error>
        </InputWrapper>
      </WriterWrapper>
      <InputWrapper>
        <Label>제목</Label>
        <Subject
          type="text"
          placeholder="제목을 작성해주세요."
          onChange={onChangeSubject}
        />
        <Error>{subjectError}</Error>
      </InputWrapper>
      <InputWrapper>
        <Label>내용</Label>
        <Contents
          placeholder="내용을 작성해주세요."
          onChange={onChangeContents}
        />
        <Error>{contentsError}</Error>
      </InputWrapper>
      <InputWrapper>
        <Label>주소</Label>
        <ZipcodeWrapper>
          <Zipcode placeholder="07250" onChange={onChangeZipcode} />
          <SearchButton>우편번호 검색</SearchButton>
        </ZipcodeWrapper>
        <Address onChange={onChangeAddress} />
        <Address onChange={onChangeAddressDetail} />
      </InputWrapper>
      <InputWrapper>
        <Label>유튜브</Label>
        <Youtube
          placeholder="링크를 복사해주세요."
          onChange={onChangeYoutube}
        />
      </InputWrapper>
      <ImageWrapper>
        <Label>사진 첨부</Label>
        <UploadButtonWrapper>
          <UploadButton>+</UploadButton>
          <UploadButton>+</UploadButton>
          <UploadButton>+</UploadButton>
        </UploadButtonWrapper>
      </ImageWrapper>
      <OptionWrapper>
        <Label>메인 설정</Label>
        <RadioWrapper>
          <RadioButton type="radio" id="youtube" name="radio-button" />
          <RadioLabel htmlFor="youtube">유튜브</RadioLabel>
          <RadioButton type="radio" id="image" name="radio-button" />
          <RadioLabel htmlFor="youtube">사진</RadioLabel>
        </RadioWrapper>
      </OptionWrapper>
      <ButtonWrapper>
        <RegisterButton onClick={onClickRegister}>등록하기</RegisterButton>
      </ButtonWrapper>
    </Wrapper>
  );
}
