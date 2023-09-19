import React, { useState } from "react";
import styles from "./index.module.css";
import { Button, Image, Input } from "antd";
import NewFeed from "../../../../components/thuc_components/newFeed/newFeed";
const Discuss = () => {
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
   const dataPin = [
      {
         avatar: "/img/group/mu1.jpg",
         name: "Fan MU Việt Nam",
         position: "Quản trị viên",
         time: "1 tuần trước",
         title: "Win!!!",
         content: "/img/group/mu2.jpg",
      },
   ];
   return (
      <>
         <div className={styles.container}>
            <div className={styles.content}>
               <div className={styles.content_top}>
                  <div className={styles.upload}>
                     <NewFeed />
                  </div>
                  <div className={styles.pin}>
                     <h3>Ghim bài viết</h3>
                     <div className={styles.pin_container}>
                        <div className={styles.all_pin}>
                           <div className={styles.pin_if}>
                              <Image alt="/" src="/img/group/gim.svg" preview={false} />
                              <p>Nêu bật những điều đáng chú ý nhất trong nhóm</p>
                              <p>Nêu bật những điều đáng chú ý nhất trong nhóm ở một nơi thuận tiện mà bạn có thể ghim bài viết</p>
                           </div>
                           <div className={styles.pin_if}>
                              <div className={styles.content}>
                                 <div className={styles.introduce_flex}>
                                    <Image alt="/" src="/img/group/mu1.jpg" width={50} height={50} style={{ borderRadius: "50%" }} preview={false} />
                                    <div className={styles.name}>
                                       <h3>Fan MU Việt Nam</h3>
                                       <div className={styles.introduce_flex}>
                                          <p>Quản trị viên</p>
                                          <p>4 ngày trước</p>
                                       </div>
                                    </div>
                                 </div>
                                 <Image alt="/" src="/img/group/dot9.svg" preview={false} />
                              </div>
                              <p>Win!!!</p>
                              <Image alt="/" src="/img/group/mu2.jpg" preview={false} />
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div className={styles.content_bot}>
                  <div className={styles.introduce}>
                     <p className={styles.introduce_p}>Giới thiệu</p>
                     <div className={styles.introduce_content}>
                        <p>Đây là nhóm Fan MU Việt Nam</p>
                        <div className={styles.introduce_flex}>
                           <Image alt="/" src="/img/group/earth.png" preview={false} />
                           <div>
                              <h3>Công khai</h3>
                              <p>Bất kỳ ai cũng có thể nhìn thấy mọi người trong nhóm và những gì họ đăng.</p>
                           </div>
                        </div>
                        <div className={styles.introduce_flex}>
                           <Image alt="/" src="/img/group/eye.png" preview={false} />
                           <div>
                              <h3>Hiển thị</h3>
                              <p>Ai cũng có thể tìm nhóm này.</p>
                           </div>
                        </div>
                        <Button className={`thuc_btn_full`}>Tìm hiểu thêm</Button>
                     </div>
                  </div>
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
                     <Button className={`thuc_btn_full`}>Xem tất cả</Button>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
};
export default Discuss;
