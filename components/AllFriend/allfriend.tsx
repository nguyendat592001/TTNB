import React, { useState } from "react";
import Image from "next/image";
import DotFr from "../Dropdown/dropFriend";
import styles from "./allfr.module.scss";
import { fr } from "./fr";

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
