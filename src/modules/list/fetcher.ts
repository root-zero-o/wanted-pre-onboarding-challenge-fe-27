import { Get, Post } from "../../api";

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

interface IAddTodoReq {
  title: string;
  content: string;
}

export const getTodoList = async () => {
  const res = await Get<ITodoList>({
    path: "todos",
  }).catch((e) => alert(e));

  return res?.data || [];
};

/** POST : Todo 추가 */
export const addTodo = async (payload: IAddTodoReq) => {
  const res = await Post<{ data: ITodoItem }>({
    path: "todos",
    body: payload,
  }).catch((e) => alert(e));

  if (res) {
    alert("할 일이 등록되었습니다");
  }
};
