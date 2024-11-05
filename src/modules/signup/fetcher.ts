import { Post } from "../../api";
import { setTokenFromLocalStorage } from "../../utils/localStorage";

interface ISignupUserReq {
  email: string;
  password: string;
}

export const signupUser = async (payload: ISignupUserReq) => {
  const res = await Post<{ message: string; token: string }>({
    path: "users/create",
    body: payload,
    noAuth: true,
  }).catch((e) => alert(e));

  if (res && res.token) {
    setTokenFromLocalStorage(res.token);
  }
};
