const TOKEN_KEY = "todo_tkn";

export const setLocalStorage = ({
  key,
  value,
}: {
  key: string;
  value: string;
}) => {
  if (typeof window !== "undefined") {
    window.localStorage.setItem(key, value);
  }
};

export const removeLocalStorage = ({ key }: { key: string }) => {
  if (typeof window !== "undefined") {
    window.localStorage.removeItem(key);
  }
};

export const getLocalStorage = ({ key }: { key: string }) => {
  if (typeof window !== "undefined") {
    return window.localStorage.getItem(key);
  }
  return null;
};

export const getTokenFromLocalStorage = (): string | null => {
  return getLocalStorage({ key: TOKEN_KEY });
};

export const setTokenFromLocalStorage = (value: string) => {
  setLocalStorage({ key: TOKEN_KEY, value });
};
