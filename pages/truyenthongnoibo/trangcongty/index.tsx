import { Checkbox, Form, Input, Upload, Image, Button } from "antd";
import React, { useState } from "react";
import styles from "./index.module.scss";
import TruyenThongNoiBo from "..";

export default function Trangcongty() {
  const danhsach = [
    { id: 1, name: "Biên tập" },
    { id: 2, name: "Kinh doanh" },
    { id: 3, name: "Phòng SEO" },
    { id: 4, name: "Phòng đào tạo" },
    { id: 5, name: "Phòng sáng tạo" },
    { id: 6, name: "Phòng tài vụ" },
    { id: 7, name: "Phòng nhân sự" },
  ];

  const childrenContentLeft = (
    <div className={styles.thutuceoContainer}>
      <div className={styles.thutuceoContainerHeader}>
        <p className={styles.thutuceoContainerTitle}>Tạo thư mới từ CEO</p>
      </div>
      <div className={styles.thutuceoContainerContent}>
        {/* <Form
          name="emailForm"
          onFinish={onFinish}
          className={styles.thutuceoContainerContentForm}
        >
          <Form.Item
            name="subject"
            rules={[{ required: true, message: "Vui lòng nhập tiêu đề!" }]}
          >
            <p className={styles.thutuceoContainerContentFormTitle}>Tiêu đề</p>
            <Input placeholder="Nhập tiêu đề" size="large" />
          </Form.Item>
          <Form.Item name="attachment">
            <p className={styles.thutuceoContainerContentFormTitle}>
              Chọn tệp đính kèm
            </p>
            <div className={styles.thutuceoContainerContentFormUpload}>
              <Upload
                fileList={fileList as any}
                beforeUpload={(file) => {
                  setFileList([...fileList, file]);
                  return false;
                }}
                onRemove={(file) => {
                  const updatedFileList = fileList.filter(
                    (item) => item !== file
                  );
                  setFileList(updatedFileList);
                }}
              >
                <Button
                  className={`${styles.UploadContainer} flex cursor-pointer flex-align-center`}
                >
                  <UploadOutlined rev={undefined} />
                  <p>Chọn tệp</p>
                </Button>
              </Upload>
            </div>
          </Form.Item>
          <Form.Item
            name="emailContent"
            rules={[{ required: true, message: "Vui lòng nhập nội dung thư!" }]}
          >
            <p className={styles.thutuceoContainerContentFormTitle}>
              Nội dung thư
            </p>
            <Input.TextArea placeholder="Nhập nội dung thư" />
          </Form.Item>
          <Form.Item name="notificationMethod">
            <p className={styles.thutuceoContainerContentFormTitle}>
              Hình thức thông báo đến nhân viên
            </p>
            <div
              style={{
                marginBottom: "10px",
                marginTop: "10px",
              }}
            >
              <Checkbox value="email">Gửi thông báo</Checkbox>
            </div>
            <div
              style={{
                marginBottom: "10px",
                marginTop: "10px",
              }}
            >
              <Checkbox value="sms">Gửi thông qua email</Checkbox>
            </div>
          </Form.Item>
          <Form.Item
            className={styles.thutuceoContainerContentFormButton}
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <button
              type="submit"
              className={styles.thutuceoContainerContentFormButtonSubmit}
            >
              Tạo mới
            </button>
          </Form.Item>
        </Form> */}
      </div>
    </div>
  );
  const childrenContentRight = (
    <div className={styles.thutuceoContainerContentRight}>
      <div className={styles.thutuceoContainerContentRightHeader}>
        <p>Danh sách nhóm - thảo luận</p>
      </div>
      <div className={styles.thutuceoContainerContentRightContent}>
        <div className={styles.thutuceoContainerContentRightContentItem}>
          <ul>
            {danhsach.map((list, index) => (
              <li key={index} className={styles.list_gr}>
                <p>{list.name}</p>
                <Image
                  alt="phanh"
                  src={"/img/TTNB/icon_n.png"}
                  preview={false}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
  return (
    <TruyenThongNoiBo
      childrenContentLeft={childrenContentLeft}
      childrenContentRight={childrenContentRight}
    />
  );
}
