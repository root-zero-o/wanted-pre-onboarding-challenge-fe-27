import { Post } from "../../api";
import { setTokenFromLocalStorage } from "../../utils/localStorage";

interface ISignupUserReq {
  email: string;
  password: string;
}

/** POST : 회원가입 */
export const signupUser = async (
  payload: ISignupUserReq,
  onSuccess: () => void
) => {
  const res = await Post<{ message: string; token: string }>({
    path: "users/create",
    body: payload,
    noAuth: true,
  }).catch((e) => alert(e));

  if (res && res.token) {
    setTokenFromLocalStorage(res.token);
    alert(res.message);
    onSuccess();
  }
};
