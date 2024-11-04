import Layout from "../../components/layout/Layout";
import LoginStyles from "./login.module.css";

const Login = () => {
  return (
    <Layout>
      <div className={LoginStyles.center}>
        <h1>Todos</h1>
        <div className={LoginStyles.loginBox}>
          <div>
            <span>ID</span>
            <input />
          </div>
          <div>
            <span>Password</span>
            <input />
          </div>
          <button>GO</button>
        </div>
        <a>회원가입</a>
      </div>
    </Layout>
  );
};

export default Login;
