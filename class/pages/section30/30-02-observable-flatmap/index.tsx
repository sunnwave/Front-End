import { from } from "zen-observable";

export default function ObservableFlatmapPage(): JSX.Element {
  const onClickButton = (): void => {
    from(["1", "2", "3", "4", "5"]) //fromPromise 연속적인 쿼리 처리
      .flatMap((el) => from([`${el} 결과에 qqq 적용`, `${el} 결과에 www 적용`]))
      .subscribe((el) => console.log(el));
  };

  return <button onClick={onClickButton}>ObservableFlatmapPage</button>;
}
