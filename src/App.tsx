import Layout from "./components/layout/Layout";
import List from "./components/list/List";
import AddModal from "./components/modal/AddModal";

function App() {
  return (
    <Layout>
      <h1>Todo List</h1>
      <h3>오늘의 남은 할 일은 0개 입니다</h3>
      <List />
      <AddModal />
    </Layout>
  );
}

export default App;
