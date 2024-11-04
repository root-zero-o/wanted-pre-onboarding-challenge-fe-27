import { ReactNode } from "react";
import layoutStyles from "./layout.module.css";

interface ILayout {
  children: ReactNode;
}

const Layout = ({ children }: ILayout) => {
  return <main className={layoutStyles.page}>{children}</main>;
};

export default Layout;
