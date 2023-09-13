import React from "react";
import Image from "next/image";
import styles from "../TabsImage.module.scss";
import { Dropdown, MenuProps } from "antd";

export default function Album() {
  const items: MenuProps["items"] = [
    {
      label: (
        <a className={styles.pen}>
          {" "}
          <Image
            width={19}
            height={20}
            alt=""
            src={"/img/dat-lam-anh-dai-dien.svg"}
          />
          Chỉnh sửa album
        </a>
      ),
      key: "0",
    },
    {
      label: (
        <a className={styles.pen}>
          <Image
            width={19}
            height={20}
            alt=""
            src={"/img/dat-lam-anh-bia.svg"}
          />
          Tải album xuống
        </a>
      ),
      key: "1",
    },

    {
      label: (
        <a className={styles.pen}>
          {" "}
          <Image width={19} height={20} alt="" src={"/img/public_del.svg"} />
          Xóa album
        </a>
      ),
      key: "2",
    },
  ];
  return (
    <div>
      <div className={styles.album}>
        <div className={styles.album_add}>
          <div className={styles.album_add__new}>
            <Image
              width={24}
              height={25}
              alt="alicu"
              src={"/img/nv_add-circle_blue.svg"}
            />
            <p>Tạo album</p>
          </div>
          <div className={styles.album_new}>
            <div>
              <div className={styles.album_new_img}>
                <Image
                  width={218}
                  height={215}
                  alt="anh loi"
                  src={"/img/c.png"}
                />
                <Dropdown menu={{ items }} trigger={["click"]}>
                  <Image
                    onClick={(e) => e.preventDefault()}
                    className={styles.album_img_edit}
                    width={31}
                    height={30}
                    alt="pencel"
                    src={"/img/edit_album.svg"}
                  />
                </Dropdown>
              </div>
              <div className={styles.data}>
                <p>dd</p>
                <span>122 mục</span>
              </div>
            </div>
            <div>
              <div className={styles.album_new_img}>
                <Image
                  width={218}
                  height={215}
                  alt="anh loi"
                  src={"/img/c.png"}
                />
                <Dropdown menu={{ items }} trigger={["click"]}>
                  <Image
                    onClick={(e) => e.preventDefault()}
                    className={styles.album_img_edit}
                    width={31}
                    height={30}
                    alt="pencel"
                    src={"/img/edit_album.svg"}
                  />
                </Dropdown>
              </div>
              <div className={styles.data}>
                <p>dd</p>
                <span>122 mục</span>
              </div>
            </div>
            <div>
              <div className={styles.album_new_img}>
                <Image
                  width={218}
                  height={215}
                  alt="anh loi"
                  src={"/img/c.png"}
                />
                <Dropdown menu={{ items }} trigger={["click"]}>
                  <Image
                    onClick={(e) => e.preventDefault()}
                    className={styles.album_img_edit}
                    width={31}
                    height={30}
                    alt="pencel"
                    src={"/img/edit_album.svg"}
                  />
                </Dropdown>
              </div>
              <div className={styles.data}>
                <p>dd</p>
                <span>122 mục</span>
              </div>
            </div>
            <div>
              <div className={styles.album_new_img}>
                <Image
                  width={218}
                  height={215}
                  alt="anh loi"
                  src={"/img/c.png"}
                />
                <Dropdown menu={{ items }} trigger={["click"]}>
                  <Image
                    onClick={(e) => e.preventDefault()}
                    className={styles.album_img_edit}
                    width={31}
                    height={30}
                    alt="pencel"
                    src={"/img/edit_album.svg"}
                  />
                </Dropdown>
              </div>
              <div className={styles.data}>
                <p>dd</p>
                <span>122 mục</span>
              </div>
            </div>
            <div>
              <div className={styles.album_new_img}>
                <Image
                  width={218}
                  height={215}
                  alt="anh loi"
                  src={"/img/c.png"}
                />
                <Dropdown menu={{ items }} trigger={["click"]}>
                  <Image
                    onClick={(e) => e.preventDefault()}
                    className={styles.album_img_edit}
                    width={31}
                    height={30}
                    alt="pencel"
                    src={"/img/edit_album.svg"}
                  />
                </Dropdown>
              </div>
              <div className={styles.data}>
                <p>dd</p>
                <span>122 mục</span>
              </div>
            </div>
            <div>
              <div className={styles.album_new_img}>
                <Image
                  width={218}
                  height={215}
                  alt="anh loi"
                  src={"/img/c.png"}
                />
                <Dropdown menu={{ items }} trigger={["click"]}>
                  <Image
                    onClick={(e) => e.preventDefault()}
                    className={styles.album_img_edit}
                    width={31}
                    height={30}
                    alt="pencel"
                    src={"/img/edit_album.svg"}
                  />
                </Dropdown>
              </div>
              <div className={styles.data}>
                <p>dd</p>
                <span>122 mục</span>
              </div>
            </div>
            <div>
              <div className={styles.album_new_img}>
                <Image
                  width={218}
                  height={215}
                  alt="anh loi"
                  src={"/img/c.png"}
                />
                <Dropdown menu={{ items }} trigger={["click"]}>
                  <Image
                    onClick={(e) => e.preventDefault()}
                    className={styles.album_img_edit}
                    width={31}
                    height={30}
                    alt="pencel"
                    src={"/img/edit_album.svg"}
                  />
                </Dropdown>
              </div>
              <div className={styles.data}>
                <p>dd</p>
                <span>122 mục</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
