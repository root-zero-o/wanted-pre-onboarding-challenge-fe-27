import { ReactNode } from "react";
import styled from "styled-components";

interface IButton {
  children: ReactNode;

  disabled?: boolean;
  onClick: () => void;
}

const Button = ({ children, disabled, onClick }: IButton) => {
  return (
    <StyledButton onClick={onClick} disabled={disabled}>
      {children}
    </StyledButton>
  );
};

export default Button;

const StyledButton = styled.button`
  font-size: 1rem;

  height: 2rem;
  background-color: var(--main-grey);
  color: var(--main-white);

  transition: 0.2s all ease-in-out;

  &:disabled {
    background-color: var(--grey-100);
    color: var(--grey-700);
    cursor: not-allowed;
  }
`;
