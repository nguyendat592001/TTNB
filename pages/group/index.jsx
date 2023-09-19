import React, { useState } from "react";
import styles from "./index.module.css";
import { Image, Input, Card, Modal, Select, Popover, Button } from "antd";
import { useRouter } from "next/router";
import { AppstoreAddOutlined, DesktopOutlined, SearchOutlined } from "@ant-design/icons";

const App = () => {
   const router = useRouter();

   const data = [
      {
         img: "/img/group/mu1.jpg",
         name: "Fan MU Việt Nam",
         friend: "1 triệu thành viên",
      },
      {
         img: "/img/group/mu2.jpg",
         name: "Fan MU Việt Nam",
         friend: "1 triệu thành viên",
      },
      {
         img: "/img/group/mu3.jpg",
         name: "Fan MU Việt Nam",
         friend: "1 triệu thành viên",
      },
      {
         img: "/img/group/mu4.jpg",
         name: "Fan MU Việt Nam",
         friend: "1 triệu thành viên",
      },
      {
         img: "/img/group/mu1.jpg",
         name: "Fan MU Việt Nam",
         friend: "1 triệu thành viên",
      },
      {
         img: "/img/group/mu2.jpg",
         name: "Fan MU Việt Nam",
         friend: "1 triệu thành viên",
      },
      {
         img: "/img/group/mu3.jpg",
         name: "Fan MU Việt Nam",
         friend: "1 triệu thành viên",
      },
      {
         img: "/img/group/mu4.jpg",
         name: "Fan MU Việt Nam",
         friend: "1 triệu thành viên",
      },
   ];
   const handleChange = (value) => {
      console.log(`selected ${value}`);
   };

   // modal Notification
   const [isModalNotificationOpen, setIsModalNotificationOpen] = useState(false);
   const handleNotificationCancel = () => {
      setIsModalNotificationOpen(false);
   };
   const showModalNotification = () => {
      setIsModalNotificationOpen(true);
   };
   //modal ghim
   const [isModalPinOpen, setIsModalPinOpen] = useState(false);
   const handlePinCancel = () => {
      setIsModalPinOpen(false);
   };
   const showModalPin = () => {
      setIsModalPinOpen(true);
   };
   const initialDataForOtherUnGroups = [
      {
         id: 1,
         name: "Fan MU Việt Nam",
         img: "/img/group/mu1.jpg",
         members: 1,
      },
      {
         id: 2,
         name: "Fan MU Việt Nam",
         img: "/img/group/mu2.jpg",
         members: 2,
      },
   ];
   const initialDataForOtherGroups = [
      {
         id: 3,
         name: "Fan MU Việt Nam",
         img: "/img/group/mu3.jpg",
         members: 3,
      },
      {
         id: 4,
         name: "Fan MU Việt Nam",
         img: "/img/group/mu4.jpg",
         members: 4,
      },
   ];
   const [unPinnedGroups, setUnPinnedGroups] = useState([...initialDataForOtherUnGroups]);

   const [otherGroups, setOtherGroups] = useState([...initialDataForOtherGroups]);

   const handlePinClick = (id) => {
      const groupToPin = unPinnedGroups[id];
      setOtherGroups((prevOtherGroups) => prevOtherGroups.filter((_, index) => index !== id));
      setUnPinnedGroups((prevPinnedGroups) => [...prevPinnedGroups, groupToPin]);
   };

   const handleUnPinClick = (id) => {
      const groupToUnPin = otherGroups[id];
      setUnPinnedGroups((prevPinnedGroups) => prevPinnedGroups.filter((_, index) => index !== id));
      setOtherGroups((prevUnOtherGroups) => [...prevUnOtherGroups, groupToUnPin]);
   };
   // modal theo dõi
   const [isModalFollowOpen, setIsModalFollowOpen] = useState(false);
   const handleFollowCancel = () => {
      setIsModalFollowOpen(false);
   };
   const showModalFollow = () => {
      setIsModalFollowOpen(true);
   };
   // modal out
   const [isModalOutOpen, setIsModalOutOpen] = useState(false);
   const handleOutCancel = () => {
      setIsModalOutOpen(false);
   };
   const showModalOut = () => {
      setIsModalOutOpen(true);
   };

   // modal thêm nhóm mới
   const [isModalNewOpen, setIsModalNewOpen] = useState(false);
   const handleNewCancel = () => {
      setIsModalNewOpen(false);
   };
   const showModalNew = () => {
      setIsModalNewOpen(true);
   };
   //popover
   const text = <span style={{ paddingLeft: "20px" }}>Cài đặt nhóm</span>;
   const content = (
      <div style={{ padding: "0px 20px 20px 20px" }}>
         <p className={styles.modal_p}>
            Bạn có thể quản lý cách nhận thông báo về
            <br /> thông tin mới của Nhóm.
         </p>
         <div>
            <button className={styles.modal_btn} onClick={showModalNotification}>
               <Image alt="/" src={"/img/group/setting.svg"} width={25} height={25} preview={false} />
               <p>Tùy chỉnh thông báo</p>
            </button>
            <button className={styles.modal_btn} onClick={showModalPin}>
               <Image alt="/" src={"/img/group/ghim.svg"} width={25} height={25} preview={false} />
               <p>Ghim</p>
            </button>
            <button className={styles.modal_btn} onClick={showModalFollow}>
               <Image alt="/" src={"/img/group/follow.svg"} width={25} height={25} preview={false} />
               <p>Đang theo dõi</p>
            </button>
            <button className={styles.modal_btn} onClick={showModalOut}>
               <Image alt="/" src={"/img/group/out.svg"} width={25} height={25} preview={false} />
               <p>Rời khỏi nhóm</p>
            </button>
         </div>
      </div>
   );
   return (
      <>
         <div className={styles.container}>
            <div className={styles.left}>
               <div className={styles.left_all}>
                  <div className={styles.left_group}>
                     <p className={styles.left_group_p}>Nhóm</p>
                     <Popover className={`thuc_popover_group`} title={text} content={content} trigger="click" arrow={false}>
                        <button className={styles.left_group_btn}>Cài đặt</button>
                     </Popover>
                  </div>
                  <div className={styles.search}>
                     <Input
                        className={styles.inputSearch}
                        placeholder="Tìm kiếm nhóm "
                        size="large"
                        suffix={
                           <SearchOutlined
                              style={{
                                 cursor: "pointer",
                                 width: "20px",
                              }}
                              rev={undefined}
                           />
                        }
                     />
                  </div>
                  <div className={styles.left_allcontent}>
                     <div className={styles.left_content} onClick={() => router.push("/group")}>
                        <div className={styles.left_icon2}>
                           <DesktopOutlined />
                        </div>
                        <p className={styles.left_p2}>Bảng feed của bạn</p>
                     </div>
                     <div className={styles.left_content} onClick={() => router.push("/group/discover")}>
                        <div className={styles.left_icon3}>
                           <AppstoreAddOutlined />
                        </div>
                        <p className={styles.left_p3}>Khám phá</p>
                     </div>
                  </div>
                  <div className={styles.left_button}>
                     <button className={styles.left_btn} onClick={showModalNew}>
                        + Tạo nhóm mới
                     </button>
                  </div>
                  <div className={styles.group}>
                     <p className={styles.add_p}>Nhóm do bạn quản lý</p>
                     <div className={styles.my_group} onClick={() => router.push("/group/your-group")}>
                        <Image alt="/" src={"/img/group/mu1.jpg"} style={{ borderRadius: "8px" }} width={50} height={50} preview={false} />
                        <div>
                           <p>Fan MU Việt Nam</p>
                           <p>1 tr thành viên</p>
                        </div>
                     </div>
                  </div>
                  <div className={styles.group2}>
                     <p className={styles.add_p}>Nhóm bạn đã tham gia</p>
                     <div className={styles.my_group}>
                        <Image alt="/" src={"/img/group/mu2.jpg"} style={{ borderRadius: "8px" }} width={50} height={50} preview={false} />
                        <div>
                           <p>Fan MU Việt Nam</p>
                           <p>1 tr thành viên</p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div className={styles.right}>
               <div>
                  <p className={styles.add_p}>Gợi ý</p>
               </div>

               <div className={styles.all_card}>
                  {data.map((item) => {
                     return (
                        <Card
                           className={`thuc_card ${styles.card}`}
                           style={{
                              width: 280,
                           }}>
                           <Image alt="/" src={item.img} height={250} preview={false} />
                           <p className={styles.name}>{item.name}</p>
                           <p className={styles.friend}>{item.friend}</p>
                           <div className={styles.friend_btn}>
                              <button className={styles.btn_acp}>Tham gia nhóm</button>
                           </div>
                        </Card>
                     );
                  })}
               </div>
            </div>

            <div>
               <Modal className={`thuc_notification ${styles.thuc_notification}`} title="Tùy chỉnh thông báo" open={isModalNotificationOpen} onCancel={handleNotificationCancel} footer={null}>
                  <div className={styles.modal_container}>
                     <div className={styles.search}>
                        <Input
                           className={styles.inputSearch_modal}
                           placeholder="Tìm kiếm nhóm "
                           size="large"
                           suffix={
                              <SearchOutlined
                                 style={{
                                    cursor: "pointer",
                                    width: "20px",
                                 }}
                                 rev={undefined}
                              />
                           }
                        />
                     </div>
                     <div className={styles.modal2}>
                        <div className={styles.modal2_fl}>
                           <Image alt="/" src={"/img/group/mu2.jpg"} width={50} height={50} style={{ borderRadius: "8px" }} preview={false} />
                           <div className={styles.modal2_p}>
                              <h4>Fan MU Việt Nam</h4>
                              <p>1 tr thành viên</p>
                           </div>
                        </div>
                        <div>
                           <Select
                              defaultValue="Tất cả bài viết"
                              style={{
                                 width: 200,
                              }}
                              onChange={handleChange}
                              options={[
                                 {
                                    label: "Bài viết nổi bật",
                                    value: "Bài viết nổi bật",
                                 },

                                 {
                                    label: "Bài viết của bạn bè",
                                    value: "Bài viết của bạn bè",
                                 },
                              ]}
                           />
                        </div>
                     </div>
                     <div className={styles.modal2}>
                        <div className={styles.modal2_fl}>
                           <Image alt="/" src={"/img/group/mu2.jpg"} width={50} height={50} style={{ borderRadius: "8px" }} preview={false} />
                           <div className={styles.modal2_p}>
                              <h4>Fan MU Việt Nam</h4>
                              <p>1 tr thành viên</p>
                           </div>
                        </div>
                        <div>
                           <Select
                              defaultValue="Tất cả bài viết"
                              style={{
                                 width: 200,
                              }}
                              onChange={handleChange}
                              options={[
                                 {
                                    label: "Bài viết nổi bật",
                                    value: "Bài viết nổi bật",
                                 },

                                 {
                                    label: "Bài viết của bạn bè",
                                    value: "Bài viết của bạn bè",
                                 },
                              ]}
                           />
                        </div>
                     </div>
                     <div className={styles.modal2}>
                        <div className={styles.modal2_fl}>
                           <Image alt="/" src={"/img/group/mu2.jpg"} width={50} height={50} style={{ borderRadius: "8px" }} preview={false} />
                           <div className={styles.modal2_p}>
                              <h4>Fan MU Việt Nam</h4>
                              <p>1 tr thành viên</p>
                           </div>
                        </div>
                        <div>
                           <Select
                              defaultValue="Tất cả bài viết"
                              style={{
                                 width: 200,
                              }}
                              onChange={handleChange}
                              options={[
                                 {
                                    label: "Bài viết nổi bật",
                                    value: "Bài viết nổi bật",
                                 },

                                 {
                                    label: "Bài viết của bạn bè",
                                    value: "Bài viết của bạn bè",
                                 },
                              ]}
                           />
                        </div>
                     </div>
                  </div>
               </Modal>
            </div>
            <div>
               <Modal className={`thuc_pin ${styles.thuc_pin}`} title="Ghim nhóm" open={isModalPinOpen} onCancel={handlePinCancel} footer={null}>
                  <div className={styles.modal_container}>
                     <div>
                        <h3>Đã ghim</h3>

                        {unPinnedGroups.map((group, index) => (
                           <div key={group.id} className={styles.modal3}>
                              <div className={styles.modal3_fl}>
                                 <Image alt="/" src={group.img} width={50} height={50} style={{ borderRadius: "8px" }} preview={false} />
                                 <div className={styles.modal2_p}>
                                    <h4>{group.name}</h4>
                                    <p>{group.members} tr thành viên</p>
                                 </div>
                              </div>
                              <div>
                                 <button className={styles.unpin} onClick={() => handleUnPinClick(index)}>
                                    Bỏ ghim
                                 </button>
                              </div>
                           </div>
                        ))}
                     </div>
                     <div>
                        <h3>Các nhóm khác</h3>
                        {otherGroups.map((group, index) => (
                           <div key={group.id} className={styles.modal3}>
                              <div className={styles.modal3_fl}>
                                 <Image alt="/" src={group.img} width={50} height={50} style={{ borderRadius: "8px" }} preview={false} />
                                 <div className={styles.modal2_p}>
                                    <h4>{group.name}</h4>
                                    <p>{group.members} tr thành viên</p>
                                 </div>
                              </div>
                              <div>
                                 <button className={styles.pin} onClick={() => handlePinClick(index)}>
                                    Ghim
                                 </button>
                              </div>
                           </div>
                        ))}
                     </div>
                  </div>
               </Modal>
            </div>
            <div>
               <Modal className={`thuc_modal ${styles.modal_follow}`} title="Đang theo dõi" open={isModalFollowOpen} onCancel={handleFollowCancel} footer={null}>
                  <div className={styles.modal_container}>
                     <div className={styles.search}>
                        <Input
                           className={styles.inputSearch_modal}
                           placeholder="Tìm kiếm nhóm "
                           size="large"
                           suffix={
                              <SearchOutlined
                                 style={{
                                    cursor: "pointer",
                                    width: "20px",
                                 }}
                                 rev={undefined}
                              />
                           }
                        />
                     </div>
                     <div className={styles.modal2}>
                        <div className={styles.modal2_fl}>
                           <Image alt="/" src={"/img/group/mu2.jpg"} width={50} height={50} style={{ borderRadius: "8px" }} preview={false} />
                           <div className={styles.modal2_p}>
                              <h4>Fan MU Việt Nam</h4>
                              <p>1 tr thành viên</p>
                           </div>
                        </div>
                        <div>
                           <button className={styles.unpin}>Bỏ theo dõi</button>
                        </div>
                     </div>
                     <div className={styles.modal2}>
                        <div className={styles.modal2_fl}>
                           <Image alt="/" src={"/img/group/mu2.jpg"} width={50} height={50} style={{ borderRadius: "8px" }} preview={false} />
                           <div className={styles.modal2_p}>
                              <h4>Fan MU Việt Nam</h4>
                              <p>1 tr thành viên</p>
                           </div>
                        </div>
                        <div>
                           <button className={styles.pin}>Theo dõi</button>
                        </div>
                     </div>
                  </div>
               </Modal>
            </div>

            <div>
               <Modal className={`thuc_modal ${styles.modal_out}`} title="Rời khỏi nhóm" open={isModalOutOpen} onCancel={handleOutCancel} footer={null}>
                  <div className={styles.modal_container}>
                     <div className={styles.search}>
                        <Input
                           className={styles.inputSearch_modal}
                           placeholder="Tìm kiếm nhóm "
                           size="large"
                           suffix={
                              <SearchOutlined
                                 style={{
                                    cursor: "pointer",
                                    width: "20px",
                                 }}
                                 rev={undefined}
                              />
                           }
                        />
                     </div>
                     <div className={styles.modal2}>
                        <div className={styles.modal2_fl}>
                           <Image alt="/" src={"/img/group/mu2.jpg"} width={50} height={50} style={{ borderRadius: "8px" }} preview={false} />
                           <div className={styles.modal2_p}>
                              <h4>Fan MU Việt Nam</h4>
                              <p>1 tr thành viên</p>
                           </div>
                        </div>
                        <div>
                           <button className={styles.delete}>Xóa nhóm</button>
                        </div>
                     </div>
                     <div className={styles.modal2}>
                        <div className={styles.modal2_fl}>
                           <Image alt="/" src={"/img/group/mu2.jpg"} width={50} height={50} style={{ borderRadius: "8px" }} preview={false} />
                           <div className={styles.modal2_p}>
                              <h4>Fan MU Việt Nam</h4>
                              <p>1 tr thành viên</p>
                           </div>
                        </div>
                        <div>
                           <button className={styles.delete}>Xóa nhóm</button>
                        </div>
                     </div>
                  </div>
               </Modal>
            </div>

            <div>
               <Modal className={`thuc_modal ${styles.modal_new}`} title="Tạo nhóm mới" open={isModalNewOpen} onCancel={handleNewCancel} footer={null}>
                  <div className={styles.modal_container_new}>
                     <div>
                        <p className={styles.p_new}>Tên nhóm</p>
                        <Input placeholder="Tên nhóm mới"></Input>
                     </div>
                     <div>
                        <p className={styles.p_new}>Quyền riêng tư</p>
                        <div className={styles.select_new}>
                           <Select
                              defaultValue="Chọn"
                              onChange={handleChange}
                              className={styles.select_new}
                              options={[
                                 {
                                    label: "Công khai",
                                    value: "Công khai",
                                 },

                                 {
                                    label: "Riêng tư",
                                    value: "Riêng tư",
                                 },
                              ]}
                           />
                        </div>
                     </div>
                     <div>
                        <p className={styles.p_new}>Mời bạn bè</p>
                        <Input></Input>
                     </div>
                     <div className={styles.btn_new}>
                        <Button className={`thuc_btn ${styles.btn_cancer}`} onClick={handleNewCancel}>
                           Hủy
                        </Button>
                        <Button className={`thuc_btn ${styles.btn_ok}`}>Tạo</Button>
                     </div>
                  </div>
               </Modal>
            </div>
         </div>
      </>
   );
};

export default App;
