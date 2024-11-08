import { getTokenFromLocalStorage } from "../utils/localStorage";

const BASE_URL = import.meta.env.VITE_BASE_URL;

interface IQuery {
  [key: string]: string;
}

interface IGet {
  path: string;
  query?: IQuery;
}

interface IPost {
  path: string;
  body: any;
  query?: IQuery;
  noAuth?: boolean;
}

export const Get = async <T>({ path, query }: IGet): Promise<T> => {
  const token = getTokenFromLocalStorage();
  if (!token) {
    throw new Error("로그인이 필요합니다.");
  }

  const response = await fetch(
    `${BASE_URL}/${path}` + new URLSearchParams(query),
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "*/*",
        Authorization: token || "",
      },
    }
  );

  const res: any = await response.json();

  if (response.ok) {
    return res;
  } else {
    return Promise.reject(res.error);
  }
};

export const Post = async <T>({
  path,
  body,
  query,
  noAuth = false,
}: IPost): Promise<T> => {
  const token = getTokenFromLocalStorage();

  if (!noAuth) {
    if (!token) {
      throw new Error("로그인이 필요합니다.");
    }
  }

  const response = await fetch(
    `${BASE_URL}/${path}` + (new URLSearchParams(query) || ""),
    {
      method: "POST",
      headers: noAuth
        ? {
            "Content-Type": "application/json",
          }
        : {
            "Content-Type": "application/json",
            Authorization: token || "",
          },
      body: JSON.stringify(body),
    }
  );

  if (!response.ok) {
    const e = await response.json();
    throw new Error(e.details);
  }

  return (await response.json()) as T;
};
