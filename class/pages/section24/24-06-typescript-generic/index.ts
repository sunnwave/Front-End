//1. 문자/숫자/불린(primitive) 타입
const getPrimitive = (
  arg1: string,
  arg2: number,
  arg3: boolean,
): [boolean, number, string] => {
  return [arg3, arg2, arg1];
};

const result = getPrimitive("철수", 123, true);

//2. any 타입 => 그냥 자바스트립트랑 같음
const getAny = (arg1: any, arg2: any, arg3: any): [any, any, any] => {
  console.log(arg1 * 1000); //타입 상관없이 가능
  return [arg3, arg2, arg1];
};

const result = getAny("철수", 123, true);

//2. unknown 타입 =>
const getUnknown = (
  arg1: unknown,
  arg2: unknown,
  arg3: unknown,
): [unknown, unknown, unknown] => {
  if (typeof arg1 === "number") console.log(arg1 * 1000); //타입을 지정하면 가능
  return [arg3, arg2, arg1];
};

const result = getUnknown("철수", 123, true);

//3. generic 타입 =>
function getGeneric<MyType1, MyType2, MyType3>(
  arg1: MyType1,
  arg2: MyType2,
  arg3: MyType3,
): [MyType3, MyType2, MyType1] {
  if (typeof arg1 === "number") console.log(arg1 * 1000); //타입을 지정하면 가능
  return [arg3, arg2, arg1];
}

const result = getGeneric<string, string, number>("철수", 123, true);

//3. generic 타입 =>
function getGeneric2<T, U, V>(arg1: T, arg2: U, arg3: V): [V, U, T] {
  if (typeof arg1 === "number") console.log(arg1 * 1000); //타입을 지정하면 가능
  return [arg3, arg2, arg1];
}

const result = getGeneric2<string, string, number>("철수", 123, true);

//3. generic 타입 =>
const getGeneric3 = <T, U, V>(arg1: T, arg2: U, arg3: V): [V, U, T] => {
  if (typeof arg1 === "number") console.log(arg1 * 1000); //타입을 지정하면 가능
  return [arg3, arg2, arg1];
};

const result = getGeneric2<string, string, number>("철수", 123, true);
