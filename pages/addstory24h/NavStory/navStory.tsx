import React, { useState } from "react";
import styles from "../addstory.module.scss";
import { Divider, Image } from "antd";
import Footernav from "@/components/viet_components/optionStory/footernav";
import OptionStory from "@/components/viet_components/optionStory/optionStory";

export default function NavStory(props: any) {
  const { selectedImage } = props;

  return (
    <div>
      <div className={styles.navigation}>
        <div className={styles.head_nav}>
          <span className={styles.tin}>Tin</span>
          <span>Cài đặt</span>
        </div>
        <div className={styles.my_story}>
          <span>Tạo tin của bạn</span>
          <div className={styles.personal}>
            <Image src={"/img/c.png"} width={50} preview={false} />
            <span className={styles.name}>Nguyễn Văn Thức</span>
          </div>
        </div>
        <Divider />
        <div>
          {selectedImage && (
            <div>
              <OptionStory />
              <Footernav />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
