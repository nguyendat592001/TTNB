import { Checkbox, Form, Input, Upload, Image, Button } from "antd";
import React, { useState } from "react";
import styles from "./index.module.scss";
import TruyenThongNoiBo from "..";
import AnhBia from "../../../components/AnhBia";
import { SearchOutlined } from "@ant-design/icons";
import Post from "../../../components/Post";

export default function Trangcongty() {
  const danhsach = [
    { id: 1, name: "Biên tập" },
    { id: 2, name: "Kinh doanh" },
    { id: 3, name: "Phòng SEO" },
    { id: 4, name: "Phòng đào tạo" },
    { id: 5, name: "Phòng sáng tạo" },
    { id: 6, name: "Phòng tài vụ" },
    { id: 7, name: "Phòng nhân sự" },
  ];

  const childrenContentLeft = (
    <div className={styles.thutuceoContainer}>
      <div className={styles.thutuceoContainerHeader}>
        <AnhBia />
      </div>
      <div className={`${styles.undefined_search} undefined_search`}>
        <Input
          placeholder="Tìm kiếm bài viết"
          suffix={<SearchOutlined rev={undefined} />}
        />
      </div>
      <div>
        <Post />
      </div>
    </div>
  );
  const childrenContentRight = (
    <div className={styles.thutuceoContainerContentRight}>
      <div className={styles.thutuceoContainerContentRightHeader}>
        <p>Danh sách nhóm - thảo luận</p>
      </div>
      <div className={styles.thutuceoContainerContentRightContent}>
        <div className={styles.thutuceoContainerContentRightContentItem}>
          <ul>
            {danhsach.map((list, index) => (
              <li key={index} className={styles.list_gr}>
                <p>{list.name}</p>
                <Image
                  alt="phanh"
                  src={"/img/TTNB/icon_n.png"}
                  preview={false}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
  return (
    <TruyenThongNoiBo
      childrenContentLeft={childrenContentLeft}
      childrenContentRight={childrenContentRight}
    />
  );
}
