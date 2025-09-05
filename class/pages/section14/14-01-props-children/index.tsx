import Example from "../../../src/components/units/14-props-children-example";

export default function PropsChildrenPage(): JSX.Element {
  return (
    <div>
      <div>=================props, children=================</div>
      <Example school="다람쥐초등학교">
        <div>
          <input type="text" />
          <div>철수입니다</div>
        </div>
      </Example>
      <div>===============================================</div>
    </div>
  );
}
