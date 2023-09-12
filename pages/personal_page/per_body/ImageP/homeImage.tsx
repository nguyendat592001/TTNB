import React, { useState } from "react";
import Link from "next/link";
import { Divider } from "antd";
import Image from "next/image";
import styles from "./homeImage.module.scss";
export default function HomeImage() {
  const Img = [
    {
      id: 1,
      imgSrc: "/img/c.png",
    },
    {
      id: 2,
      imgSrc: "/img/c.png",
    },
    {
      id: 3,
      imgSrc: "/img/c.png",
    },
    {
      id: 4,
      imgSrc: "/img/c.png",
    },
    {
      id: 5,
      imgSrc: "/img/c.png",
    },
    {
      id: 6,
      imgSrc: "/img/c.png",
    },
    {
      id: 7,
      imgSrc: "/img/c.png",
    },
    {
      id: 8,
      imgSrc: "/img/c.png",
    },
    {
      id: 9,
      imgSrc: "/img/c.png",
    },
    {
      id: 10,
      imgSrc: "/img/c.png",
    },
    {
      id: 11,
      imgSrc: "/img/c.png",
    },
    {
      id: 12,
      imgSrc: "/img/c.png",
    },
  ];
  const chunkSize = 3;
  const imgChunks = [];
  for (let i = 0; i < Img.length; i += chunkSize) {
    imgChunks.push(Img.slice(i, i + chunkSize));
  }
  const limit = 8; // Số lượng ảnh tối đa muốn hiển thị
  // Chỉ lấy 9 ảnh đầu tiên nếu có nhiều hơn
  const displayedImages = Img.slice(0, limit);

  return (
    <>
      <div className={`${styles.anh} anh`}>
        <div className={styles.homeImage}>
          <span>Ảnh</span>
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
                height={150}
                alt="anh-loi"
                src={img.imgSrc}
              />
            </div>
          ))}
          {Img.length > limit && (
            <div className={styles.image__length}>
              <p>+{Img.length - limit} ảnh khác</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
