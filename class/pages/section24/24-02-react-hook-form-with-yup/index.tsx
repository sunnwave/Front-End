import { useForm } from "react-hook-form";
import { wrapFormAsync } from "../../../src/commons/libraries/asyncFunc";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "./02-validation";

interface IFormData {
  writer: string;
  title: string;
  contents: string;
  // boardAddress: {
  //   addRessDetail: string;
  // };
  email: string;
  password: string;
  phone: string;
}

export default function GraphqlMutationPage() {
  const { register, handleSubmit, formState } = useForm<IFormData>({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const onClickSubmit = (data: IFormData): void => {
    console.log(data);
  };

  return (
    <form onSubmit={wrapFormAsync(handleSubmit(onClickSubmit))}>
      작성자: <input type="text" {...register("writer")} />
      <div style={{ color: "red" }}>{formState.errors.writer?.message}</div>
      제목: <input type="text" {...register("title")} />
      <div style={{ color: "red" }}>{formState.errors.title?.message}</div>
      내용: <input type="text" {...register("contents")} />
      <div style={{ color: "red" }}>{formState.errors.contents?.message}</div>
      {/* 주소: <input type="text" {...register("boardAddress.addressDetail")} /> */}
      이메일: <input type="text" {...register("email")} />
      <div style={{ color: "red" }}>{formState.errors.email?.message}</div>
      비밀번호: <input type="text" {...register("password")} />
      <div style={{ color: "red" }}>{formState.errors.password?.message}</div>
      연락처: <input type="text" {...register("phone")} />
      <div style={{ color: "red" }}>{formState.errors.phone?.message}</div>
      <button
        type="submit"
        style={{ backgroundColor: formState.isValid ? "yellow" : "" }}
      >
        GRAPHQL-API 요청하기
      </button>
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
