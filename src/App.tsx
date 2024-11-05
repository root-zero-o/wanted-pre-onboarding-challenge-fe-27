import { Column, Row } from "./components/common/FlexBox";
import { H1, H3 } from "./components/common/Typographies";

import { useState } from "react";
import AddModal from "./components/modal/AddModal";
import Detail from "./modules/list/components/Detail";
import List from "./modules/list/components/List";

function App() {
  const [selected, setSelected] = useState<string | null>(null);

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
        <List onClickItem={handleItem} />
        <Detail selected={selected} />
      </Row>
      <AddModal />
    </Column>
  );
}

export default App;
