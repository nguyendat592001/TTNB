import React from "react";
import SiderbarStory from "./sidebarStory";
import Story from "./story";
import styles from "./watchstory24h.module.scss";
export default function Watchstory24h() {
  return (
    <div className={styles.watchstory24h}>
      <SiderbarStory />
      <div className={styles.see}>
        <Story />
      </div>
    </div>
  );
}
