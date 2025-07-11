// import { stringify } from 'querystring'

export default function TypescriptPage() {
  //타입 추론
  let aaa = "안녕하세요";
  console.log(aaa);
  // aaa=3 =>오류 발생

  //타입 명시
  let bbb: string = "반갑습니다";
  console.log(bbb);
  // bbb=10 =>오류 발생

  //타입 명시가 필요한 상황
  let ccc: number | string = 1000;
  ccc = "1000원";
  console.log(ccc);

  //숫자타입
  let ddd: number = 10;
  // ddd="철수" =>오류 발생
  console.log(ddd);

  //불린타입
  let eee: boolean = true;
  eee = false;
  console.log(eee);
  // eee="false" =>오류 발생

  //배열 타입
  // let fff:number []=[1,2,3,4,5,"안녕하세요"] =>오류 발생
  // let ggg:string []=["철수", "영희", "훈이", 10] =>오류 발생
  let hhh: (string | number)[] = ["철수", "영희", "훈이", 10]; //타입을 추론해서 어떤 타입을 사용하는지 알아보기
  console.log(hhh);

  //객체타입
  interface IProfile {
    name: string;
    age: number | string;
    school: string;
    hobby?: string;
  }

  const profile: IProfile = {
    name: "철수",
    age: 8,
    school: "다람쥐 초등학교",
  };
  profile.name = "훈이";
  profile.age = "8살";
  profile.hobby = "수영";

  //함수 타입
  function add(num1: number, num2: number, unit: string): string {
    return num1 + num2 + unit;
  }

  const result = add(1000, 2000, "원"); //결과의 리턴 타입도 예측 가능
  console.log(result);

  const add2 = (num1: number, num2: number, unit: string): string => {
    return num1 + num2 + unit;
  };

  console.log(add2(3000, 4000, "원")); //화살표 함수로도 타입을 명시할 수 있음

  const result2 = add(1000, 2000, "원"); //결과의 리턴 타입도 예측 가능

  console.log(result2);

  //any 타입 : 기존 자바스크립트와 같음
  let qqq: any = "철수";
  qqq = 123;
  qqq = true;
  console.log(qqq);
  return <></>;
}
