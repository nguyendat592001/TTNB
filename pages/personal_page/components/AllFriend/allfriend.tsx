import React, { useState } from "react";
import Image from "next/image";
import DotFr from "../Dropdown/dropFriend";
import styles from "./allfr.module.scss";

const fr = [
  {
    id: 1,
    imgAvt: "/img/c.png",
    name: "Nguyễn Hoàng",
  },
  {
    id: 2,
    imgAvt: "/img/c.png",
    name: "Đạt",
  },
  {
    id: 3,
    imgAvt: "/img/c.png",
    name: "Nguyễn Hoàng",
  },
  {
    id: 4,
    imgAvt: "/img/c.png",
    name: "Nguyễn Hoàng",
  },
  {
    id: 5,
    imgAvt: "/img/c.png",
    name: "Nguyễn Hoàng",
  },
  {
    id: 6,
    imgAvt: "/img/c.png",
    name: "Nguyễn Hoàng",
  },
  {
    id: 7,
    imgAvt: "/img/c.png",
    name: "Nguyễn Hoàng",
  },
  {
    id: 8,
    imgAvt: "/img/c.png",
    name: "Nguyễn Hoàng",
  },
  {
    id: 9,
    imgAvt: "/img/c.png",
    name: "Nguyễn Hoàng",
  },
];

export default function allfriend() {
  return (
    <div className={styles.grid_fr}>
      {fr.map((allfr) => (
        <div className={styles.allfr} key={allfr.id}>
          <Image
            className={styles.allfr_img}
            width={56}
            height={56}
            alt="anh-dai-dien"
            src={allfr.imgAvt}
          />
          <a className={styles.allfr_name}>{allfr.name}</a>
          {allfr.id % 2 === 0 ? <DotFr /> : null}
          {allfr.id % 2 !== 0 ? (
            <button className={styles.allfr_add}>Thêm bạn bè</button>
          ) : null}
        </div>
      ))}
    </div>
  );
}
