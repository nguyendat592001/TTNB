import React, { useState } from "react";
import type { MenuProps } from "antd";
import { Dropdown, Image, Modal } from "antd";
import styles from "./nhanvien.module.scss";
import Themnoilamviec from "./Themnoilamviec";
import Editnoilamviec from "./EditNoiLamViec";

const DropNoiLamViec = (props: any) => {
  const [nhanvien, setNhanvien] = useState(false);
  const [edit, setEdit] = useState(false);
  const [del, setDel] = useState(false);
  const okdel = () => {
    setDel(false);
  };
  const canceldel = () => {
    setDel(false);
  };
  const items: MenuProps["items"] = [
    {
      label: (
        <p className={styles.item} onClick={() => setNhanvien(true)}>
          <Image
            alt="anh-loi"
            src={"/img/nv_add-circle_blue.svg"}
            preview={false}
          />
          Thêm nơi làm việc
        </p>
      ),
      key: "0",
    },
    {
      label: (
        <p className={styles.item} onClick={() => setEdit(true)}>
          <Image alt="anh-loi" src={"/img/nv_pen.svg"} preview={false} />
          Chỉnh sửa
        </p>
      ),
      key: "1",
    },
    {
      label: (
        <p
          className={styles.item}
          onClick={() => {
            setDel(true);
          }}
        >
          <Image alt="anh-loi" src={"/img/public_del.svg"} preview={false} />
          Xóa nơi làm việc
        </p>
      ),
      key: "2",
    },
  ];
  return (
    <Dropdown menu={{ items }} trigger={["click"]}>
      <a onClick={(e) => e.preventDefault()}>
        <p className={styles.item}>
          <Image alt="" src={"/img/xem-them.svg"} preview={false} />
        </p>
        {nhanvien && (
          <Themnoilamviec nhanvien={nhanvien} setNhanvien={setNhanvien} />
        )}
        {edit && <Editnoilamviec edit={edit} setEdit={setEdit} />}
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
            <div className={styles.button}>
              <button className={styles.huy} onClick={canceldel}>
                Hủy
              </button>
              <button className={styles.ok} onClick={okdel}>
                Lưu
              </button>
            </div>
          </div>
        </Modal>
      </a>
    </Dropdown>
  );
};

export default DropNoiLamViec;
