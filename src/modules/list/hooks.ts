import { useEffect, useState } from "react";

import { Get } from "../../api";
import { ITodoList } from "./fetcher";

const useGetList = () => {
  const [loading, setLoading] = useState(false);
  const [todos, setTodos] = useState<ITodoList["data"] | never[]>([]);

  const getTodos = async () => {
    setLoading(true);

    const res = await Get<ITodoList>({
      path: "todos",
    }).catch((e) => alert(e));

    setTodos(res?.data || []);
    setLoading(false);
  };

  useEffect(() => {
    getTodos();
  }, []);

  return { loading, todos, getTodos };
};

export default useGetList;
