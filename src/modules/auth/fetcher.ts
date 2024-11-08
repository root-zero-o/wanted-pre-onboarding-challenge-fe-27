import { Post } from "../../api";
import { setTokenFromLocalStorage } from "../../utils/localStorage";

interface ILoginReq {
  email: string;
  password: string;
}

interface ILoginRes {
  message: string;
  token: string;
}

/** POST : 로그인 */
export const login = async (payload: ILoginReq, onSuccess: () => void) => {
  const res = await Post<ILoginRes>({
    path: "users/login",
    body: payload,
    noAuth: true,
  }).catch((e) => alert(e));

  if (res && res.token) {
    setTokenFromLocalStorage(res.token);
    alert(res.message);
    onSuccess();
  }
};
