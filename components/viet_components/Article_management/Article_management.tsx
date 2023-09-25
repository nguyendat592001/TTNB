import React, { useState } from "react";
import { Divider, Image, Modal, Select } from "antd";
import styles from "./Article_management.module.scss";
import Fillter from "../fillter/Fillter";

export default function Article_management() {
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
  const Img = [
    {
      id: 1,
      imgSrc: "/img/c.png",
    },
    {
      id: 2,
      imgSrc: "/img/c.png",
    },
    {
      id: 3,
      imgSrc: "/img/c.png",
    },
    {
      id: 4,
      imgSrc: "/img/c.png",
    },
    {
      id: 5,
      imgSrc: "/img/c.png",
    },
    {
      id: 6,
      imgSrc: "/img/c.png",
    },
    {
      id: 7,
      imgSrc: "/img/c.png",
    },
    {
      id: 8,
      imgSrc: "/img/c.png",
    },
    {
      id: 9,
      imgSrc: "/img/c.png",
    },
    {
      id: 10,
      imgSrc: "/img/c.png",
    },
    {
      id: 11,
      imgSrc: "/img/c.png",
    },
    {
      id: 12,
      imgSrc: "/img/c.png",
    },
  ];

  return (
    <>
      <button
        onClick={showModal}
        className={`${styles.filter_post_btn} ${styles.btn_manager_post}`}
      >
        <Image
          width={24}
          height={24}
          alt=""
          src={"/img/nv_setting-2.svg"}
          preview={false}
        />
        Quản lý bài viết
      </button>

      <Modal
        title="Bộ lọc bài viết"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
      >
        <div className={styles.quanly}>
          <span>Chọn bài viết bạn muốn quản lý</span>
          <Fillter />
        </div>
        <Divider />
        <div className={styles.allpost}>
          <span>Tháng 8 năm 2022</span>
          <div className={styles.allpost_input}>
            <input width={20} height={20} type="checkbox" id="allpost-check" />
            <label htmlFor="allpost-check">Chọn tất cả</label>
          </div>
        </div>
        {/* ảnh */}

        <div className={styles.list_post}>
          {Img.map((imgs, index) => (
            <label htmlFor="img_post" key={index}>
              <Image alt="anh-loi" src={imgs.imgSrc} preview={false} />
              <div className={styles.info_post}>
                <Image
                  width={50}
                  height={50}
                  alt="anh-loi"
                  src={imgs.imgSrc}
                  preview={false}
                />
                <div className={styles.info_post_post}>
                  <p>Acing the world’s 2nd* most popular Management Master's</p>
                  <p>
                    25 Tháng 9
                    <Image alt="anh-loi" src="/img/earth.svg" preview={false} />
                  </p>
                </div>
              </div>
              <div className={styles.input}>
                <input width={20} height={20} id="img_post" type="checkbox" />
              </div>
            </label>
          ))}
        </div>

        <div className={styles.btn_btn}>
          <button
            className={`${styles.del} ${styles.btn}`}
            onClick={handleCancel}
          >
            Xóa
          </button>
          <button className={`${styles.ok} ${styles.btn}`} onClick={handleOk}>
            Tiếp
          </button>
        </div>
      </Modal>
    </>
  );
}
