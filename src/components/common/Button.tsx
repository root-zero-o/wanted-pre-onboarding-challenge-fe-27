import { ReactNode } from "react";
import styled from "styled-components";

interface IButton {
  children: ReactNode;
}

const Button = ({ children }: IButton) => {
  return <StyledButton>{children}</StyledButton>;
};

export default Button;

const StyledButton = styled.button`
  font-size: 1rem;

  height: 2rem;
  background-color: #222831;
  color: #eeeeee;
`;
