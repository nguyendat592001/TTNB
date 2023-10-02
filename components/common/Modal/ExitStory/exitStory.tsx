import React, { useState } from "react";
import { Button, Modal } from "antd";
import styles from "./exitstory.module.scss";

const App: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <button className={styles.bo} onClick={showModal}>
        Bỏ
      </button>
      <Modal
        title="Bỏ tin"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
      >
        <div className={styles.content_modal}>
          <p>Bạn có chắc chắn bỏ tin này không?</p>
          <p>Hệ thống sẽ không lưu tin của bạn.</p>
        </div>
        <div className={styles.btn}>
          <button className={`${styles.tieptucchinhsua} `}>
            Tiếp tục chỉnh sửa
          </button>
          <button className={`${styles.bo} `}>Bỏ</button>
        </div>
      </Modal>
    </>
  );
};

export default App;
