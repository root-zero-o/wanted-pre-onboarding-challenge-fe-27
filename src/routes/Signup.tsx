import { H1, H4, Safe, Warning } from "../components/common/Typographies";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/common/Button";
import Layout from "../components/common/Layout";
import { ModalBox } from "../components/modal/ModalBox";
import { signupUser } from "../modules/signup/fetcher";

const Signup = () => {
  const [email, setEmail] = useState<string | null>(null);
  const [password, setPassword] = useState<string | null>(null);

  const navigate = useNavigate();

  const regex = new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}");
  const isValid = !!email && regex.test(email);

  const handleSubmit = async () => {
    if (!email || !password) return;
    await signupUser({ email, password }, () =>
      navigate("/", { replace: true })
    );
  };

  return (
    <Layout center>
      <H1>회원가입</H1>
      <ModalBox>
        <div className="modal-main">
          <H4>이메일</H4>
          <input
            value={email || ""}
            onChange={(e) => setEmail(e.target.value)}
          />
          {!isValid && !!email && (
            <Warning>이메일 형식에 맞지 않습니다</Warning>
          )}
          {!!isValid && !!email && <Safe>이메일 형식입니다!</Safe>}
        </div>
        <div className="modal-main">
          <H4>비밀번호</H4>
          <input
            value={password || ""}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="8자 이상"
          />
        </div>
        <Button
          disabled={!email || !password || !isValid || password.length < 8}
          onClick={handleSubmit}
        >
          가입하기
        </Button>
      </ModalBox>
    </Layout>
  );
};

export default Signup;
