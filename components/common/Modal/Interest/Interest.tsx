import React, { useState } from "react";
import { ConfigProvider, Input, Modal } from "antd";
import Image from "next/image";
import styles from "./Interest.module.css";

function Interest() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [inputLengths, setInputLengths] = useState<number[]>([0]);
  const [interests, setInterests] = useState([""]);
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const addInterest = () => {
    setInputLengths([...inputLengths, 0]);
    setInterests([...interests, ""]);
  };
  const handleInterestChange = (index: number, value: string) => {
    const maxLength = 25;
    if (value.length <= maxLength) {
      const updatedInterests = [...interests];
      updatedInterests[index] = value;
      setInterests(updatedInterests);

      const updatedLengths = [...inputLengths];
      updatedLengths[index] = value.length;
      setInputLengths(updatedLengths);
    }
  };
  const removeInterest = (index: number) => {
    const updatedInterests = [...interests];
    updatedInterests.splice(index, 1);
    setInterests(updatedInterests);

    const updatedLengths = [...inputLengths];
    updatedLengths.splice(index, 1);
    setInputLengths(updatedLengths);
  };

  const [sothich, setSothich] = useState(["A"]);
  return (
    <>
      <div className={styles.st_sothich}>
        {sothich.map((item, index) => (
          <p key={index} className={styles.sothich}>
            {item}
          </p>
        ))}
      </div>
      <p onClick={showModal} className={styles.add__st}>
        Thêm sở thích{" "}
      </p>
      <ConfigProvider
        theme={{
          components: {
            Modal: {
              titleFontSize: 21,
            },
          },
        }}
      >
        <Modal
          className="modal_sothich"
          title="Thêm sở thích"
          open={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
          footer={null}
        >
          <p className={styles.goiy}>
            Bạn thích làm gì? Hãy chọn các sở thích phổ biến dưới đây hoặc thêm
            sở thích khác nhé.
          </p>
          {interests.map((interest, index) => (
            <div key={index} className={styles.ip_st}>
              <div className={styles.ip_st_kytu}>
                <input
                  placeholder="Nhập sở thích"
                  value={interest}
                  onChange={(e) => handleInterestChange(index, e.target.value)}
                />
                Số ký tự: {inputLengths[index]}/{25}
              </div>
              <Image
                onClick={() => removeInterest(index)}
                width={17}
                height={17}
                alt=""
                src={"/img/del_option.svg"}
              />
            </div>
          ))}
          <div className={styles.add_sothich} onClick={addInterest}>
            <Image
              width={18}
              height={18}
              alt=""
              src={"/img/nv_add-circle_blue.svg"}
            />
            Thêm sở thích
          </div>
          <div className={styles.btn}>
            <button className={styles.huy} onClick={handleCancel}>
              Hủy
            </button>
            <button className={styles.ok} onClick={handleOk}>
              Lưu
            </button>
          </div>
        </Modal>
      </ConfigProvider>
    </>
  );
}
export default Interest;
