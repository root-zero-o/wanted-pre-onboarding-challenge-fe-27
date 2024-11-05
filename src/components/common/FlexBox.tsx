import styled from "styled-components";

interface FlexBoxProps {
  height?: string;
  gap?: string;

  justify?: string;
  align?: string;
}

export const Column = styled.div<FlexBoxProps>`
  width: 100%;
  height: ${({ height }) => height};

  display: flex;
  flex-direction: column;
  gap: ${({ gap }) => gap};
  justify-content: ${({ justify }) => justify};
  align-items: ${({ align }) => align};
`;

export const Row = styled.div<FlexBoxProps>`
  width: 100%;
  height: ${({ height }) => height};

  display: flex;
  gap: ${({ gap }) => gap};
  justify-content: ${({ justify }) => justify};
  align-items: ${({ align }) => align};
`;
