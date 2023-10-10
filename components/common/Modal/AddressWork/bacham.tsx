import React, { useEffect, useState } from "react";
import { Modal, Dropdown, Menu, Image } from "antd";

import styles from "./address.module.css";
import Serfdom from "../Serfdom/Serfdom";

export default function AddressWork(props: any): JSX.Element {
  const { cty, mota, updateValues } = props;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpenAdd, setIsModalOpenAdd] = useState(false);
  const [modalTitle, setModalTitle] = useState("Thêm mới nơi làm việc");
  const [del, setDel] = useState(false);
  const [ctynew, setCty] = useState(""); // Initialize cty with an empty string
  const [motanew, setMota] = useState("");

  useEffect(() => {
    handlechage(); // Gọi handlechage mỗi khi modalTitle thay đổi
  }, [modalTitle]);

  //del

  const showdel = () => {
    setDel(true);
  };
  const okdel = () => {
    setDel(false);
  };
  const canceldel = () => {
    setDel(false);
  };
  //edit
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
    updateValues(ctynew, motanew);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  //add
  const showModalAdd = () => {
    setIsModalOpenAdd(true);
  };
  const handleOkAdd = () => {
    setIsModalOpenAdd(false);
  };

  const handleCancelAdd = () => {
    setIsModalOpenAdd(false);
  };

  const changeModalTitle = (title: string) => {
    setModalTitle(title);
  };

  const handleDelete = () => {
    // Xử lý logic xóa ở đây
  };
  const handlechage = () => {
    if (modalTitle === "Thêm mới nơi làm việc") {
      setMota("");
      setCty("");
    } else {
      setMota(mota);
      setCty(cty);
    }
  };

  const menu = (
    <Menu>
      <Menu.Item key="add">
        <p
          className={styles.item}
          onClick={() => {
            showModalAdd();
            handlechage();
            changeModalTitle("Thêm mới nơi làm việc");
          }}
        >
          <Image
            alt="anh-loi"
            src={"/img/nv_add-circle_blue.svg"}
            preview={false}
          />
          Thêm nơi làm việc
        </p>
      </Menu.Item>
      <Menu.Item key="edit">
        <p
          className={styles.item}
          onClick={() => {
            showModal();
            handlechage();

            changeModalTitle("Chỉnh sửa nơi làm việc");
          }}
        >
          <Image alt="anh-loi" src={"/img/nv_pen.svg"} preview={false} />
          Chỉnh sửa
        </p>
      </Menu.Item>
      <Menu.Item key="delete">
        <p className={styles.item} onClick={showdel}>
          <Image alt="anh-loi" src={"/img/public_del.svg"} preview={false} />
          Xóa nơi làm việc
        </p>
      </Menu.Item>
    </Menu>
  );

  return (
    <>
      <Dropdown overlay={menu} trigger={["click"]}>
        <p className={styles.item}>
          <Image alt="" src={"/img/xem-them.svg"} preview={false} />
        </p>
      </Dropdown>
      {/* thêm mới */}
      <Modal
        className="addressbacham"
        title={modalTitle}
        open={isModalOpenAdd}
        onOk={handleOkAdd}
        onCancel={handleCancelAdd}
        footer={null}
      >
        <div className={styles.modal_body}>
          <div className={styles.company}>
            <p className={styles.title}>
              Công ty <span className={styles.red_dot}>*</span>
            </p>
            <input
              type="text"
              placeholder="Nhập tên công ty"
              value={ctynew}
              onChange={(e) => setCty(e.target.value)}
            />
          </div>
          <div className={styles.add}>
            <p className={styles.title}>
              Thành phố / Thị xã <span className={styles.red_dot}>*</span>
            </p>
            <input
              type="text"
              placeholder="Nhập thành phố thị xã"
              value={motanew}
              onChange={(e) => setMota(e.target.value)}
            />
          </div>
          <div className={styles.serfdom}>
            Chế độ :
            <Serfdom />
          </div>
          <div className={styles.btn__btn}>
            <button
              className={`${styles.huy} ${styles.btn}`}
              onClick={handleCancelAdd}
            >
              Hủy
            </button>
            <button
              className={`${styles.ok} ${styles.btn}`}
              onClick={handleOkAdd}
            >
              Lưu
            </button>
          </div>
        </div>
      </Modal>
      {/* chỉnh sửa  */}
      <Modal
        className="addressbacham"
        title={modalTitle}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
      >
        <div className={styles.modal_body}>
          <div className={styles.company}>
            <p className={styles.title}>
              Công ty <span className={styles.red_dot}>*</span>
            </p>
            <input
              type="text"
              placeholder="Nhập tên công ty"
              value={ctynew}
              onChange={(e) => setCty(e.target.value)}
            />
          </div>
          <div className={styles.add}>
            <p className={styles.title}>
              Thành phố / Thị xã <span className={styles.red_dot}>*</span>
            </p>
            <input
              type="text"
              placeholder="Nhập thành phố thị xã"
              value={motanew}
              onChange={(e) => setMota(e.target.value)}
            />
          </div>
          <div className={styles.serfdom}>
            Chế độ :
            <Serfdom />
          </div>
          <div className={styles.btn__btn}>
            <button
              className={`${styles.huy} ${styles.btn}`}
              onClick={handleCancel}
            >
              Hủy
            </button>
            <button className={`${styles.ok} ${styles.btn}`} onClick={handleOk}>
              Lưu
            </button>
          </div>
        </div>
      </Modal>
      {/* dell */}
      <Modal
        className="addressbacham"
        title={"Xóa nơi làm việc"}
        open={del}
        onOk={okdel}
        onCancel={canceldel}
        footer={null}
      >
        <div className={styles.modal_body}>
          <p className="text-center">
            Bạn có chắc chắn muốn xóa nơi làm việc này khỏi trang cá nhân của
            mình không
          </p>
          <div className={styles.btn__btn}>
            <button
              className={`${styles.huy} ${styles.btn}`}
              onClick={canceldel}
            >
              Hủy
            </button>
            <button className={`${styles.ok} ${styles.btn}`} onClick={okdel}>
              Xóa
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
}
