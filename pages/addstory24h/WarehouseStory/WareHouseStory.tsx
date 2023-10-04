import React, { useState } from "react";
import styles from "./WareHouseStory.module.scss";
import { Divider } from "antd";

import Settingstory from "@/components/viet_components/SettingStory/Settingstory";
import Nhatki from "./Nhatki";
import Khotin from "./Khotin";
export default function WareHouseStory() {
  const [activeTab, setActiveTab] = useState("khoTin"); // Sử dụng biến trạng thái để theo dõi tab được chọn

  const handleTabClick = (tabName: any) => {
    setActiveTab(tabName);
  };
  return (
    <div>
      <section className={styles.warehouse}>
        <div className={styles.sidebar}>
          <div
            className={` ${styles.khotin} activeTab === "khoTin" ? styles.activeTab : ""`}
            onClick={() => handleTabClick("khoTin")}
          >
            Kho tin lưu trữ
          </div>
          <div
            className={` ${styles.nhatki} activeTab === "nhatKy" ? styles.activeTab : ""`}
            onClick={() => handleTabClick("nhatKy")}
          >
            Nhật kí hoạt động
          </div>
        </div>
        <div className={styles.content}>
          <div className={styles.head_content}>
            <h4>
              {activeTab === "khoTin" ? "Kho tin lưu trữ" : "Nhật ký hoạt động"}
            </h4>

            {activeTab === "khoTin" ? <Settingstory /> : ""}
          </div>
          <Divider />
          <div>
            {activeTab === "khoTin" && <Khotin />}
            {activeTab === "nhatKy" && <Nhatki />}
          </div>
        </div>
      </section>
    </div>
  );
}
