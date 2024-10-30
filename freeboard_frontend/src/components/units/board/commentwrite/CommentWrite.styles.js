import styled from "@emotion/styled";

export const CommentWriteWrapper = styled.div`
  margin-bottom: 20px;
`;

export const CommentInfoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const WriterInput = styled.input`
  width: 180px;
  height: 52px;
  border: 1px solid #bdbdbd;
  margin-right: 24px;
  color: #828282;
  padding: 14px 20px;
  font-family: Noto Sans CJK KR;
  font-size: 16px;
  font-weight: 500;
  line-height: 23.68px;
  text-align: left;
`;

export const PasswordInput = styled.input`
  width: 180px;
  height: 52px;
  border: 1px solid #bdbdbd;
  margin-right: 24px;
  color: #828282;
  font-family: Noto Sans CJK KR;
  font-size: 16px;
  font-weight: 500;
  line-height: 23.68px;
  text-align: left;
  padding: 14px 20px;
`;

export const StarWrapper = styled.div`
  .star {
    width: 20px;
    height: 20px;
    color: #bdbdbd;
    cursor: pointer;
    :hover {
      color: #ffd600;
    }
  }
`;

export const CommentInputWrapper = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 1200px;
  height: 161px;
  border: 1px solid #bdbdbd;
  box-sizing: content-box;
`;

export const CommentInput = styled.textarea`
  width: 1200px;
  height: 150px;
  background: #ffffff;
  border: none;
  color: #828282;
  font-family: Noto Sans CJK KR;
  font-size: 16px;
  font-weight: 500;
  border-bottom: 1px solid #f2f2f2;
  resize: none;
  padding: 20px;
`;
export const CommentFooterWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
export const CommentCounter = styled.div`
  width: 1109px;
  height: 52px;
  color: #828282;
  padding: 14px 19px;
  font-family: Noto Sans CJK KR;
  font-size: 16px;
  font-weight: 500;
  line-height: 23.68px;
  text-align: left;
`;

export const CommentRegisterButton = styled.button`
  width: 91px;
  height: 52px;
  padding: 14px 16px 14px 16px;
  gap: 10px;
  opacity: 0px;
  background: #000000;
  color: white;
  border: none;
`;
