import React, { useState } from "react";
import Image from "next/image";
import styles from "./following.module.scss";
import { fr } from "../AllFriend/fr";

export default function Following() {
  return (
    <div className={styles.grid_fr}>
      {fr.map((allfr) => (
        <div className={styles.grid}>
          <div className={styles.allfr} key={allfr.id}>
            <Image
              className={styles.allfr_img}
              width={56}
              height={56}
              alt="anh-dai-dien"
              src={allfr.imgAvt}
            />
            <a className={styles.allfr_name}>{allfr.name}</a>
          </div>
          <div className={styles.feedback_dad}>
            <button className={styles.allfr_add}>Thêm bạn bè</button>
          </div>
        </div>
      ))}
    </div>
  );
}
