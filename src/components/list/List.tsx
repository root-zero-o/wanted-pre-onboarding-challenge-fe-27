import ListStyles from "./list.module.css";

const List = () => {
  return (
    <div className={ListStyles.container}>
      <button className={ListStyles.item}>
        <h4>원티드 프리온보딩 세션 듣기</h4>
        <span>19:00 ~ 20:00</span>
        <div>
          <button className={ListStyles.itemBtn}>수정</button>
          <button className={ListStyles.itemBtn}>삭제</button>
        </div>
      </button>
    </div>
  );
};

export default List;
