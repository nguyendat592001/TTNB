import React, { useState } from "react";
import { Modal } from "antd";
import styles from "./Modal.module.scss";
import { Image } from "antd";

const SetEmail: React.FC = () => {
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
      <div onClick={showModal}>Chỉnh sửa</div>
      <Modal
        title="Chỉnh sửa email"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
      >
        <span>
          Email hiện tại : <p>Some ...</p>
        </span>

        <div>
          <Image src="/img/nv_add-circle_blue.svg" />
          Thêm email khác
        </div>
      </Modal>
    </>
  );
};

export default SetEmail;
