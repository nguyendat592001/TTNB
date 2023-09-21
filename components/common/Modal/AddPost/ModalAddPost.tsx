import React, { useState } from "react";
import { Modal, Button, Image, Input } from "antd";
import styles from "./ModalAddPost.module.css";
import ModalUploadFile from "../UploadFile/UploadFile";
import ModalLocation from "../Location/ModalLocation";
import ModalRegime from "../Regime/ModalRegime";
import Link from "next/link";

interface ModalAddPostProps {
  isOpen: boolean;
  onClose: () => void;
}

const ModalAddPost: React.FC<ModalAddPostProps> = ({ isOpen, onClose }) => {
  const [isUploadFileOpen, setIsUploadFileOpen] = useState(false);
  const [isLocationModalOpen, setIsLocationModalOpen] = useState(false);
  const [isRegimeModalOpen, setIsRegimeModalOpen] = useState(false);

  return (
    <Modal
      title="Đăng tin mới"
      open={isOpen}
      onCancel={onClose}
      footer={null}
      centered
      className={`${styles.modal} modal__addPost`}
    >
      <div className={styles.modal__container}>
        <div className={styles.modal__body}>
          <div className={styles.modal__body__left}>
            <Image
              src="/img/c.png"
              alt="avatar"
              width={50}
              height={50}
              preview={false}
              className={styles.modalAvatar}
            />
          </div>
          <div className={styles.modal__body__right}>
            <Link href="/">Nguyễn Thế Đạt</Link>
            <div
              className={styles.modal__body__right_regime}
              onClick={() => {
                setIsRegimeModalOpen(true);
              }}
            >
              <Image
                src="/img/img-home/regime/regime1.svg"
                alt=""
                width={20}
                height={20}
                preview={false}
              />
              <p> Công khai </p>
              <Image
                src="/img/img-home/ls_dropdown_ep_index.svg"
                alt=""
                width={12}
                height={12}
                preview={false}
                style={{ position: "absolute", top: "6px" }}
              />
            </div>
          </div>
        </div>
        <div className={styles.modal__input}>
          <Input
            placeholder="Hãy biết cảm nghĩ của bạn"
            bordered={false}
            size="large"
            className={styles.modal__input__content}
          />
          {isOpen && <ModalUploadFile isUploadFileVisible={isUploadFileOpen} />}
        </div>
        <div className={styles.modal__footer}>
          <div className={styles.modal__footer__left}>
            <p>Thêm vào bài viết</p>
          </div>
          <div className={styles.modal__footer__right}>
            <Image
              src="/img/img-home/nv_upload_file.svg"
              alt="avatar"
              width={26}
              height={26}
              preview={false}
              className={`${styles.modal__footer__right__img} ${styles.modal__uploadFile}`}
              onClick={() => {
                setIsUploadFileOpen(!isUploadFileOpen);
              }}
            />
            <Image
              src="/img/img-home/nv_post_feel_user_tag.svg"
              alt="avatar"
              width={26}
              height={26}
              preview={false}
              className={`${styles.modal__footer__right__img} ${styles.modal__user__tag} `}
            />
            <Image
              src="/img/img-home/nv_icon_post_footer_active.svg"
              alt="avatar"
              width={26}
              height={26}
              preview={false}
              className={`${styles.modal__footer__right__img} ${styles.modal__active} `}
            />
            <Image
              src="/img/img-home/nv_location.svg"
              alt="avatar"
              width={26}
              height={26}
              preview={false}
              className={`${styles.modal__footer__right__img} ${styles.modal__location} `}
              onClick={() => {
                setIsLocationModalOpen(!isLocationModalOpen);
              }}
            />
          </div>
        </div>
        {isLocationModalOpen && (
          <ModalLocation
            isOpen={isLocationModalOpen}
            onClose={() => setIsLocationModalOpen(false)}
          />
        )}
        {isRegimeModalOpen && (
          <ModalRegime
            isOpen={isRegimeModalOpen}
            onClose={() => setIsRegimeModalOpen(false)}
          />
        )}
        <div className={styles.modal__footer__right__btn}>
          <Button className={styles.modal__btn}>Đăng</Button>
        </div>
      </div>
    </Modal>
  );
};

export default ModalAddPost;
