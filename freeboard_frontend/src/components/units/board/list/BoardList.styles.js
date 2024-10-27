import styled from "@emotion/styled";

export const Body = styled.div`
  width: 1920px;
  padding-top: 50px;
  padding-left: 360px;
  padding-right: 360px;
  display: flex;
  flex-direction: column;
`;
export const SearchWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 40px;
`;

export const SearchTitleWrapper = styled.div`
  width: 776px;
  height: 52px;
  border-radius: 10px;
  border: none;
  background: #f2f2f2;
  padding: 14px 16px;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-right: 42px;
`;

export const SearchTitle = styled.input`
  border: none;
  background: #f2f2f2;
  color: black;
  font-family: Noto Sans CJK KR;
  font-size: 16px;
  font-weight: 400;
  line-height: 23.68px;
  text-align: left;
`;
export const SearchIcon = styled.img`
  margin-right: 8px;
`;
export const SearchDateWrapper = styled.div`
  width: Hug (244px) px;
  height: Hug (52px) px;
  padding: 14px 16px 14px 16px;
  gap: 8px;
  border: 1px solid #bdbdbd;
  margin-right: 44px;
`;
export const DateInput = styled.input`
  width: 93px;
  height: 24px;
  gap: 0px;
  opacity: 0px;
  font-family: Noto Sans CJK KR;
  font-size: 16px;
  font-weight: 400;
  line-height: 23.68px;
  text-align: left;
  border: none;
`;

export const SearchButton = styled.button`
  width: Hug (94px) px;
  height: Hug (52px) px;
  padding: 14px 16px 14px 16px;
  gap: 10px;
  border-radius: 10px;
  background: #000000;
  color: white;
`;

export const Table = styled.table`
  width: 1200px;
  margin-bottom: 40px;
  border-top: 1px solid black;
  border-bottom: 1px solid black;
  text-align: center;
`;
export const Tr = styled.tr``;
export const Th = styled.th`
  padding: 12px 63px 12px 40px;
`;
export const Td = styled.td`
  border-top: 1px solid #bdbdbd;
  padding: 12px 63px 12px 40px;
  &.title {
    cursor: pointer;
  }
`;

export const RegisterButton = styled.button`
  width: 171px;
  height: 52px;
  padding: 14px 16px 14px 16px;
  gap: 8px;
  border-radius: 10px;
  border: 1px solid #f2f2f2;
  background: #ffffff;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: auto;
  cursor: pointer;
  :hover {
    background-color: #f5f2fc;
  }
`;
export const RegisterIcon = styled.img`
  margin-right: 8px;
`;
export const RegisterLabel = styled.label``;
