import React, { useState } from "react";
import styles from "./index.module.css";
import { Modal, Image, Form, Button, Select, Input, Space } from "antd";
import LeftNav from "../../../../components/thuc_components/left-nav-group/leftNav";
import { MinusCircleOutlined } from "@ant-design/icons";
const Question = () => {
   const [isModalNewOpen, setIsModalNewOpen] = useState(false);
   const showModalNew = () => {
      setIsModalNewOpen(true);
   };
   const handleNewCancel = () => {
      setIsModalNewOpen(false);
   };
   const onFinish = (values) => {
      console.log("Received values of form:", values);
   };
   const [selectedOption, setSelectedOption] = useState("Câu trả lời tự do");
   const [isFormOpen, setIsFormOpen] = useState(false);
   const [isCheckboxOpen, setIsCheckboxOpen] = useState(false);
   const [isRadioOpen, setIsRadioOpen] = useState(false);
   const handleCheckboxOpen = () => {
      setIsFormOpen(true);
      setIsCheckboxOpen(true);
      setIsRadioOpen(false);
   };
   const handleRadioOpen = () => {
      setIsFormOpen(true);
      setIsCheckboxOpen(false);
      setIsRadioOpen(true);
   };
   const handleClose = () => {
      setIsFormOpen(false);
      setIsCheckboxOpen(false);
      setIsRadioOpen(false);
   };
   const handleChange = (value) => {
      setSelectedOption(value);
      if (value === "Trắc nghiệm") {
         handleRadioOpen();
      }
      if (value === "Ô để đánh dấu") {
         handleCheckboxOpen();
      }
      if (value === "Câu trả lời tự do") {
         handleClose();
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
                  <h2>Câu hỏi chọn thành viên</h2>
                  <Button className={`btn_ok`} onClick={showModalNew}>
                     Thêm câu hỏi
                  </Button>
               </div>
            </div>
            <div>
               <Modal className={`thuc_modal ${styles.thuc_pin}`} title="Từ chối kềm theo ý kiến đóng góp" open={isModalNewOpen} onCancel={handleNewCancel} footer={null}>
                  <div className={styles.modal_container}>
                     <Select
                        defaultValue="Câu trả lời tự do"
                        style={{
                           width: 250,
                        }}
                        onChange={handleChange}
                        options={[
                           {
                              value: "Câu trả lời tự do",
                              label: "Câu trả lời tự do",
                           },
                           {
                              value: "Ô để đánh dấu",
                              label: "Ô để đánh dấu",
                           },
                           {
                              value: "Trắc nghiệm",
                              label: "Trắc nghiệm",
                           },
                        ]}
                     />

                     <textarea placeholder="Câu hỏi" name="" id="" cols="10" rows="5" className={styles.textarea}></textarea>
                     {isFormOpen && (
                        <Form
                           className={`thuc_form`}
                           onFinish={onFinish}
                           style={{
                              width: "100%",
                           }}
                           autoComplete="off">
                           <Form.List name="users">
                              {(fields, { add, remove }) => (
                                 <>
                                    {fields.map(({ key, name, ...restField }) => (
                                       <Space
                                          className={`thuc_space`}
                                          key={key}
                                          style={{
                                             display: "flex",
                                             marginBottom: 8,
                                          }}
                                          align="baseline">
                                          <div className={styles.space_item}>
                                             {isCheckboxOpen && <Input className={`thuc_input_checkbox`} type="checkbox"></Input>}
                                             {isRadioOpen && <Input className={`thuc_input_checkbox`} type="radio"></Input>}
                                             <Input className={`thuc_input_space`} placeholder="Nhập lựa chọn"></Input>
                                             <MinusCircleOutlined onClick={() => remove(name)} className={`thuc_icon`} />
                                          </div>
                                       </Space>
                                    ))}
                                    <div className={styles.uploadFileItemIcon}>
                                       <Button className={`thuc_btn_full`} onClick={() => add()}>
                                          + Thêm lựa chọn
                                       </Button>
                                    </div>
                                 </>
                              )}
                           </Form.List>
                        </Form>
                     )}
                     <div className={styles.btn}>
                        <Button className={`btn_cancer`} onClick={handleNewCancel}>
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
export default Question;
