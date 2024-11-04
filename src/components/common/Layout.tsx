import { ReactNode } from "react";
import styled from "styled-components";

interface ILayout {
  children: ReactNode;
  center?: boolean;
}

const Layout = ({ children, center }: ILayout) => {
  return <LayoutContainer center={center}>{children}</LayoutContainer>;
};

export default Layout;

const LayoutContainer = styled.main<{ center?: boolean }>`
  width: 100vw;
  min-height: 100vh;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: ${({ center }) => (center ? "center" : "")};
  justify-content: ${({ center }) => (center ? "center" : "")};
  gap: 1rem;

  padding-bottom: 5rem;
`;
