import React, { useState } from "react";
import type { MenuProps } from "antd";
import { Dropdown } from "antd";
import Image from "next/image";
import styles from "./tabsGr.module.scss";
import DropShare from "./DropShare";

export default function DotDrop() {
  const [unfollow, setUnfollow] = useState();
  const onClickUnfollow = () => {
    const userConfirmed = window.confirm(
      "Bạn có chắc chắn bỏ theo dõi nhóm abcxyz ko ?"
    );
    if (userConfirmed) {
      console.log("Unfollow confirmed");
      alert("Bỏ theo dõi nhóm abcxyz thành công!");
    }
  };
  const onClickFollow = () => {
    console.log("follow confirmed");
    alert("Theo dõi nhóm abcxyz thành công!");
  };
  const copyToClipboard = () => {
    const currentURL = window.location.href;
    const tempInput = document.createElement("input");
    tempInput.value = currentURL;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);
    alert("URL đã được sao chép: " + currentURL);
    console.log("Unfollow confirmed");
  };
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
          {!unfollow ? (
            <div className={styles.dot_child} onClick={onClickUnfollow}>
              <Image
                width={20}
                height={21}
                alt=""
                src={"/img/bo-theo-doi.svg"}
              />
              Bỏ theo dõi nhóm
            </div>
          ) : (
            <div className={styles.dot_child} onClick={onClickFollow}>
              <Image width={20} height={21} alt="" src={"/img/un_folow.svg"} />
              Theo dõi nhóm
            </div>
          )}
        </a>
      ),
      key: "2",
    },
    {
      label: (
        <a className={styles.dot_child} onClick={copyToClipboard}>
          <Image width={20} height={21} alt="" src={"/img/sao-chep-link.svg"} />
          Sao chép liên kết
        </a>
      ),
      key: "3",
    },
  ];

  return (
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
}
