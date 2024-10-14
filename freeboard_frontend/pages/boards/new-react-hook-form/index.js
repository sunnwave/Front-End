import {
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
  RegisterForm,
} from "../../../styles/newBoards";

import { useState } from "react";
import { gql, useMutation } from "@apollo/client";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";

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
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const router = useRouter();

  const [createBoard] = useMutation(CREATE_BOARD);

  const onSubmit = async (data) => {
    const result = await createBoard({
      variables: {
        createBoardInput: {
          writer: data.writer,
          password: data.password,
          title: data.subject,
          contents: data.contents,
          youtubeUrl: data.youtubeUrl,
        },
      },
    });

    console.log(result.data);
    alert("게시물이 등록되었습니다");
    router.push(`/boards/${result.data.createBoard._id}`);
  };

  return (
    <RegisterForm onSubmit={handleSubmit(onSubmit)}>
      <Title>게시물 등록</Title>
      <WriterWrapper>
        <InputWrapper>
          <Label>작성자</Label>
          <Writer
            type="text"
            placeholder="이름을 적어주세요."
            {...register("writer", {
              required: "작성자를 입력하지 않았습니다. 작성자를 입력해주세요",
            })}
          />
          <Error>{errors.writer?.message}</Error>
        </InputWrapper>
        <InputWrapper>
          <Label>비밀번호</Label>
          <Password
            type="password"
            placeholder="비밀번호를 입력해주세요."
            {...register("password", {
              required:
                "비밀번호를 입력하지 않았습니다. 비밀번호를 입력해주세요",
            })}
          />
          <Error>{errors.password?.message}</Error>
        </InputWrapper>
      </WriterWrapper>
      <InputWrapper>
        <Label>제목</Label>
        <Subject
          type="text"
          placeholder="제목을 작성해주세요."
          {...register("subject", {
            required: "제목을 입력하지 않았습니다. 제목을 입력해주세요.",
          })}
        />
        <Error>{errors.subject?.message}</Error>
      </InputWrapper>
      <InputWrapper>
        <Label>내용</Label>
        <Contents
          placeholder="내용을 작성해주세요."
          {...register("contents", {
            required: "내용을 입력하지 않았습니다. 내용을 입력해주세요",
          })}
        />
        <Error>{errors.contents?.message}</Error>
      </InputWrapper>
      <InputWrapper>
        <Label>주소</Label>
        <ZipcodeWrapper>
          <Zipcode placeholder="07250" {...register("zipcode")} />
          <SearchButton>우편번호 검색</SearchButton>
        </ZipcodeWrapper>
        <Address {...register("address")} />
        <Address {...register("addressdetail")} />
      </InputWrapper>
      <InputWrapper>
        <Label>유튜브</Label>
        <Youtube
          placeholder="링크를 복사해주세요."
          {...register("youtubeUrl")}
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
        <RegisterButton>등록하기</RegisterButton>
      </ButtonWrapper>
    </RegisterForm>
  );
}
