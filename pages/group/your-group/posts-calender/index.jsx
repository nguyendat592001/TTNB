import React, { useState, useRef } from "react";
import styles from "./index.module.css";
import { Modal, Image, Dropdown, Button, Select, Input, Space, Menu } from "antd";
import LeftNav from "../../../../components/thuc_components/left-nav-group/leftNav";
import Time from "../../../../components/thuc_components/newFeed/newFeedContent/time";
const PostWaiting = () => {
   const [isModalNotificationOpen, setIsModalNotificationOpen] = useState(false);
   const showModalNotification = () => {
      setIsModalNotificationOpen(true);
   };
   const handleNotificationCancel = () => {
      setIsModalNotificationOpen(false);
   };

   const [isModalRefuseOpen, setIsModalRefuseOpen] = useState(false);
   const showModalRefuse = () => {
      setIsModalRefuseOpen(true);
   };
   const handleRefuseCancel = () => {
      setIsModalRefuseOpen(false);
   };

   const [isCalenderOpen, setIsCalenderOpen] = useState(false);
   const showModalTime = () => {
      setIsCalenderOpen(true);
   };
   const handleTimeCancel = () => {
      setIsCalenderOpen(false);
   };
   const handleChange = (value) => {
      console.log(value);
   };
   const items = [
      {
         key: "1",
         label: "Bật thông báo",
      },
   ];
   const handleDropdownClick = (key) => {
      if (key === "1") {
         showModalNotification();
      }
      if (key === "2") {
         showModalRefuse();
      }
   };
   const dataContent = [
      {
         key: "1",
         name: "Nguyễn Thế Đạt",
         time: "1 ngày nữa",
         text: "Bé Cún Cute",
         img: "",
         videoSrc: "/img/group/ta_xua.mp4",
      },
      {
         key: "2",
         name: "Nguyễn Hoàng Việt",
         time: "3 ngày nữa",
         text: "húp",
         img: "/img/group/tq2.jpg",
         videoSrc: "",
      },
   ];
   const videoRef = useRef(null);

   const handleVideoClick = () => {
      if (videoRef.current) {
         const promise = videoRef.current.requestFullscreen();

         promise
            .then(() => videoRef.current?.play())
            .catch((error) => {
               console.log("Error attempting to enable fullscreen:", error);
            });
      }
   };
   const checkColection = (item) => {
      const checkImg = item.img;
      if (checkImg === null || checkImg === undefined || checkImg === "") {
         return null;
      } else {
         return (
            <>
               <div className={styles.introduce_img}>
                  <Image alt="/" src={item.img} preview={false} />
               </div>
            </>
         );
      }
   };
   const checkVideo = (item) => {
      const checkVideo = item.videoSrc;
      if (checkVideo === null || checkVideo === undefined || checkVideo === "") {
         return null;
      } else {
         return (
            <>
               <div className={styles.introduce_img}>
                  <div className={`${styles.post__content__video} ${styles.post__content__video_container}`}>
                     <video ref={videoRef} width="100%" height="200" controls onClick={handleVideoClick} className={styles.video}>
                        <source src={item.videoSrc} type="video/mp4" />
                     </video>
                  </div>
               </div>
            </>
         );
      }
   };
   return (
      <>
         <div className={styles.container}>
            <div className={styles.left_container}>
               <div className={styles.left}>
                  <LeftNav />
               </div>
            </div>
            <div className={styles.right}>
               <div className={styles.header}>
                  <h2>Bài viết đã lên lịch (1)</h2>
               </div>
               {dataContent.map((item) => {
                  return (
                     <div className={styles.content} key={item.key}>
                        <div className={styles.content_all}>
                           <div className={styles.content_fl}>
                              <Image alt="" src="/img/group/tq5.jpg" width={50} height={50} style={{ borderRadius: "50%" }} preview={false} />
                              <div>
                                 <h3>{item.name}</h3>
                                 <p>{item.time}</p>
                              </div>
                           </div>
                           <Image alt="" src="/img/group/more2.svg" preview={false} />
                        </div>
                        <div className={styles.colection}>
                           <p> {item.text}</p>
                           {checkColection(item)}
                           {checkVideo(item)}
                        </div>
                        <div className={styles.content_btn}>
                           <button className={styles.content_btn_ok} onClick={showModalTime}>
                              Đổi lịch
                           </button>
                           <button className={styles.content_btn_cancer}>Đăng ngay</button>
                        </div>
                     </div>
                  );
               })}
            </div>
            <div>
               <Modal className={`thuc_modal ${styles.thuc_pin}`} title="Bật thông báo cho bài viết" open={isModalNotificationOpen} onCancel={handleNotificationCancel} footer={null}>
                  <div className={styles.modal_container}>
                     <h3>Bạn có muốn nhận thông báo cho bài viết này?</h3>
                     <p>Tất cả các thay đổi mà bài viết cập nhật sẽ được gửi tới thông báo của bạn</p>
                     <div className={styles.btn}>
                        <Button className={`btn_cancer`} onClick={handleNotificationCancel}>
                           Hủy
                        </Button>
                        <Button className={`btn_ok`}>Bật thông báo</Button>
                     </div>
                  </div>
               </Modal>
            </div>
            <div>
               <Modal className={`thuc_modal ${styles.thuc_pin}`} title="Từ chối kềm theo ý kiến đóng góp" open={isModalRefuseOpen} onCancel={handleRefuseCancel} footer={null}>
                  <div className={styles.modal_container2}>
                     <h3>Lý do từ chối</h3>
                     <p>Ý kiến này sẽ được chia sẻ với Nguyễn Thế Đạt sau khi bạn từ chối yêu cầu của họ. Họ sẽ không thấy tên hoặc thông tin cá nhân khác của bạn.</p>
                     <textarea name="" id="" cols="10" rows="5" placeholder="Đóng góp ý kiến" className={styles.textarea}></textarea>
                     <div className={styles.btn}>
                        <Button className={`btn_cancer`} onClick={handleRefuseCancel}>
                           Hủy
                        </Button>
                        <Button className={`btn_ok`}>Xác nhận</Button>
                     </div>
                  </div>
               </Modal>
            </div>
            <Time isOpen={isCalenderOpen} onClose={handleTimeCancel} />
         </div>
      </>
   );
};
export default PostWaiting;
