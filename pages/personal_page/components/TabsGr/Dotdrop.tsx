import React from "react";
import type { MenuProps } from "antd";
import { Dropdown } from "antd";
import Image from "next/image";
import styles from "./tabsGr.module.scss";
import DropShare from "./DropShare";

const items: MenuProps["items"] = [
  {
    label: <DropShare />,
    key: "0",
  },
  {
    label: (
      <a className={styles.dot_child}>
        <Image width={20} height={21} alt="" src={"/img/roi-khoi-nhom.svg"} />
        Xóa nhóm
      </a>
    ),
    key: "1",
  },

  {
    label: (
      <a className={styles.dot_child}>
        {" "}
        <Image width={20} height={21} alt="" src={"/img/bo-theo-doi.svg"} />
        Bỏ theo dõi nhóm
      </a>
    ),
    key: "2",
  },
  {
    label: (
      <a className={styles.dot_child}>
        {" "}
        <Image width={20} height={21} alt="" src={"/img/sao-chep-link.svg"} />
        Sao chép liên kết
      </a>
    ),
    key: "3",
  },
];

const DotDrop: React.FC = () => (
  <Dropdown menu={{ items }} trigger={["click"]}>
    <Image
      onClick={(e) => e.preventDefault()}
      width={24}
      height={25}
      alt=""
      src={"/img/ba-cham.svg"}
    />
  </Dropdown>
);

export default DotDrop;
