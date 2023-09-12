import React from "react";
import { Divider, Tabs } from "antd";
import type { TabsProps } from "antd";
import styles from "../index.module.scss";
import Dot from "../../../../components/Dropdown/dot_tabs_block";
import Post from "../../per_body/posts";
import Intro from "../../per_body/Introduce/Intro";
import Friend from "../../TabsFriend/FriendHome";
const operations = <Dot />;

const onChange = (key: string) => {
  console.log(key);
};

const items: TabsProps["items"] = [
  {
    key: "1",
    label: "Bài viết",
    children: <Post />,
  },
  {
    key: "2",
    label: "Giới thiệu",
    children: <Intro />,
  },
  {
    key: "3",
    label: "Bạn bè",
    children: <Friend />,
  },
  {
    key: "4",
    label: "Ảnh",
    children: "Content of Tab Pane 4",
  },
  {
    key: "5",
    label: "Video",
    children: "Content of Tab Pane 5",
  },
  {
    key: "6",
    label: "Nhóm",
    children: "Content of Tab Pane 6",
  },
];

const App: React.FC = () => {
  return (
    <>
      <Divider />
      <div className="center_tab_block">
        <Tabs
          onChange={onChange}
          defaultActiveKey="1"
          tabBarExtraContent={operations}
          items={items}
        ></Tabs>
      </div>
    </>
  );
};

export default App;
