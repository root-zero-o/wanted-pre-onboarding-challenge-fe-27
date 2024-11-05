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

  .modal-header {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    button {
      border: none;
      font-size: 0.8rem;
      color: #b7b7b7;
      cursor: pointer;
    }
  }

  .modal-main {
    width: 100%;

    display: flex;
    flex-direction: column;
    gap: 0.4rem;
    span {
      font-size: 0.8rem;
    }
  }

  .modal-footer {
    width: 100%;

    display: flex;
    justify-content: center;

    button {
      width: 3rem;
      height: 2rem;

      border: none;
      background-color: #222831;
      color: #eeeeee;
      border-radius: 0.25rem;

      font-size: 0.8rem;

      cursor: pointer;
    }
  }
`;
