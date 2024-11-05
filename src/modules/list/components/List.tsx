import styled from "styled-components";
import { Column } from "../../../components/common/FlexBox";
import { getTodoList } from "../fetcher";
import ListItem from "./ListItem";

interface IList {
  onClickItem: (v: string) => void;
}

const List = ({ onClickItem }: IList) => {
  const res = getTodoList().then((res) => console.log(res));

  return (
    <FullHeight>
      <div onClick={() => onClickItem("1")}>
        <ListItem />
      </div>
    </FullHeight>
  );
};

export default List;

const FullHeight = styled(Column)`
  height: 100%;
`;
