//1, 함수를 리턴하는 함수
// function aaa() {
//   const apple = 10;

//   return function bbb() {
//     const banana = 20;
//     console.log(banana);
//     console.log(apple);
//   };
// }
// aaa()();//bbb() 실행

// 2. 함수를 리턴하는 함수
// function aaa(apple) {

//   return function (banana) {
//     console.log(banana);
//     console.log(apple);
//   };
// }

// aaa(100)(500)

// 3. 함수를 리턴하는 함수 + 화살표 함수=
// const aaa = (apple) => (banana) => {
//   console.log(banana);
//   console.log(apple);
// };

// aaa(50)(60) //60 50

// 4. 함수를 리턴하는 함수 - 여러개의 인자
// const bbb = (apple) => (banana) => (tomato)=>(orange)=>{
//   console.log(banana);
//   console.log(apple);
//   console.log(tomato);
//   console.log(orange);
// };

// bbb(1)(2)(3)(4) //apple 1 banana 2 tomato 3 orange 4
