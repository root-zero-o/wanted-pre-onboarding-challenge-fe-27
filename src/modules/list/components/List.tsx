import styled from "styled-components";
import { Column } from "../../../components/common/FlexBox";
import ListItem from "./ListItem";

interface IList {
  onClickItem: (v: string) => void;
}

const List = ({ onClickItem }: IList) => {
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
