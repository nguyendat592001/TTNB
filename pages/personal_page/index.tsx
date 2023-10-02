import React from "react";
import Center_avt from "./center_avt";
import styles from "./personal.module.css";
import Head from "next/head";

export default function Personal_page() {
  return (
    <>
      <Head>
        <title>Trang cá nhân</title>
        <link rel="shortcut icon" href="./next.svg" type="image/x-icon" />
      </Head>
      <div className={styles.pages_canhan}>
        <div className={styles.center}>
          <Center_avt
            isOpen={false}
            onClose={function (): void {
              throw new Error("Function not implemented.");
            }}
          />
        </div>
      </div>
    </>
  );
}
