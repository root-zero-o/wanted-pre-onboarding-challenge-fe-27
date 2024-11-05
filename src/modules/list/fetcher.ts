import { Get } from "../../api";

interface ITodoList {
  data: ITodoItem[];
}

interface ITodoItem {
  title: string;
  content: string;
  id: string;
  createdAt: string;
  updatedAt: string;
}

export const getTodoList = async () => {
  const res = await Get<ITodoList>({
    path: "todos",
  }).catch((e) => alert(e));

  return res?.data || [];
};
