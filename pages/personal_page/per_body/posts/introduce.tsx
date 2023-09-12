import React, { useState } from "react";
import styles from "../index.module.css";
import { Divider } from "antd";
import Image from "next/image";
import Interest from "@/components/common/Modal/Interest/Interest";
import Link from "next/link";
import HomeImage from "../ImageP/homeImage";
import { Router, useRouter } from "next/router";
import EdieStory from "./EdieStory";
import Friend from "../Friend/friend";

export default function Intro() {
  const router = useRouter();
  const more = () => {
    router.push("/");
  };

  return (
    <>
      <div>
        <div className={styles.center_intro}>
          <p>Giới thiệu</p>
          <Divider />

          <EdieStory />

          <div className={styles.follow}>
            <div className={styles.follow_list}>
              <Image width={24} height={24} alt="" src={"/img/nv_eye.svg"} />
              <span>Có 1 người theo dõi</span>
            </div>
            <p>Xem thêm</p>
          </div>

          <Interest />
        </div>
        <HomeImage />
        <Friend />
      </div>
    </>
  );
}
