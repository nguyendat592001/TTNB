import React from "react";
import styles from "./video.module.scss";
import { Dropdown } from "antd";
import Image from "next/image";
import type { MenuProps } from "antd";
export default function Video() {
  const fr = [
    {
      id: 1,
      imgAvt: "/video/video1.mp4",
      name: "Nguyễn Hoàng",
    },
    {
      id: 2,
      imgAvt: "/video/video1.mp4",
      name: "Đạt",
    },
    {
      id: 3,
      imgAvt: "/video/video1.mp4",
      name: "Nguyễn Hoàng",
    },
    {
      id: 4,
      imgAvt: "/video/video1.mp4",
      name: "Nguyễn Hoàng",
    },
  ];
  const items: MenuProps["items"] = [
    {
      label: (
        <a className={styles.pen}>
          {" "}
          <Image width={19} height={20} alt="" src={"/img/fe_edit.svg"} />
          Tải xuống
        </a>
      ),
      key: "1",
    },
    {
      label: (
        <a className={styles.pen}>
          {" "}
          <Image width={19} height={20} alt="" src={"/img/public_del.svg"} />
          Xóa video
        </a>
      ),
      key: "2",
    },
  ];

  return (
    <div>
      <h2 className={styles.title}>Video</h2>
      <div>
        <div className={`${styles.myimage} ${styles.vdeo}`}>
          {fr.map((image) => (
            <div className={styles.myimage_img} key={image.id}>
              <video
                width="100%"
                height="200"
                controls
                className={styles.video}
              >
                <source src={image.imgAvt} type="video/mp4" />
              </video>
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
    </div>
  );
}
