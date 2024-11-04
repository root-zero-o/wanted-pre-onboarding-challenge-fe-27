import styled from "styled-components";
import { Column } from "../../../components/common/FlexBox";
import { H4 } from "../../../components/common/Typographies";

const ListItem = () => {
  return (
    <Box>
      <H4>원티드 프리온보딩 세션 듣기</H4>
      <span>19:00 ~ 20:00</span>
      {/* <div>
          <button className={ListStyles.itemBtn}>수정</button>
          <button className={ListStyles.itemBtn}>삭제</button>
        </div> */}
    </Box>
  );
};

export default ListItem;

const Box = styled(Column)`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 0.5rem;

  background-color: #eeeeee;
  padding: 0.8rem 1rem;
  border: none;
  border-radius: 0.25rem;
  color: #222831;

  cursor: pointer;

  &:hover {
    transform: translateY(-5px);
    transition: 0.5 all ease-in-out;
  }

  span {
    font-size: 0.8rem;
    color: #393e46;
  }

  div {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    gap: 0.5rem;
  }
`;
