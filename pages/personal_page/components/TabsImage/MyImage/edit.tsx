import React, { useState } from "react";
import Image from "next/image";
import styles from "../TabsImage.module.scss";

import type { MenuProps } from "antd";
import { Dropdown } from "antd";
const Pen = (props: any) => {
  const { removeFollower, imageURL } = props;
  const handleDownload = () => {
    // Sử dụng đường dẫn hình ảnh từ imageURL
    const downloadURL = imageURL; // imageURL đã được truyền từ Myimage
    // Tạo một fake anchor element
    const anchor = document.createElement("a");
    anchor.href = downloadURL;
    anchor.download = "image.jpg"; // Tên tệp ảnh khi tải xuống
    // Trigger a click event to download the image
    anchor.click();
  };
  const items: MenuProps["items"] = [
    {
      label: (
        <a className={styles.pen}>
          <Image
            width={19}
            height={20}
            alt=""
            src={"/img/dat-lam-anh-dai-dien.svg"}
          />
          Đặt làm ảnh đại diện
        </a>
      ),
      key: "0",
    },
    {
      label: (
        <a className={styles.pen}>
          {" "}
          <Image
            width={19}
            height={20}
            alt=""
            src={"/img/dat-lam-anh-bia.svg"}
          />
          Đặt làm ảnh bìa
        </a>
      ),
      key: "1",
    },

    {
      label: (
        <a className={styles.pen} onClick={handleDownload}>
          <Image width={19} height={20} alt="" src={"/img/fe_edit.svg"} />
          Tải xuống
        </a>
      ),
      key: "3",
    },
    {
      label: (
        <a className={styles.pen} onClick={removeFollower}>
          {" "}
          <Image width={19} height={20} alt="" src={"/img/public_del.svg"} />
          Xóa ảnh
        </a>
      ),
      key: "4",
    },
  ];
  return (
    <>
      <Dropdown menu={{ items }} trigger={["click"]}>
        <Image
          onClick={(e) => e.preventDefault()}
          className={styles.myimage_img_edit}
          width={31}
          height={30}
          alt="pencel"
          src={"/img/edit_album.svg"}
        />
      </Dropdown>
    </>
  );
};
export default Pen;
