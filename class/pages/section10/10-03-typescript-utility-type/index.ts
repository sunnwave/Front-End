export interface IProfile {
  name: string;
  age: number;
  school: string;
  hobby?: string;
}

//1. Partial 타입
type aaa = Partial<IProfile>; //모든 property가 필수 입력이 아닌 property로 됨
// type aaa = {
//   name?: string | undefined;
//   age?: number | undefined;
//   school?: string | undefined;
//   hobby?: string | undefined;
// }

//2. Required 타입
type bbb = Required<IProfile>; //모든 property가 필수 입력
// type bbb = {
//   name: string;
//   age: number;
//   school: string;
//   hobby: string;
// }

//3. Pick 타입
type ccc = Pick<IProfile, "name" | "age">;
// type ccc = {
//   name: string;
//   age: number;
// }

//4. Omit 타입
type ddd = Omit<IProfile, "school">;
// type ddd = {
//   name: string;
//   age: number;
//   hobby?: string | undefined;
// }

//5. Record 타입
type eee = "철수" | "영희" | "훈이"; //Union 타입
let child: eee = "영희"; //철수, 영희 , 훈이만 가능
let child2: string = "영희"; // 철수, 영희, 훈이, 사과, 바나나... 등 다 가능

type fff = Record<eee, IProfile>;
// type fff = {
//   철수: IProfile;
//   영희: IProfile;
//   훈이: IProfile;
// }

//6. 객체의 key들로 Union 타입 만들기
type ggg = keyof IProfile; // "name"| "age"| "school" |"hobby"
let myprofile: ggg = "name";

//7. type vs interface 차이 => interface는 선언 병합 가능, type은 불가능
export interface IProfile {
  candy: number; //선언병합으로 추가됨
}

//8. 배운 것 응용
let profile: Partial<IProfile> = {
  candy: 10,
};
