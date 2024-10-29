import styled from "@emotion/styled";

export const Input = styled.input``;

export const Button = styled.button`
  background-color: ${(props) => (props.isActive ? "blue" : "black")};
  color: white;
`;
