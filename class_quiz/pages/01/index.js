import {
  Body,
  MenuWrapper,
  NavContainer,
  NavLabel,
  NavWrapper,
  NavIcon,
  ProfileButton,
  ProfileImage,
  ProfileLabel,
  ProfileName,
  ProfileWrapper,
  QuestionContainer,
  QuestionNumber,
  QuestionTitle,
  QuestionTitleWrapper,
  QuestionToggle,
  QuestionWrapper,
  SearchIcon,
  SearchWrapper,
  MenuItem,
  SearchIconImg,
  ToggleIconImg,
  MoreInfoIconImg,
  Hr,
} from "../../styles/01-index.js";

export default function FaqPage() {
  return (
    <>
      <Body>
        <SearchWrapper>
          <SearchIcon>
            <SearchIconImg src={"search_icon.png"} />
          </SearchIcon>
        </SearchWrapper>
        <ProfileWrapper>
          <ProfileLabel>마이</ProfileLabel>
          <ProfileImage src={"profile_image.png"} />
          <ProfileName>임정아</ProfileName>
          <ProfileButton>
            <MoreInfoIconImg src={"arrow2_icon.png"} />
          </ProfileButton>
        </ProfileWrapper>
        <MenuWrapper>
          <MenuItem>공지사항</MenuItem>
          <MenuItem>이벤트</MenuItem>
          <MenuItem style={{ color: "#FF1B6D" }}>
            FAQ
            <hr
              style={{ background: "#FF1B6D", height: "2px", border: "0" }}
            ></hr>
          </MenuItem>
          <MenuItem>Q&A</MenuItem>
        </MenuWrapper>
        <Hr></Hr>
        <QuestionContainer>
          <QuestionWrapper>
            <QuestionTitleWrapper>
              <QuestionNumber>Q.01</QuestionNumber>
              <QuestionTitle>리뷰 작성은 어떻게 하나요?</QuestionTitle>
            </QuestionTitleWrapper>
            <QuestionToggle>
              <ToggleIconImg src={"arrow_icon.png"} />
            </QuestionToggle>
          </QuestionWrapper>
          <QuestionWrapper>
            <QuestionTitleWrapper>
              <QuestionNumber>Q.02</QuestionNumber>
              <QuestionTitle>리뷰 수정/삭제는 어떻게 하나요?</QuestionTitle>
            </QuestionTitleWrapper>
            <QuestionToggle>
              <ToggleIconImg src={"arrow_icon.png"} />
            </QuestionToggle>
          </QuestionWrapper>
          <QuestionWrapper>
            <QuestionTitleWrapper>
              <QuestionNumber>Q.03</QuestionNumber>
              <QuestionTitle>아이디/비밀번호를 잊어버렸어요</QuestionTitle>
            </QuestionTitleWrapper>
            <QuestionToggle>
              <ToggleIconImg src={"arrow_icon.png"} />
            </QuestionToggle>
          </QuestionWrapper>
          <QuestionWrapper>
            <QuestionTitleWrapper>
              <QuestionNumber>Q.04</QuestionNumber>
              <QuestionTitle>회원탈퇴를 하고싶어요.</QuestionTitle>
            </QuestionTitleWrapper>
            <QuestionToggle>
              <ToggleIconImg src={"arrow_icon.png"} />
            </QuestionToggle>
          </QuestionWrapper>
          <QuestionWrapper>
            <QuestionTitleWrapper>
              <QuestionNumber>Q.05</QuestionNumber>
              <QuestionTitle>출발지 설정은 어떻게 하나요?</QuestionTitle>
            </QuestionTitleWrapper>
            <QuestionToggle>
              <ToggleIconImg src={"arrow_icon.png"} />
            </QuestionToggle>
          </QuestionWrapper>
          <QuestionWrapper>
            <QuestionTitleWrapper>
              <QuestionNumber>Q.06</QuestionNumber>
              <QuestionTitle>비밀번호를 변경하고 싶어요</QuestionTitle>
            </QuestionTitleWrapper>
            <QuestionToggle>
              <ToggleIconImg src={"arrow_icon.png"} />
            </QuestionToggle>
          </QuestionWrapper>
        </QuestionContainer>
        <Hr></Hr>
        <NavContainer>
          <NavWrapper>
            <NavIcon src={"home_icon.png"} />
            <NavLabel>홈</NavLabel>
          </NavWrapper>
          <NavWrapper>
            <NavIcon
              src={"location_icon.png"}
              style={{ width: "35px", height: "40px" }}
            />
            <NavLabel>잇츠로드</NavLabel>
          </NavWrapper>
          <NavWrapper>
            <NavIcon src={"wish_icon.png"} />
            <NavLabel>마이찜</NavLabel>
          </NavWrapper>
          <NavWrapper>
            <NavIcon src={"my_icon.png"} />
            <NavLabel style={{ color: "#FF1B6D" }}>마이</NavLabel>
          </NavWrapper>
        </NavContainer>
      </Body>
    </>
  );
}
