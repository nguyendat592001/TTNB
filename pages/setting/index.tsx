import React, { useState } from "react";
import { Tabs, TabsProps } from "antd";
import CaiDatChung from "@/components/dat/caidat/caidatchung/CaiDatChung";
import ThongTinBaoMat from "@/components/dat/caidat/thongtinbaomat/ThongTinBaoMat";
import NhatKyHoatDong from "@/components/dat/caidat/nhatkyhoatdong/NhatKyHoatDong";
import DanhSachThanhVien from "@/components/dat/caidat/danhsachthanhvien/DanhSachThanhVien";
import NhomThaoLuan from "@/components/dat/caidat/nhomthaoluan/NhomThaoLuan";

import styles from "./index.module.scss";
import SideBar from "@/components/header/sidebar/sidebar";
import Head from "next/head";


const onChange = (key: string) => {
  console.log(key);
};

const items: TabsProps["items"] = [
  {
    key: "1",
    label: "Cài đặt chung",
    children: <CaiDatChung />,
  },
  {
    key: "2",
    label: "Thông tin bảo mật",
    children: <ThongTinBaoMat />,
  },
  {
    key: "3",
    label: "Nhật ký hoạt động",
    children: <NhatKyHoatDong />,
  },
  {
    key: "4",
    label: "Danh sách thành viên",
    children: <DanhSachThanhVien />,
  },
  {
    key: "5",
    label: "Nhóm - thảo luận",
    children: <NhomThaoLuan />,
  },
];
// eslint-disable-next-line react-hooks/rules-of-hooks
const [showPopover, setShowPopover] = useState(false);

const closePopover = () => {
  setShowPopover(false);
};
const App: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Cài đặt</title>
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
      </Head>
      <div className={`${styles.settingContainer} settingContainer`}>
        <div className={styles.containerSidebar}>
          <div className={`${styles.SideBarSetting} SideBarSetting`}>
            <SideBar closePopover={closePopover} />
          </div>
        </div>
        <div className={styles.containerTabs}>
          <Tabs
            defaultActiveKey="1"
            items={items}
            onChange={onChange}
            className={styles.tabs}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
