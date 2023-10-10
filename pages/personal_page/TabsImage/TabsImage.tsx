import React, { useState } from "react";
import { Tabs } from "antd";
import type { TabsProps } from "antd";
import Myimage from "@/pages/personal_page/components/TabsImage/MyImage/Myimage";
import Album from "@/pages/personal_page/components/TabsImage/Album/Album";
import styles from "./tabs.module.scss";
import HomeImage from "../per_body/ImageP/homeImage";

const TabImage = () => {
  const [activeTab, setActiveTab] = useState<string>("1"); // Initialize active tab as "1"

  const onChange = (key: string) => {
    console.log(key);
    setActiveTab(key); // Update the active tab when the user changes tabs
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
  return (
    <div className="tabsimage">
      <h2 className={styles.title}>Ảnh</h2>
      <Tabs
        activeKey={activeTab}
        defaultActiveKey="1"
        items={items}
        onChange={onChange}
      />
    </div>
  );
};

export default TabImage;
