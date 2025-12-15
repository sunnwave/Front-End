import Link from "next/link";
import { useRouter } from "next/router";

export default function KakaoMapPage(): JSX.Element {
  const router = useRouter();

  const onClickMove = (): void => {
    void router.push("/section25/25-02-kakao-map-routing-moved");
  };

  return (
    <>
      <button onClick={onClickMove}>페이지 이동하기</button>

      {/* 매 페이지를 새로 다운받으므로 spa를 활용한 라우팅이 아님 */}
      <a href="/section25/25-02-kakao-map-routing-moved">
        a태그 페이지 이동하기
      </a>

      {/* next에서 제공하는 a태그이므로, spa 활용 가능 + <a>를 써서 검색 좋아짐 */}
      <Link href="/section25/25-02-kakao-map-routing-moved">
        <a>Link로 페이지 이동하기</a>
      </Link>
    </>
  );
}
