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
} from "./BoardRegister.styles";

export default function BoardRegisterUI({
  data,
  isUpdate,
  onChangeWriter,
  writerError,
  onChangePassword,
  passwordError,
  onChangeTitle,
  titleError,
  onChangeContents,
  contentsError,
  onChangeZipcode,
  onChangeAddress,
  onChangeAddressDetail,
  onChangeYoutube,
  onClickRegister,
  onClickUpdate,
  buttonColor,
}) {
  return (
    <>
      <Wrapper>
        <Title>게시물 {isUpdate ? "수정" : "등록"}</Title>
        <WriterWrapper>
          <InputWrapper>
            <Label>작성자</Label>
            <Writer
              type="text"
              placeholder="이름을 적어주세요."
              onChange={onChangeWriter}
              defaultValue={data?.fetchBoard.writer}
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
            onChange={onChangeTitle}
            defaultValue={data?.fetchBoard.title}
          />
          <Error>{titleError}</Error>
        </InputWrapper>
        <InputWrapper>
          <Label>내용</Label>
          <Contents
            placeholder="내용을 작성해주세요."
            onChange={onChangeContents}
            defaultValue={data?.fetchBoard.contents}
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
          <RegisterButton
            onClick={isUpdate ? onClickUpdate : onClickRegister}
            style={{ background: buttonColor }}
          >
            {isUpdate ? "수정" : "등록"}하기
          </RegisterButton>
        </ButtonWrapper>
      </Wrapper>
    </>
  );
}
