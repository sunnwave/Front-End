interface IButtonProps {
  type?: "submit" | "reset" | "submit";
  title: string;
  isActive: boolean;
}

export default function Button01(props: IButtonProps): JSX.Element {
  return (
    <button
      type={props.type ?? "submit"}
      style={{ backgroundColor: props.isActive ? "yellow" : "" }}
    >
      {props.title}
    </button>
  );
}
