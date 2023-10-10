import React, { useState } from "react";
import { ConfigProvider, Modal } from "antd";
import Image from "next/image";
import styles from "./address.module.css";
import Serfdom from "../Serfdom/Serfdom";

export default function AddressWork(): JSX.Element {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState("Thêm mới nơi làm việc");
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const changeModalTitle = (title: string) => {
    setModalTitle(title);
  };
  return (
    <>
      <p
        onClick={() => {
          showModal();
          changeModalTitle("Thêm mới nơi làm việc");
        }}
        className={styles.item}
      >
        <Image
          width={24}
          height={25}
          alt="anh-loi"
          src={"/img/nv_add-circle_blue.svg"}
        />
        Thêm nơi làm việc
      </p>

      <ConfigProvider
        theme={{
          components: {
            Modal: {
              headerBg: "#4c5bd4",
              titleColor: "white",
              titleFontSize: 18,
              titleLineHeight: 3,
            },
          },
          token: {
            paddingMD: 0,
            paddingContentHorizontalLG: 0,
          },
        }}
      >
        <Modal
          className="address"
          title={modalTitle}
          open={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
          footer={null}
        >
          <div className={styles.modal_body}>
            <div className={styles.company}>
              <p className={styles.title}>
                Công ty <span className={styles.red_dot}>*</span>
              </p>
              <input type="text" placeholder="Nhập tên công ty" />
            </div>
            <div className={styles.add}>
              <p className={styles.title}>
                Thành phố / Thị xã <span className={styles.red_dot}>*</span>
              </p>
              <input type="text" placeholder="Nhập thành phố thị xã" />
            </div>
            <div className={styles.serfdom}>
              Chế độ :
              <Serfdom />
            </div>
            <div className={styles.btn__btn}>
              <button
                className={`${styles.huy} ${styles.btn}`}
                onClick={handleCancel}
              >
                Hủy
              </button>
              <button
                className={`${styles.ok} ${styles.btn}`}
                onClick={handleOk}
              >
                Lưu
              </button>
            </div>
          </div>
        </Modal>
      </ConfigProvider>
    </>
  );
}
