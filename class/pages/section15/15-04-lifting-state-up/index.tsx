import { useState } from "react";
import Child1 from "../../../src/commons/units/15-lifting-state-up/child1";
import Child2 from "../../../src/commons/units/15-lifting-state-up/child2";

export default function CounterLEtDocumentPage(): JSX.Element {
  const [count, setCount] = useState(0);

  const onClickCountUp = (): void => {
    setCount((prev) => prev + 1);
  };

  return (
    <div>
      <Child1 count={count} setCount={setCount} />
      <div>======================================</div>
      <Child2 count={count} onClickCountUp={onClickCountUp} />
    </div>
  );
}
