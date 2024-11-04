import { H1, H4 } from "../components/common/Typographies";

import { Link } from "react-router-dom";
import Button from "../components/common/Button";
import Layout from "../components/common/Layout";
import { ModalBox } from "../components/modal/ModalBox";

const Auth = () => {
  return (
    <Layout center>
      <H1>Todos</H1>
      <ModalBox>
        <div className="modal-main">
          <H4>ID</H4>
          <input />
        </div>
        <div className="modal-main">
          <H4>Password</H4>
          <input />
        </div>
        <Button>GO</Button>
      </ModalBox>
      <Link to={"/signup"}>회원가입</Link>
    </Layout>
  );
};

export default Auth;
