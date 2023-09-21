import React, { useState } from "react";
import Image from "next/image";
import styles from "./FriendHome.module.scss";
import { ConfigProvider } from "antd";
import { Tabs } from "antd";
import type { TabsProps } from "antd";
import Allfriend from "@/pages/personal_page/components/AllFriend/allfriend";

import Follower from "@/pages/personal_page/components/Follower/follower";
import Following from "@/pages/personal_page/components/Following/Following";
const fr = [
  {
    id: 1,
    imgAvt: "/img/c.png",
    name: "Nguyễn Hoàng",
  },
  {
    id: 2,
    imgAvt: "/img/c.png",
    name: "Đạt",
  },
  {
    id: 3,
    imgAvt: "/img/c.png",
    name: "Nguyễn Hoàng",
  },
  {
    id: 4,
    imgAvt: "/img/c.png",
    name: "Nguyễn Hoàng",
  },
  {
    id: 5,
    imgAvt: "/img/c.png",
    name: "Nguyễn Hoàng",
  },
  {
    id: 6,
    imgAvt: "/img/c.png",
    name: "Nguyễn Hoàng",
  },
  {
    id: 7,
    imgAvt: "/img/c.png",
    name: "Nguyễn Hoàng",
  },
  {
    id: 8,
    imgAvt: "/img/c.png",
    name: "Nguyễn Hoàng",
  },
  {
    id: 9,
    imgAvt: "/img/c.png",
    name: "Nguyễn Hoàng",
  },
];

export default function FriendHome() {
  const onChange = (key: string) => {};

  const items: TabsProps["items"] = [
    {
      key: "1",
      label: "Tất cả bạn bè",
      children: <Allfriend />,
    },
    {
      key: "2",
      label: "Người theo dõi",
      children: <Follower />,
    },
    {
      key: "3",
      label: "Đang theo dõi",
      children: <Following />,
    },
  ];

  return (
    <div>
      <ConfigProvider
        theme={{
          components: {
            Tabs: {
              cardBg: "#white",
              cardPaddingLG: "999px 16px 6px",
            },
          },
          token: {
            colorBgContainer: "white",
            colorFillAlter: "white",
          },
        }}
      >
        <div className={styles.nav_friend}>
          <p className={styles.nav_friend_fr}>Bạn bè({fr.length})</p>
          <div className={styles.filter_friend}>
            <div className={styles.input_search}>
              <input
                placeholder="Tìm kiếm bạn bè"
                className={styles.input}
                type="text"
              />
              <Image
                className={styles.input_search__image}
                width={24}
                height={25}
                alt="search"
                src={"/img/search.svg"}
              />
            </div>
            <div className={styles.looking_add}>
              <p className={styles.friend_request}>Lời mời kết bạn</p>
              <p className={styles.looking_for_friend}>Tìm bạn bè</p>
            </div>
          </div>
        </div>
        <div className="friend_tabs">
          <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
        </div>
      </ConfigProvider>
    </div>
  );
}
