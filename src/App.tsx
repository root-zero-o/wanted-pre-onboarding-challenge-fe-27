import { Column, Row } from "./components/common/FlexBox";
import { H1, H3 } from "./components/common/Typographies";

import { useState } from "react";
import AddModal from "./components/modal/AddModal";
import Detail from "./modules/list/components/Detail";
import ListItem from "./modules/list/components/ListItem";
import useGetList from "./modules/list/hooks";

function App() {
  const [selected, setSelected] = useState<string | null>(null);
  const { loading, todos, getTodos } = useGetList();

  const handleItem = (id: string) => {
    setSelected(id);
  };

  return (
    <Column gap="2rem" height="100%">
      <Column gap="1rem">
        <H1>Todo List</H1>
        <H3>오늘의 남은 할 일은 0개 입니다</H3>
      </Column>
      <Row gap="1rem" height="100%">
        <Column height="100%" gap="1rem">
          {!loading &&
            todos.length > 0 &&
            todos.map((todo) => {
              return (
                <div key={todo.id} onClick={() => handleItem(todo.id)}>
                  <ListItem todo={todo} />
                </div>
              );
            })}
        </Column>
        <Detail selected={selected} />
      </Row>
      <AddModal refetch={() => getTodos()} />
    </Column>
  );
}

export default App;
