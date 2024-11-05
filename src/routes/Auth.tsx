import { Link, useNavigate } from "react-router-dom";
import { H1, H4 } from "../components/common/Typographies";

import { useState } from "react";
import Button from "../components/common/Button";
import Layout from "../components/common/Layout";
import { ModalBox } from "../components/modal/ModalBox";
import { login } from "../modules/auth/fetcher";

const Auth = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState<string | null>(null);
  const [password, setPassword] = useState<string | null>(null);

  const handleLogin = async () => {
    if (!email || !password) return;
    await login({ email, password }, () => navigate("/", { replace: true }));
  };

  return (
    <Layout center>
      <H1>Todos</H1>
      <ModalBox>
        <div className="modal-main">
          <H4>ID</H4>
          <input
            value={email || ""}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="modal-main">
          <H4>Password</H4>
          <input
            value={password || ""}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <Button disabled={!email || !password} onClick={handleLogin}>
          GO
        </Button>
      </ModalBox>
      <Link to={"/signup"}>회원가입</Link>
    </Layout>
  );
};

export default Auth;
