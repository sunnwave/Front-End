interface IProps {
  school: string;
  children: JSX.Element;
}

export default function Example(props: IProps): JSX.Element {
  return (
    <div>
      <div>안녕하세요 영희입니다</div>
      <div>{props.school}</div>
      <div>{props.children}</div>
      <div>오늘도 행복한 하루 보내세요~</div>
    </div>
  );
}
