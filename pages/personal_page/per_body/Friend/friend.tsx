import React from "react";
import Link from "next/link";
import { Divider } from "antd";
import Image from "next/image";
import styles from "./friend.module.scss";
import { info } from "./friend_data";
export default function Friend() {
  const chunkSize = 3;
  const imgChunks = [];
  for (let i = 0; i < info.length; i += chunkSize) {
    imgChunks.push(info.slice(i, i + chunkSize));
  }
  const limit = 9;
  const displayedImages = info.slice(0, limit);

  return (
    <>
      <div className={`${styles.anh} anh`}>
        <div className={styles.homeImage}>
          <span>Bạn bè ({info.length})</span>
          <Link href={"/"} className={styles.homeImage__view_all}>
            Xem tât cả
          </Link>
        </div>
        <Divider />
        <div className={styles.homeImage__image_all}>
          {displayedImages.map((img, imgIndex) => (
            <div key={imgIndex} className={styles.image}>
              <Image
                className={styles.itemImg}
                width={150}
                height={100}
                alt="anh-loi"
                src={img.imgSrc}
              />
              <p className={styles.name_fri}>{img.name}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
