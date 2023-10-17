import React, { useState } from "react";
import type { MenuProps } from "antd";
import { Dropdown, Image } from "antd";
import styles from "../Post/post.module.scss";
import CreateModalNotifical from "./taothongbao";
import HeloMember from "./chaodonthanhvienmoi";
import CreEvent from "./taosukien";

const Tuychinhdangtin: React.FC = () => {
  const [createNotif, setCreateNotif] = useState(false);
  const [helomem, setHelomem] = useState(false);
  const [event, setEvent] = useState(false);
  const items: MenuProps["items"] = [
    {
      label: (
        <div
          onClick={() => {
            setCreateNotif(true);
          }}
          className={styles.item}
        >
          <Image
            alt="phanh"
            src="/img/TTNB/icon_tuychinh.png"
            preview={false}
          />
          Tạo thông báo
        </div>
      ),
      key: "0",
    },
    {
      label: (
        <div
          className={styles.item}
          onClick={() => {
            setHelomem(true);
          }}
        >
          <Image
            alt="phanh"
            src="/img/TTNB/icon_tuychinh.png"
            preview={false}
          />
          Chào đón thành viên mới
        </div>
      ),
      key: "1",
    },
    {
      label: (
        <div
          className={styles.item}
          onClick={() => {
            setEvent(true);
          }}
        >
          <Image
            alt="phanh"
            src="/img/TTNB/icon_tuychinh.png"
            preview={false}
          />
          Tạo sự kiện
        </div>
      ),
      key: "2",
    },
    {
      label: (
        <div className={styles.item}>
          <Image
            alt="phanh"
            src="/img/TTNB/icon_tuychinh.png"
            preview={false}
          />
          Tạo thảo luận
        </div>
      ),
      key: "3",
    },
    {
      label: (
        <div className={styles.item}>
          <Image
            alt="phanh"
            src="/img/TTNB/icon_tuychinh.png"
            preview={false}
          />
          Chia sẻ ý tưởng
        </div>
      ),
      key: "4",
    },
    {
      label: (
        <div className={styles.item}>
          <Image
            alt="phanh"
            src="/img/TTNB/icon_tuychinh.png"
            preview={false}
          />
          Tạo bình chọn
        </div>
      ),
      key: "5",
    },
    {
      label: (
        <div className={styles.item}>
          <Image
            alt="phanh"
            src="/img/TTNB/icon_tuychinh.png"
            preview={false}
          />
          Tạo khen thưởng
        </div>
      ),
      key: "6",
    },
    {
      label: (
        <div className={styles.item}>
          <Image
            alt="phanh"
            src="/img/TTNB/icon_tuychinh.png"
            preview={false}
          />
          Tạo tin tức nội bộ
        </div>
      ),
      key: "7",
    },
  ];
  return (
    <>
      <Dropdown menu={{ items }} trigger={["click"]}>
        <div
          onClick={(e) => e.preventDefault()}
          className={styles.footer_post_item}
        >
          <Image src="/img/TTNB/icon_tuychinh.png" preview={false} />
          Tùy chỉnh đăng tin
        </div>
      </Dropdown>
      {createNotif && (
        <CreateModalNotifical
          createNotif={createNotif}
          setCreateNotif={setCreateNotif}
        />
      )}
      {helomem && <HeloMember helomem={helomem} setHelomem={setHelomem} />}
      {event && <CreEvent event={event} setEvent={setEvent} />}
    </>
  );
};

export default Tuychinhdangtin;
