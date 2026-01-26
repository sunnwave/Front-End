import { useRouter } from "next/router";
import { useEffect } from "react";

const qqq = []; //리렌더되더라도 삭제되지 않음.

export default function imagePreloeadPage(): JSX.Element {
  const router = useRouter();

  useEffect(() => {
    const img = new Image();
    img.src =
      "https://upload.wikimedia.org/wikipedia/commons/a/a6/%22_Stay_on_the_Job%22_Ralley_at_K-25_by_J.A._Jones_Construction_Co._1944_Oak_Ridge_%2824798675620%29.jpg";
    img.onload = () => {
      qqq.push(img);
    };
  }, []);

  const onClickMove = (): void => {
    void router.push("/section31/31-09-image-preload-moved");
  };
  return <button onClick={onClickMove}>페이지 이동하기 </button>;
}
