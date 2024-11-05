import { Navigate, useOutlet } from "react-router-dom";

import Layout from "../../components/common/Layout";
import { getTokenFromLocalStorage } from "../../utils/localStorage";

const AuthLayout = () => {
  const token = getTokenFromLocalStorage();
  const outlet = useOutlet();
  if (!!token) {
    alert("로그인 상태에서는 접근할 수 없습니다");
    return <Navigate to="/" />;
  }

  return <Layout>{outlet}</Layout>;
};

export default AuthLayout;
