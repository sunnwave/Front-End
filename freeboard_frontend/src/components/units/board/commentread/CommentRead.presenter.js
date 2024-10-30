import * as C from "./CommentRead.styles";
import { VscStarFull } from "react-icons/vsc";
import moment from "moment";

export default function CommentReadUI(props) {
  return (
    <div>
      {props.data?.fetchBoardComments.map((el) => (
        <C.CommentWrappper key={el._id}>
          <C.ProfileWrapper>
            <C.ProfileImg src="/commentRead/profile.png" />
            <C.ProfileInfoWrapper>
              <C.NameStarWrapper>
                <C.UserName>{el.writer}</C.UserName>
                <C.StarWrapper>
                  <VscStarFull className="star" />
                  <VscStarFull className="star" />
                  <VscStarFull className="star" />
                  <VscStarFull className="star" />
                  <VscStarFull className="star" />
                </C.StarWrapper>
              </C.NameStarWrapper>
              <C.Comment>{el.contents}</C.Comment>
              <C.Date>{moment(el.createdAt).format("YYYY.MM.DD")}</C.Date>
            </C.ProfileInfoWrapper>
          </C.ProfileWrapper>
          <C.IconWrapper>
            <C.UpdateIcon
              src="/commentRead/ic_update.png"
              onClick={props.onClickUpdate}
            />
            <C.DeleteIcon src="/commentRead/ic_delete.png" />
          </C.IconWrapper>
        </C.CommentWrappper>
      ))}
    </div>
  );
}
