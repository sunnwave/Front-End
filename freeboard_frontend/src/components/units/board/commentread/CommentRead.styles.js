import styled from "@emotion/styled";

export const CommentWrappper = styled.div`
  width: 1200.5px;
  height: 111px;
  border-bottom: 1px solid #bdbdbd;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 20px;
`;
export const ProfileWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;
export const ProfileImg = styled.img`
  width: 48px;
  height: 48px;
  margin-right: 12.5px;
`;
export const ProfileInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
`;
export const NameStarWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
export const UserName = styled.label`
  font-family: Noto Sans CJK KR;
  font-size: 16px;
  font-weight: 500;
  line-height: 23.68px;
  text-align: left;
  margin-right: 16px;
`;
export const StarWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 120px;
  height: 24px;

  .star {
    width: 20px;
    height: 20px;
    color: #bdbdbd;
  }
`;
export const Comment = styled.div`
  font-family: Noto Sans CJK KR;
  font-size: 16px;
  font-weight: 400;
  line-height: 23.68px;
  text-align: left;
  color: #4f4f4f;
  margin-bottom: 20px;
`;
export const IconWrapper = styled.div``;
export const UpdateIcon = styled.img`
  width: 24px;
  height: 24px;
  margin-right: 8px;
  cursor: pointer;
`;
export const DeleteIcon = styled.img`
  width: 24px;
  height: 24px;
  cursor: pointer;
`;
export const Date = styled.label`
  color: #bdbdbd;
  font-family: Noto Sans CJK KR;
  font-size: 12px;
  font-weight: 400;
  line-height: 17.76px;
  text-align: left;
`;
