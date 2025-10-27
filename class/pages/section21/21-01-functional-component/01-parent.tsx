import ChildComponent from "./02-child";

export default function ParentComponent(): JSX.Element {
  return (
    <div>
      <ChildComponent count={10} />
      {ChildComponent({ count: 20 })}
    </div>
  );
}
