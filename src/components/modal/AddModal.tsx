import { MouseEvent, useState } from "react";

import styled from "styled-components";
import { addTodo } from "../../modules/list/fetcher";
import Button from "../common/Button";
import { ModalBox } from "./ModalBox";

const AddModal = () => {
  const [show, setShow] = useState(false);
  const [title, setTitle] = useState<string | null>(null);
  const [content, setContent] = useState<string | null>(null);

  const handleClose = (e: MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setShow(false);
  };

  const handleOpen = () => {
    setShow(true);
  };

  const handleSubmit = async () => {
    if (!title || !content) return;
    await addTodo({ title, content }).then(() => setShow(false));
  };

  return (
    <>
      <OpenButton onClick={handleOpen}>추가</OpenButton>
      {show && (
        <>
          <Dim onClick={(e) => handleClose(e)} />
          <Container>
            <div className="modal-header">
              <h4>할 일 추가하기</h4>
              <button onClick={handleClose}>닫기</button>
            </div>
            <div className="modal-main">
              <span>제목</span>
              <input
                value={title || ""}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="오늘 할 일은?"
              />
            </div>
            <div className="modal-main">
              <span>내용</span>
              <textarea
                value={content || ""}
                onChange={(e) => setContent(e.target.value)}
                placeholder="세부내용을 적어주세요"
              />
            </div>
            <div className="modal-footer">
              <button onClick={handleSubmit}>저장</button>
            </div>
          </Container>
        </>
      )}
    </>
  );
};

export default AddModal;

const OpenButton = styled(Button)`
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  background-color: var(--main-blue);
  border: none;
  font-size: 1rem;

  position: fixed;
  right: 2rem;
  bottom: 1rem;
`;

const Dim = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);

  display: flex;
  align-items: center;
  justify-content: center;

  position: fixed;
  left: 0;
  top: 0;

  cursor: pointer;
`;

const Container = styled(ModalBox)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
