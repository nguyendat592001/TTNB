import React from "react";
import Image from "next/image";
import styles from "../TabsImage.module.scss";

import type { MenuProps } from "antd";
import { Dropdown } from "antd";
const fr = [
  {
    id: 1,
    imgAvt: "/img/c.png",
    name: "Nguyễn Hoàng",
  },
  {
    id: 2,
    imgAvt: "/img/c.png",
    name: "Đạt",
  },
  {
    id: 3,
    imgAvt: "/img/c.png",
    name: "Nguyễn Hoàng",
  },
  {
    id: 4,
    imgAvt: "/img/c.png",
    name: "Nguyễn Hoàng",
  },
  {
    id: 5,
    imgAvt: "/img/c.png",
    name: "Nguyễn Hoàng",
  },
  {
    id: 6,
    imgAvt: "/img/c.png",
    name: "Nguyễn Hoàng",
  },
  {
    id: 7,
    imgAvt: "/img/c.png",
    name: "Nguyễn Hoàng",
  },
  {
    id: 8,
    imgAvt: "/img/c.png",
    name: "Nguyễn Hoàng",
  },
  {
    id: 9,
    imgAvt: "/img/c.png",
    name: "Nguyễn Hoàng",
  },
];

export default function Myimage() {
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
        <a className={styles.pen}>
          {" "}
          <Image width={19} height={20} alt="" src={"/img/fe_edit.svg"} />
          Tải xuống
        </a>
      ),
      key: "3",
    },
    {
      label: (
        <a className={styles.pen}>
          {" "}
          <Image width={19} height={20} alt="" src={"/img/public_del.svg"} />
          Xóa ảnh
        </a>
      ),
      key: "4",
    },
  ];
  return (
    <div>
      <div className={styles.myimage}>
        {fr.map((image) => (
          <div className={styles.myimage_img} key={image.id}>
            <Image
              className={styles.myimage_img_img}
              width={215}
              height={215}
              alt="anh-loi"
              src={image.imgAvt}
            />
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
          </div>
        ))}
      </div>
    </div>
  );
}
