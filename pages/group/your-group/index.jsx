import React, { useState, useEffect } from "react";
import styles from "./index.module.css";
import { Image, Input, Popover, Modal, Select, Upload, Button, Tabs } from "antd";
import { useRouter } from "next/router";
import { CameraOutlined, CloseOutlined } from "@ant-design/icons";
import LeftNav from "../../../components/thuc_components/left-nav-group/leftNav";
import OptionPost from "../../../components/common/Popover/OptionPost";
import Discuss from "./discuss";
const App = () => {
   const router = useRouter();
   //tabs

   const items = [
      {
         key: "1",
         label: "Thảo luận",
         children: <Discuss />,
      },
      {
         key: "2",
         label: "Bài viết đã ghim",
         children: "Content of Tab Pane 2",
      },
      {
         key: "3",
         label: "Video",
         children: "Content of Tab Pane 3",
      },
      {
         key: "4",
         label: "Thành viên",
         children: "Content of Tab Pane 4",
      },
      {
         key: "5",
         label: "File phương tiện",
         children: "Content of Tab Pane 5",
      },
      {
         key: "6",
         label: "File",
         children: "Content of Tab Pane 6",
      },
   ];
   //data chi tiết
   const [isOptionPopoverOpen, setIsOptionPopoverOpen] = useState(false);
   const menuOption = [
      {
         key: "1",
         icon: <Image src="/img/group/dot1.svg" alt="icon" preview={false} />,
         text: "Nội dung của bạn",
      },
      {
         key: "2",
         icon: <Image src="/img/group/dot21.svg" alt="icon" preview={false} />,
         text: "Bỏ ghim nhóm",
      },
      {
         key: "3",
         icon: <Image src="/img/group/dot3.svg" alt="icon" preview={false} />,
         text: "Chia sẻ",
      },
      {
         key: "4",
         icon: <Image src="/img/group/dot4.svg" alt="icon" preview={false} />,
         text: "Cài đặt thông báo",
      },
      {
         key: "5",
         icon: <Image src="/img/group/dot5.svg" alt="icon" preview={false} />,
         text: "Theo dõi nhóm",
      },
      {
         key: "6",
         icon: <Image src="/img/group/dot6.svg" alt="icon" preview={false} />,
         text: "Tạm dừng nhóm",
      },
      {
         key: "7",
         icon: <Image src="/img/group/dot7.svg" alt="icon" preview={false} />,
         text: "Xóa nhóm",
      },
      {
         key: "8",
         icon: <Image src="/img/group/dot8.svg" alt="icon" preview={false} />,
         text: "Tìm kiếm",
      },
   ];
   //data invited
   const data = [
      {
         id: "1",
         img: "/img/group/mu1.jpg",
         name: "Thức Đẹp Trai",
      },
      {
         id: "2",
         img: "/img/group/mu2.jpg",
         name: "Thức Đẹp Trai",
      },
      {
         id: "3",
         img: "/img/group/mu3.jpg",
         name: "Thức Đẹp Trai",
      },
      {
         id: "4",
         img: "/img/group/mu4.jpg",
         name: "Thức Đẹp Trai",
      },
   ];
   const initialCheckedItems = [];
   const [checkedItems, setCheckedItems] = useState(initialCheckedItems);

   useEffect(() => {
      setCheckedItems(initialCheckedItems);
   }, []);
   const [isModalInviteOpen, setIsModalInviteOpen] = useState(false);
   const handleInviteCancel = () => {
      setIsModalInviteOpen(false);
   };
   const showModalInvite = () => {
      setIsModalInviteOpen(true);
   };
   const operations = (
      <Popover
         placement="bottomRight"
         content={
            <OptionPost
               menuItems={menuOption}
               //   onMenuItemClick={handlePopoverItemClick}
            />
         }
         trigger="click"
         arrow={false}
         open={isOptionPopoverOpen}
         onOpenChange={(open) => setIsOptionPopoverOpen(open)}>
         <Image
            src="/img/group/dot.png"
            alt="icon"
            width={40}
            height={40}
            preview={false}
            onClick={() => setIsOptionPopoverOpen(!isOptionPopoverOpen)}
            style={{
               cursor: "pointer",
               marginRight: "10px",
               transform: "rotate(90deg)",
            }}
         />
      </Popover>
   );
   return (
      <>
         <div className={styles.container}>
            <div className={styles.left_container}>
               <div className={styles.left}>
                  <LeftNav />
               </div>
            </div>
            <div className={styles.right}>
               <div className={styles.right_header}>
                  <div>
                     <Image alt="/" className={styles.img_header} width={1103} height={345} src="/img/group/tq5.jpg" preview={false} />
                     <div className={styles.cam_header}>
                        <CameraOutlined />
                     </div>
                  </div>

                  <div className={styles.banner}>
                     <p>Nhóm của Fan MU Việt Nam</p>
                  </div>
                  <div className={styles.banner_content}>
                     <div className={styles.banner_name}>
                        <p className={styles.left_p3}>Fan MU Việt Nam</p>
                        <div className={styles.banner_text}>
                           <p>Nhóm công khai</p>
                           <p className={styles.left_p2}>1 tr thành viên</p>
                        </div>
                        <div className={styles.inv}>
                           <Image alt="/" src={"/img/group/mu1.jpg"} style={{ borderRadius: "50%" }} width={70} height={70} preview={false} />
                           <button className={styles.btn_inv} onClick={showModalInvite}>
                              + Mời
                           </button>
                        </div>
                     </div>
                     <div>
                        <Tabs tabBarExtraContent={operations} items={items} />
                     </div>
                  </div>
               </div>
            </div>
            <div>
               <Modal className={`thuc_modal ${styles.modal_out}`} title="Mời bạn bè" open={isModalInviteOpen} onCancel={handleInviteCancel} footer={null}>
                  <div className={styles.modal_container}>
                     <div className={styles.input}>
                        <Input placeholder="Tìm kiếm bạn bè" />
                     </div>
                     <div className={styles.banner_fr}>
                        <p className={styles.fr_p}>Bạn bè</p>
                        {data.map((item) => {
                           const handleCheckboxChange = (itemId) => {
                              if (checkedItems.includes(itemId)) {
                                 setCheckedItems((prevCheckedItems) => prevCheckedItems.filter((id) => id !== itemId));
                              } else {
                                 setCheckedItems((prevCheckedItems) => [...prevCheckedItems, itemId]);
                              }
                           };

                           return (
                              <div key={id} className={styles.fr}>
                                 <div className={styles.fr_img}>
                                    <Image alt="/" src={item.img} style={{ borderRadius: "50%" }} width={50} height={50} preview={false} />
                                    <p className={styles.fr_name}>{item.name}</p>
                                 </div>
                                 <div>
                                    <input
                                       value={item.id}
                                       onChange={() => handleCheckboxChange(item.id)}
                                       type="checkbox"
                                       style={{ width: "20px", height: "20px" }}
                                       checked={checkedItems.includes(item.id)}
                                    />
                                 </div>
                              </div>
                           );
                        })}
                        <div className={styles.border}>
                           <p>Đã chọn {checkedItems.length} người</p>
                           <div className={styles.border_item}>
                              {checkedItems.map((itemId) => {
                                 const selectedItem = data.find((item) => item.id === itemId);
                                 const handleCheckboxCancer = () => {
                                    setCheckedItems((prevSelectedItems) => prevSelectedItems.filter((id) => id !== itemId));
                                 };
                                 return (
                                    <div key={id} className={styles.fr_seclected}>
                                       <Image alt="/" src={selectedItem.img} style={{ borderRadius: "50%" }} width={30} height={30} preview={false} />
                                       <p key={selectedItem.id} className={styles.selectedName}>
                                          {selectedItem.name}
                                       </p>
                                       <CloseOutlined onClick={handleCheckboxCancer} />
                                    </div>
                                 );
                              })}
                           </div>
                        </div>
                     </div>
                     <div className={styles.fr_btn}>
                        <Button className={`btn_cancer`} onClick={handleInviteCancel}>
                           Hủy
                        </Button>
                        <Button className={`btn_ok`}>Mời</Button>
                     </div>
                  </div>
               </Modal>
            </div>
         </div>
      </>
   );
};

export default App;
