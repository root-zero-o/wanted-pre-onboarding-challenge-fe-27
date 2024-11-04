import { H1, H3 } from "./components/common/Typographies";

import Layout from "./components/common/Layout";
import AddModal from "./components/modal/AddModal";
import List from "./modules/list/components/List";

function App() {
  return (
    <Layout>
      <H1>Todo List</H1>
      <H3>오늘의 남은 할 일은 0개 입니다</H3>
      <List />
      <AddModal />
    </Layout>
  );
}

export default App;
