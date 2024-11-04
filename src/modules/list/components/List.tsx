import styled from "styled-components";
import { Column } from "../../../components/common/FlexBox";
import ListItem from "./ListItem";

const List = () => {
  return (
    <FullHeight>
      <ListItem />
    </FullHeight>
  );
};

export default List;

const FullHeight = styled(Column)`
  min-height: 100vh;
`;
