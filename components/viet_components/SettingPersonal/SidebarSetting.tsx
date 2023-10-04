import React, { useState } from "react";
import type { TabsProps } from "antd";
import { Tabs, Image } from "antd";
import CDC from "./CDC";

type TabPosition = "left" | "right" | "top" | "bottom";

const SidebarSetting: React.FC = () => {
  const [tabPosition, setTabPosition] = useState<TabPosition>("left");
  const items: TabsProps["items"] = [
    {
      key: "1",
      label: (
        <div className="tabpane">
          <Image
            alt=""
            src="/img/ant-design_setting-filled.svg"
            preview={false}
          />
          Cài đặt chung
        </div>
      ),
      children: <CDC />,
    },
    {
      key: "2",
      label: (
        <div className="tabpane">
          <Image alt="" src="/img/bx_bxs-lock-alt.svg" preview={false} />
          Quyền riêng tư
        </div>
      ),
      children: "Quyền riêng tư",
    },
    {
      key: "3",
      label: (
        <div className="tabpane">
          <Image alt="" src="/img/tag.svg" preview={false} />
          Trang cá nhân và gắn thẻ
        </div>
      ),
      children: "Trang cá nhân và gắn thẻ",
    },
    {
      key: "4",
      label: (
        <div className="tabpane">
          <Image alt="" src="/img/gis_earth-australia-o.svg" preview={false} />
          Bài viết công khai
        </div>
      ),
      children: "Bài viết công khai",
    },
    {
      key: "5",
      label: (
        <div className="tabpane">
          <Image alt="" src="/img/Frame 627861.svg" preview={false} />
          Chặn
        </div>
      ),
      children: "Chặn",
    },
    {
      key: "6",
      label: (
        <div className="tabpane">
          <Image alt="" src="/img/storyboard 1.svg" preview={false} />
          Tin đăng
        </div>
      ),
      children: "Tin đăng",
    },
    {
      key: "7",
      label: (
        <div className="tabpane">
          <Image alt="" src="/img/Frame 627860.svg" preview={false} />
          Thông báo
        </div>
      ),
      children: "Thông báo",
    },
  ];
  return (
    <div className="tabSetting">
      <Tabs tabPosition={tabPosition} items={items} />
    </div>
  );
};

export default SidebarSetting;
