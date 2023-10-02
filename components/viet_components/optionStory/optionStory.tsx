import React from "react";
import { Image } from "antd";
import styles from "./optionStory.module.scss";
export default function OptionStory(): JSX.Element {
  return (
    <div>
      <div>
        <div className={styles.action_item}>
          <Image src={"/img/them-van-ban.svg"} />
          Thêm văn bản
        </div>
        <div className={styles.action_item}>
          <Image src={"/img/gan-the-ban-be.svg"} />
          Gắn thẻ bạn bè
        </div>
        <div className={styles.action_item}>
          <Image src={"/img/am-nhac.svg"} />
          Âm nhạc
        </div>
      </div>
    </div>
  );
}
