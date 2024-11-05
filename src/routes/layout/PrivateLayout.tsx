import { Navigate, useOutlet } from "react-router-dom";

import Layout from "../../components/common/Layout";
import { getTokenFromLocalStorage } from "../../utils/localStorage";

const PrivateLayout = () => {
  const token = getTokenFromLocalStorage();
  const outlet = useOutlet();
  if (!token) {
    alert("로그인이 필요합니다.");
    return <Navigate to="/auth" />;
  }

  return <Layout>{outlet}</Layout>;
};

export default PrivateLayout;
