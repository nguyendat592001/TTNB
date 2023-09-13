import React from "react";
import Image from "next/image";
import type { MenuProps } from "antd";
import { Dropdown } from "antd";
import styles from "./tabsGr.module.scss";
import DropOtherShare from "./DropOthersShare";

const items: MenuProps["items"] = [
  {
    label: (
      <a className={styles.dot_child}>
        <Image
          width={25}
          height={24}
          alt="anh-loi"
          src={"/img/nv_share_your_wall.svg"}
        />{" "}
        Chia sẻ lên trang cá nhân(Của bạn)
      </a>
    ),
    key: "0",
  },
  {
    label: (
      <a className={styles.dot_child}>
        <Image
          width={25}
          height={24}
          alt="anh-loi"
          src={"/img/nv_share_others_wall.svg"}
        />
        Chia sẻ lên trang cá nhân (Bạn bè)
      </a>
    ),
    key: "1",
  },
  {
    label: (
      <a className={styles.dot_child}>
        <Image
          width={25}
          height={24}
          alt="anh-loi"
          src={"/img/nv_send_via_chat365.svg"}
        />
        Gửi bằng Chat365
      </a>
    ),
    key: "2",
  },
  {
    label: <DropOtherShare />,
    key: "3",
  },
];

const DropShare: React.FC = () => (
  <Dropdown menu={{ items }} trigger={["click"]}>
    <a className={styles.dot_child} onClick={(e) => e.preventDefault()}>
      <Image width={20} height={21} alt="" src={"/img/chia-se-ngay.svg"} />
      Chia sẻ ngay
    </a>
  </Dropdown>
);

export default DropShare;
