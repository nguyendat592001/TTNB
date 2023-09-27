import { Button, Modal } from "antd";
import { useState } from "react";
import styles from "./Article_management.module.scss";
interface ManagementProps {
  setCheckbutton: React.Dispatch<React.SetStateAction<boolean>>;
}
const Management: React.FC<ManagementProps> = ({ setCheckbutton }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalcheckbutton, setModalCheckbutton] = useState(false);

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
      <button
        onClick={showModal}
        disabled={modalcheckbutton}
        className={`${styles.ok} ${styles.btn} ${
          modalcheckbutton ? styles.checkbtn : ""
        }`}
      >
        Tiếp
      </button>

      <Modal
        title="Quản lý bài viết"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
      >
        <label htmlFor="anbaiviet" className={styles.anbaiviet}>
          <div className={styles.label}>
            <div>Ẩn bài viết</div>
            <p>Ẩn bài viết khỏi dòng thời gian của bạn</p>
          </div>
          <input type="radio" id="anbaiviet" name="radio" />
        </label>
        <label htmlFor="go" className={styles.go}>
          <div className={styles.label}>
            <div>Gỡ thẻ</div>
            <p>Xóa chính mình khỏi bài viết bạn được gắn thẻ </p>
          </div>
          <input type="radio" id="go" name="radio" />
        </label>
        <label htmlFor="delbaiviet" className={styles.delbaiviet}>
          <div className={styles.label}>
            <div>Xóa bài viết</div>
            <p>Xóa bìa viết bạn đã tạo</p>
          </div>
          <input type="radio" id="delbaiviet" name="radio" />
        </label>
        <div className={styles.okmoda}>
          <button onClick={handleOk} className={`${styles.okmodal}  `}>
            Xong
          </button>
        </div>
      </Modal>
    </>
  );
};

export default Management;
