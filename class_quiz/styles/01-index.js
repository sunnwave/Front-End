import styled from "@emotion/styled";

export const Body = styled.div`
  width: 640px;
  height: 1064px;
  position: absolute;
  top: 200px;
  left: 200px;
  border: 1px solid gray;
  padding: 50px;
`;
export const SearchWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;
export const SearchIcon = styled.button`
  width: 23px;
  height: 23px;
  border: none;
  background-color: white;
`;

export const SearchIconImg = styled.img`
  width: 100%;
  height: 100%;
`;

export const ProfileWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
export const ProfileLabel = styled.label`
  font-family: Noto Sans KR;
  font-size: 40px;
  font-weight: 700;
  text-align: center;
`;
export const ProfileImage = styled.img`
  width: 60px;
  height: 60px;
  margin-left: 250px;
`;
export const ProfileName = styled.label`
  font-family: Noto Sans KR;
  font-size: 24px;
  font-weight: 700;
  text-align: center;
  margin-left: 19px;
`;
export const ProfileButton = styled.button`
  margin-left: 2px;
  border: none;
  background-color: white;
`;

export const MoreInfoIconImg = styled.img``;

export const Hr = styled.hr`
  transform: translateX(-50px);
  width: 640px;
`;
export const MenuWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 40px;
  margin-bottom: 58px;
`;
export const MenuItem = styled.div`
  font-family: Noto Sans KR;
  font-size: 30px;
  font-weight: 700;
  line-height: 43.44px;
  text-align: center;
  color: #cacaca;
`;

export const QuestionContainer = styled.div`
  width: 100%;
  height: 695px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-top: 25px;
  padding-bottom: 54px;
`;
export const QuestionWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const QuestionTitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
export const QuestionNumber = styled.label`
  font-family: Noto Sans KR;
  font-size: 18px;
  font-weight: 400;
  line-height: 26.06px;
  text-align: left;
  color: #adadad;
`;
export const QuestionTitle = styled.label`
  font-family: Noto Sans KR;
  font-size: 24px;
  font-weight: 400;
  line-height: 34.75px;
  text-align: left;
  color: #000000;
  margin-top: 5px;
`;
export const QuestionToggle = styled.button`
  border: none;
  background-color: white;
`;
export const ToggleIconImg = styled.img``;
export const NavContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 12px;
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 96px;
`;
export const NavWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 55px;
  height: 40px;
`;
export const NavIcon = styled.img`
  width: 40px;
  height: 40px;
`;
export const NavLabel = styled.label`
  font-family: Noto Sans KR;
  font-size: 16px;
  font-weight: 400;
  line-height: 23.17px;
  text-align: center;
  color: #adadad;
  width: 82px;
  margin-top: 10px;
`;
