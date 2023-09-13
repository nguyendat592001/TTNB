import React from "react";
import type { MenuProps } from "antd";
import { Dropdown, Space } from "antd";
import Image from "next/image";

const items: MenuProps["items"] = [
  {
    label: (
      <a>
        <Image width={20} height={21} alt="messenger" src={"/img/c.png"} />
        Nhắn tin
      </a>
    ),
    key: "0",
  },
  {
    label: <a href="https://www.aliyun.com">2nd menu item</a>,
    key: "1",
  },
];

const DotFr: React.FC = () => (
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

export default DotFr;
