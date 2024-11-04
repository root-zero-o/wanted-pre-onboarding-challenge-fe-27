import { H1, H4 } from "../components/common/Typographies";

import Button from "../components/common/Button";
import Layout from "../components/common/Layout";
import { ModalBox } from "../components/modal/ModalBox";

const Signup = () => {
  return (
    <Layout center>
      <H1>회원가입</H1>
      <ModalBox>
        <div className="modal-main">
          <H4>이메일</H4>
          <input />
        </div>
        <div className="modal-main">
          <H4>비밀번호</H4>
          <input />
        </div>
        <Button>제출하기</Button>
      </ModalBox>
    </Layout>
  );
};

export default Signup;
