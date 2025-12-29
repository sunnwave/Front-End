import axios from "axios";
import { useState } from "react";

export default function RestGetPaege(): JSX.Element {
  const [isSubmitting, setIsSubmitting] = useState(false);

  //게시물 등록하기 버튼이라고 가정
  const onClickSync = async (): Promise<void> => {
    setIsSubmitting(true);
    const result = await axios.get("https://koreanjson.com/posts/1");
    console.log(result.data.title); //제대로된 결과
    setIsSubmitting(false);
  };

  return (
    <button onClick={onClickSync} disabled={isSubmitting}>
      REST-API(동기)
    </button>
  );
}
