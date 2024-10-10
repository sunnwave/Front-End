import {
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
  Wrapper,
  Youtube,
} from "../../../styles/detailBoard";

export default function DetailPage() {
  console.log(process.env);
  return (
    <>
      <Wrapper>
        <BoardWrapper>
          <Header>
            <ProfileImg src={"/detailBoard/profile.png"} />
            <TextWrapper>
              <UserName>노원두</UserName>
              <Date>Date:2024.07.12</Date>
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
            <Title>게시글 제목입니다.</Title>
            <Image src={"/detailBoard/image.png"} />
            <DetailContents>
              가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하
            </DetailContents>
            <Youtube
              src="https://www.youtube.com/embed/y5rVyD6UKvo?si=8hnoIRQ1h8otvqKN"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></Youtube>
            <LikesContainer>
              <LikeWrapper>
                <LikeIcon src={"/detailBoard/ic_thumb_up.png"} />
                <Count style={{ color: "#FFD600" }}>1920</Count>
              </LikeWrapper>
              <LikeWrapper>
                <LikeIcon src={"/detailBoard/ic_thumb_down.png"} />
                <Count style={{ color: "#828282" }}>1920</Count>
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
