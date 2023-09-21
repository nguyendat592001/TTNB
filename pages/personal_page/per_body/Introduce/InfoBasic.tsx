import React from "react";
import styles from "./intro.module.scss";

export default function InfoBasic() {
  return (
    <div>
      <div className={styles.overview}>
        <div>
          <h2>Thông tin liên hệ</h2>
          <div>Địa chỉ:</div>
          <div>Số điện thoại:</div>
          <div>Email:</div>
        </div>
        <div>
          <h2>Thông tin cơ bản</h2>
          <div>Ngôn ngữ :</div>
          <div>Thêm quan điểm về tôn giáo:</div>
          <div>Ngày thành lập:</div>
        </div>
      </div>
    </div>
  );
}
