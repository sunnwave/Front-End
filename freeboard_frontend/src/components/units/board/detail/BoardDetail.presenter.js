import {
  Wrapper,
  BoardWrapper,
  BottomNavWrapper,
  ContentsWrapper,
  Count,
  Date,
  DetailContents,
  Header,
  HeaderIcon,
  IconWrapper,
  Image,
  LikeIcon,
  LikesContainer,
  LikeWrapper,
  LocationPop,
  NavButton,
  ProfileImg,
  TextWrapper,
  Title,
  UserName,
  Youtube,
} from "@/styles/detailBoard";
import moment from "moment";

export default function BoardDetailUI(props) {
  return (
    <>
      <Wrapper>
        <BoardWrapper>
          <Header>
            <ProfileImg src={"/detailBoard/profile.png"} />
            <TextWrapper>
              <UserName>{props.data?.fetchBoard?.writer}</UserName>
              <Date>
                Date:
                {moment(props.data?.fetchBoard?.createdAt).format("YYYY.MM.DD")}
              </Date>
            </TextWrapper>
            <IconWrapper>
              <HeaderIcon src={"/detailBoard/ic_link.png"} />
              <HeaderIcon src={"/detailBoard/ic_location.png"} />
              <LocationPop>
                서울특별시 영등포구 양산로 200 (영등포동5가, 영등포시장역)
                영등포 타임스퀘어 2층
              </LocationPop>
            </IconWrapper>
          </Header>
          <ContentsWrapper>
            <Title>{props.data?.fetchBoard?.title}</Title>
            <Image src={"/detailBoard/image.png"} />
            <DetailContents>{props.data?.fetchBoard?.contents}</DetailContents>
            <Youtube
              src="https://www.youtube.com/embed/yQ3yNzJVXoc?si=oOO5ZeR-jyDMH0h5"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></Youtube>
            <LikesContainer>
              <LikeWrapper>
                <LikeIcon src={"/detailBoard/ic_thumb_up.png"} />
                <Count style={{ color: "#FFD600" }}>
                  {props.data?.fetchBoard?.likeCount}
                </Count>
              </LikeWrapper>
              <LikeWrapper>
                <LikeIcon src={"/detailBoard/ic_thumb_down.png"} />
                <Count style={{ color: "#828282" }}>
                  {props.data?.fetchBoard?.dislikeCount}
                </Count>
              </LikeWrapper>
            </LikesContainer>
          </ContentsWrapper>
        </BoardWrapper>
        <BottomNavWrapper>
          <NavButton>목록으로</NavButton>
          <NavButton>수정하기</NavButton>
          <NavButton>삭제하기</NavButton>
        </BottomNavWrapper>
      </Wrapper>
    </>
  );
}
