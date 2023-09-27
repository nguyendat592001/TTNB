import React, { useState } from "react";
import styles from "./index.module.css";
import { Modal, Image, Dropdown, Button, Menu, Input } from "antd";
import LeftNav from "../../../../components/thuc_components/left-nav-group/leftNav";

const AddMember = () => {
   const [isModalRefuseOpen, setIsModalRefuseOpen] = useState(false);
   const showModalRefuse = () => {
      setIsModalRefuseOpen(true);
   };
   const handleRefuseCancel = () => {
      setIsModalRefuseOpen(false);
   };

   const handleDropdownClick = (key) => {
      if (key === "3") {
         showModalRefuse();
      }
   };

   const items = [
      {
         key: "1",
         label: "Nhắn tin cho Nguyễn Thế Đạt",
      },
      {
         key: "2",
         label: "Xem trang cá nhân",
      },
      {
         key: "3",
         label: "Từ chối kèm theo ý kiến đóng góp",
      },
      {
         key: "4",
         label: "Từ chối và cấm Nguyễn Thế Đạt",
      },
   ];

   const [data, setData] = useState([
      {
         key: "1",
         img: "/img/group/tq5.jpg",
         name: "Nguyễn Thế Đạt",
         active: "15 phút trước",
      },
      {
         key: "2",
         img: "/img/group/tq3.jpg",
         name: "Nguyễn Hoàng Việt",
         active: "1 ngày trước",
      },
      {
         key: "3",
         img: "/img/group/tq2.jpg",
         name: "Thức Đẹp Trai",
         active: "30 phút trước",
      },
   ]);
   const handleApproveClickOk = (key) => {
      alert("Phê duyệt thành công");
      const updatedData = data.filter((item) => item.key !== key);
      setData(updatedData);
   };
   const handleApproveClickCancer = (key) => {
      alert("Đã từ chối yêu cầu");
      const updatedData = data.filter((item) => item.key !== key);
      setData(updatedData);
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
                  <h2>Yêu cầu làm thành viên. (10)</h2>
                  <div className={styles.header_input}>
                     <Input className={`thuc_input_full`} placeholder="Tìm kiếm theo tên"></Input>
                  </div>
               </div>
               {data.map((item) => {
                  return (
                     <div className={styles.content} key={item.key}>
                        <div className={styles.content_flex}>
                           <Image alt="" src={item.img} preview={false} width={50} height={50} style={{ borderRadius: "50%" }} />
                           <div>
                              <h3>{item.name}</h3>
                              <p>{item.active}</p>
                           </div>
                        </div>
                        <div className={styles.content_flex}>
                           <button className={styles.btn_ok} onClick={() => handleApproveClickOk(item.key)}>
                              Phê duyệt
                           </button>
                           <button className={styles.btn_cancer} onClick={() => handleApproveClickCancer(item.key)}>
                              Từ chối
                           </button>
                           <Dropdown
                              overlay={
                                 <Menu onClick={({ key }) => handleDropdownClick(key)}>
                                    {items.map((item) => (
                                       <Menu.Item key={item.key}>{item.label}</Menu.Item>
                                    ))}
                                 </Menu>
                              }
                              trigger="click"
                              placement="bottomRight"
                              arrow>
                              <Image alt="" src="/img/group/dot11.svg" preview={false} />
                           </Dropdown>
                        </div>
                     </div>
                  );
               })}
            </div>
            <div>
               <Modal className={`thuc_modal ${styles.thuc_pin}`} title="Từ chối kềm theo ý kiến đóng góp" open={isModalRefuseOpen} onCancel={handleRefuseCancel} footer={null}>
                  <div className={styles.modal_container}>
                     <h3>Lý do từ chối</h3>
                     <p>Ý kiến này sẽ được chia sẻ với Nguyễn Thế Đạt sau khi bạn từ chối yêu cầu của họ. Họ sẽ không thấy tên hoặc thông tin cá nhân khác của bạn.</p>
                     <textarea placeholder="Đóng góp ý kiến" name="" id="" cols="10" rows="5" className={styles.textarea}></textarea>
                     <div className={styles.btn}>
                        <Button className={`btn_cancer`} onClick={handleRefuseCancel}>
                           Hủy
                        </Button>
                        <Button className={`btn_ok`}>Xóa nhóm</Button>
                     </div>
                  </div>
               </Modal>
            </div>
         </div>
      </>
   );
};
export default AddMember;