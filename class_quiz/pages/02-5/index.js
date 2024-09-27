import styled from "@emotion/styled";

const Wrapper = styled.div`
  width: 640px;
  height: 1138px;
  padding: 224px 50px 83px 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const LogoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Logo = styled.img`
  width: 66.24px;
  height: 82.08px;
`;

const LogoLabel = styled.label`
  font-family: Noto Sans KR;
  font-size: 60px;
  font-weight: 700;
  color: white;
  margin-top: 40.92px;
`;
const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 144px;
`;
const InputWrapper = styled.div`
  width: 540px;
  border: solid #7d7d7d;
  border-width: 0px 0px 1px 0px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 38px;
  padding-bottom: 7px;
`;
const Input = styled.input`
  width: 516px;
  font-family: Noto Sans KR;
  font-size: 24px;
  font-weight: 400;
  color: white;
  background: none;
  border: none;
  display: flex;
  flex-direction: row;
  align-items: center;
`;
const DeleteLogo = styled.img`
  width: 20px;
  height: 20px;
`;
const ErrorMessage = styled.div`
  height: 23px;
  margin-top: 5px;
  font-family: Noto Sans KR;
  font-size: 16px;
  font-weight: 400;
  color: #ff1b6d;
`;
const LoginButton = styled.button`
  width: 540px;
  height: 76px;
  border-radius: 38px;
  background: rgba(255, 27, 109, 0.6);
  color: #ffffff;
  font-family: Noto Sans KR;
  font-size: 26px;
  font-weight: 700;
  border: none;
  margin-top: 20px;
`;
const SubMenuWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
const SubMenu = styled.label`
  margin-top: 38px;
  height: 29px;
  font-family: Noto Sans KR;
  font-size: 20px;
  font-weight: 700;
  color: white;
`;
const Verline = styled.div`
  border-left: 2px solid #9f9f9f;
  height: 21px;
  margin-left: 33px;
  margin-right: 33px;
`;
const KakaoLogin = styled.button`
  width: 540px;
  height: 76px;
  border-radius: 38px;
  border: 2px 0px 0px 0px;
  border: 2px solid #fae100;
  background: none;
  color: #ffe100;
  font-family: Noto Sans KR;
  font-size: 26px;
  font-weight: 700;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  padding-left: 128px;
  padding-right: 128px;
  margin-top: 58px;
`;
const KakaoLogo = styled.img`
  width: 32.45px;
  height: 29.97px;
`;

export default function statePractice5() {
  return (
    <>
      <Wrapper style={{ backgroundImage: `url("02-5/background.png")` }}>
        <LogoWrapper>
          <Logo src="/02-5/Group.png" />
          <LogoLabel>잇츠로드</LogoLabel>
        </LogoWrapper>
        <InputContainer>
          <InputWrapper>
            <Input />
            <DeleteLogo src="/02-5/delete.png" />
          </InputWrapper>
          <ErrorMessage></ErrorMessage>
          <InputWrapper>
            <Input type="password" />
            <DeleteLogo src="/02-5/delete.png" />
          </InputWrapper>
          <ErrorMessage></ErrorMessage>
        </InputContainer>
        <LoginButton>로그인</LoginButton>
        <SubMenuWrapper>
          <SubMenu>이메일 찾기</SubMenu>
          <Verline></Verline>
          <SubMenu>비밀번호 찾기</SubMenu>
          <Verline></Verline>
          <SubMenu>회원가입</SubMenu>
        </SubMenuWrapper>
        <KakaoLogin>
          <KakaoLogo src="02-5/kakaoLogo.png" />
          카카오톡으로 로그인
        </KakaoLogin>
      </Wrapper>
    </>
  );
}
