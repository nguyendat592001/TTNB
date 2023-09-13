import React from "react";
import type { MenuProps } from "antd";
import { Dropdown } from "antd";
import styles from "./follower.module.scss";

const items: MenuProps["items"] = [
  {
    label: <a>Chấp nhận</a>,
    key: "0",
  },
  {
    label: <a>Xóa lời mời</a>,
    key: "1",
  },
];

const BtnAction: React.FC = () => (
  <Dropdown menu={{ items }} trigger={["click"]}>
    <button onClick={(e) => e.preventDefault()} className={styles.feedback}>
      Phản hồi
    </button>
  </Dropdown>
);

export default BtnAction;
