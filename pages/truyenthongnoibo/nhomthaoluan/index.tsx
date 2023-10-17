import { Checkbox, Form, Input, Upload, Image, Button, Popover } from "antd";
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
  const member = [
    {
      id: 1,
      name: "Nguyễn Thế Đạt",
      image: "/img/c.png",
      ID: "42134234",
      chucvu: "Thành viên",
    },
    {
      id: 2,
      name: "Nguyễn Thế Đạt",
      image: "/img/c.png",
      ID: "42134234",
      chucvu: "Thành viên",
    },
    {
      id: 3,
      name: "Nguyễn Thế Đạt",
      image: "/img/c.png",
      ID: "42134234",
      chucvu: "Thành viên",
    },
    {
      id: 4,
      name: "Nguyễn Thế Đạt",
      image: "/img/c.png",
      ID: "42134234",
      chucvu: "Thành viên",
    },
    {
      id: 5,
      name: "Nguyễn Thế Đạt",
      image: "/img/c.png",
      ID: "42134234",
      chucvu: "Thành viên",
    },
    {
      id: 6,
      name: "Nguyễn Thế Đạt",
      image: "/img/c.png",
      ID: "42134234",
      chucvu: "Thành viên",
    },
    {
      id: 7,
      name: "Nguyễn Thế Đạt",
      image: "/img/c.png",
      ID: "42134234",
      chucvu: "Thành viên",
    },
    {
      id: 8,
      name: "Nguyễn Thế Đạt",
      image: "/img/c.png",
      ID: "42134234",
      chucvu: "Thành viên",
    },
    {
      id: 9,
      name: "Nguyễn Thế Đạt",
      image: "/img/c.png",
      ID: "42134234",
      chucvu: "Thành viên",
    },
    {
      id: 10,
      name: "Nguyễn Thế Đạt",
      image: "/img/c.png",
      ID: "42134234",
      chucvu: "Thành viên",
    },
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
    <div>
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
      <div className={styles.thutuceoContainerContentRight}>
        <div className={styles.thutuceoContainerContentRightHeader}>
          <p>Giới thiệu</p>
        </div>
        <div className={styles.thutuceoContainerContentRightContent}>
          <div className={styles.thutuceoContainerContentRightContentItem}>
            <div className={styles.list_gr}>
              Quản trị: <span className={styles.list_item}>Chưa cập nhật</span>
            </div>
            <div className={styles.list_gr}>
              Quản lý trực tiếp:{" "}
              <span className={styles.list_item}>Chưa cập nhật</span>
            </div>
            <div className={styles.list_gr}>
              Chế độ nhóm: <span className={styles.list_item}>Công khai</span>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.thutuceoContainerContentRight}>
        <div className={styles.thutuceoContainerContentRightHeader}>
          <p>Thành viên</p>
        </div>
        <div className={styles.thutuceoContainerContentRightContent}>
          <div className={styles.thutuceoContainerContentRightContentItem}>
            <div className={styles.thanhvien}>
              {member.map((mem, index) => (
                <div key={index} className={styles.member}>
                  <Popover
                    content={
                      <div className={styles.chitiet}>
                        <div className={styles.chitietmem}>
                          <div className={styles.phanh}>
                            <span>{mem.name}</span>

                            <span>{mem.chucvu}</span>

                            <span>{mem.ID}</span>
                          </div>
                        </div>
                      </div>
                    }
                  >
                    <Image
                      width={50}
                      alt="phanh"
                      src={mem.image}
                      preview={false}
                    />
                  </Popover>
                </div>
              ))}
            </div>
          </div>
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
