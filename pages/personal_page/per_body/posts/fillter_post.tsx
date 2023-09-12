import React from "react";
import styles from "../index.module.css";
import Image from "next/image";
export default function FillterPosat() {
  return (
    <>
      <div className={styles.fillter}>
        <span className={styles.filter_post_title}> Bài viết</span>
        <div className={styles.btn_post} > 
          <button className={`${styles.filter_post_btn} ${styles.btn_filter_post}`}><Image width={24} height={24} alt='' src={"/img/nv_setting-4.svg"} />Bộ lọc</button>
          <button className={`${styles.filter_post_btn} ${styles.btn_manager_post}`}><Image width={24} height={24} alt='' src={"/img/nv_setting-2.svg"}/>Quản lý bài viết</button>
        </div>
      </div>
    </>
  );
}
