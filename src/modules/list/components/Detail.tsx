import { Column, Row } from "../../../components/common/FlexBox";

import styled from "styled-components";
import Button from "../../../components/common/Button";
import { H4 } from "../../../components/common/Typographies";

interface ISelected {
  selected: string | null;
}

const Detail = ({ selected }: ISelected) => {
  if (!selected) {
    return (
      <Column align="center">
        <H4>할 일을 선택하시면 </H4>
        <H4>수정 및 삭제할 수 있습니다</H4>
      </Column>
    );
  }

  return (
    <Box>
      <H4>✅ 완료된 일정입니다!</H4>
      <TitleInput value="원티드 프리온보딩 세션 듣기" />
      <textarea value="어쩌고 저쩌고" />
      <Row justify="flex-end" gap="0.4rem">
        <Button>수정</Button>
        <Button>삭제</Button>
      </Row>
    </Box>
  );
};

export default Detail;

const Box = styled(Column)`
  width: 100%;
  min-height: 100%;

  padding: 1rem 1.2rem;
  background-color: var(--main-white);
  color: var(--main-grey);
  border-radius: 0.25rem;

  gap: 1rem;
`;

const TitleInput = styled.input`
  font-size: 1.2rem;
  font-weight: 500;
  color: var(--main-grey);
`;
