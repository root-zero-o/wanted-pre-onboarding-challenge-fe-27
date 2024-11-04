import { MouseEvent, useState } from "react";

import ModalStyles from "./modal.module.css";

const AddModal = () => {
  const [show, setShow] = useState(false);

  const handleClose = (e: MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setShow(false);
  };

  const handleOpen = () => {
    setShow(true);
  };

  return (
    <>
      <button className={ModalStyles.openBtn} onClick={handleOpen}>
        추가
      </button>
      {show && (
        <>
          <div className={ModalStyles.dim} onClick={(e) => handleClose(e)} />
          <div className={ModalStyles.box}>
            <div className={ModalStyles.boxHeader}>
              <h4>할 일 추가하기</h4>
              <button onClick={handleClose}>닫기</button>
            </div>
            <div className={ModalStyles.boxMain}>
              <span>제목</span>
              <input placeholder="오늘 할 일은?" />
            </div>
            <div className={ModalStyles.boxMain}>
              <span>내용</span>
              <textarea placeholder="세부내용을 적어주세요" />
            </div>
            <div className={ModalStyles.boxFooter}>
              <button>저장</button>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default AddModal;
