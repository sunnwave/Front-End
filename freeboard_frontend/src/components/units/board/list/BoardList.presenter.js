import {
  Body,
  DateInput,
  SearchIcon,
  SearchButton,
  SearchDateWrapper,
  SearchTitle,
  SearchWrapper,
  Table,
  Td,
  Th,
  Tr,
  SearchTitleWrapper,
  RegisterButton,
  RegisterIcon,
  RegisterLabel,
} from "./BoardList.styles";
import moment from "moment";

export default function BoardListUI(props) {
  return (
    <>
      <Body>
        <SearchWrapper>
          <SearchTitleWrapper>
            <SearchIcon src={"/boardsList/ic_search.png"} />
            <SearchTitle placeholder="제목을 검색해주세요" />
          </SearchTitleWrapper>
          <SearchDateWrapper>
            <DateInput placeholder="YYYY.MM.DD" id="fromDate" />
            ~
            <DateInput placeholder="YYYY.MM.DD" id="toDate" />
          </SearchDateWrapper>
          <SearchButton>검색하기</SearchButton>
        </SearchWrapper>
        <Table>
          <tbody>
            <Tr>
              <Th>번호</Th>
              <Th>제목</Th>
              <Th>작성자</Th>
              <Th>날짜</Th>
            </Tr>
            {props.data?.fetchBoards.map((el, index) => (
              <Tr key={el._id}>
                <Td>{index + 1}</Td>
                <Td
                  className="title"
                  onClick={props.onClickBoardToDetail}
                  id={el._id}
                >
                  {el.title}
                </Td>
                <Td>{el.writer}</Td>
                <Td>{moment(el.createdAt).format("YYYY.MM.DD")}</Td>
              </Tr>
            ))}
          </tbody>
        </Table>
        <RegisterButton>
          <RegisterIcon src={"/boardsList/ic_register.png"} />
          <RegisterLabel onClick={props.onClickRegister}>
            게시물 등록하기
          </RegisterLabel>
        </RegisterButton>
      </Body>
    </>
  );
}
