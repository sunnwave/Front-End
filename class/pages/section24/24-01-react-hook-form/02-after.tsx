import { useForm } from "react-hook-form";
import {
  wrapAsync,
  wrapFormAsync,
} from "../../../src/commons/libraries/asyncFunc";

interface IFormData {
  writer: string;
  title: string;
  contents: string;
  boardAddress: {
    addRessDetail: string;
  };
}

export default function GraphqlMutationPage() {
  const { register, handleSubmit } = useForm();

  const onClickSubmit = (data: IFormData): void => {
    console.log(data);
  };

  return (
    <form onSubmit={wrapFormAsync(handleSubmit(onClickSubmit))}>
      작성자: <input type="text" {...register("writer")} />
      제목: <input type="text" {...register("title")} />
      내용: <input type="text" {...register("contents")} />
      주소: <input type="text" {...register("boardAddress.addressDetail")} />
      <button type="submit">GRAPHQL-API 요청하기</button>
    </form>
  );
}

{
  /* 
  
  <button type='reset'></button> 버튼 클릭 시 폼 내용 삭제
<button type='submit'></button> default* 버튼 클릭 시 onSubmit 실행
<button onClick={onclick}></button> 클릭 시에 버튼의 기본 타입은 submit이기 때문에 onclick, onSubmit 둘 다 실행되게 됨
<button type='button' onClick={onclick}></button> 클릭 시 onclick만 실행

*/
}
