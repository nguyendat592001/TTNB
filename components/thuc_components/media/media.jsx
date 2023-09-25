import React, { useState } from "react";
import styles from "./media.module.css";
import { Image, Button } from "antd";
import { useRouter } from "next/router";
const Media = () => {
   const router = useRouter();
   const dataImg = [
      {
         key: "1",
         img: "/img/group/mu1.jpg",
      },
      {
         key: "2",
         img: "/img/group/mu2.jpg",
      },
      {
         key: "3",
         img: "/img/group/mu3.jpg",
      },
   ];
   return (
      <>
         <div className={styles.introduce}>
            <p className={styles.introduce_p}>File phương tiện mới chia sẻ</p>
            <div className={styles.introduce_all_img}>
               {dataImg.map((item) => {
                  return (
                     <div className={styles.introduce_img} key={item.key}>
                        <Image alt="/" src={item.img} height={170} preview={false} />
                     </div>
                  );
               })}
            </div>
            <Button className={`thuc_btn_full`} onClick={() => router.push("/group/your-group/home/colection")}>
               Xem tất cả
            </Button>
         </div>
      </>
   );
};
export default Media;
