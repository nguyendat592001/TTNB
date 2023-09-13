import React from "react";
import { Tabs } from "antd";
import type { TabsProps } from "antd";
import Myimage from "@/pages/personal_page/components/TabsImage/MyImage/Myimage";
import Album from "@/pages/personal_page/components/TabsImage/Album/Album";
import styles from "./tabs.module.scss";

const onChange = (key: string) => {
  console.log(key);
};

const items: TabsProps["items"] = [
  {
    key: "1",
    label: "Ảnh của bạn",
    children: <Myimage />,
  },
  {
    key: "2",
    label: "Album",
    children: <Album />,
  },
];

const TabImage: React.FC = () => (
  <div className="tabsimage">
    <h2 className={styles.title}>Ảnh</h2>
    <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
  </div>
);

export default TabImage;
