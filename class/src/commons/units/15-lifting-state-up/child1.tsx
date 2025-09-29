export default function Child1(props: any): JSX.Element {
  //let count=0 //let은 리액트 전용 html에서 변경을 감지하지 못하므로 state를 사용해야 한다

  function onClickCountUp(): void {
    props.setCount((prev: number) => prev + 1);
  }

  return (
    <div>
      <div id="qqq">자식1의 카운트{props.count}</div>
      <button onClick={onClickCountUp}>카운트 올리기</button>
    </div>
  );
}
