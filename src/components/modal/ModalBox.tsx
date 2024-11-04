import styled from "styled-components";
import { Column } from "../common/FlexBox";

export const ModalBox = styled(Column)`
  width: 25rem;
  min-height: 10rem;
  background-color: #eeeeee;
  color: #222831;
  border-radius: 1rem;
  padding: 1rem;
  gap: 1rem;

  .modal-main {
    width: 100%;

    display: flex;
    flex-direction: column;
    gap: 0.4rem;
  }
`;
