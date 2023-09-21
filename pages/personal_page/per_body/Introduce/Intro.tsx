import React, { useState } from "react";
import styles from "./intro.module.scss";
import Image from "next/image";
import AddressWork from "@/components/common/Modal/AddressWork/address";
import GrPrivate from "../../components/TabsGr/GrPrivate";
import InfoBasic from "./InfoBasic";

export default function Intro() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [renderedComponent, setRenderedComponent] =
    useState<React.ReactNode | null>(null);
  const handlePClick = (index: any) => {
    setActiveIndex(index);
    switch (index) {
      case 0:
        setRenderedComponent(<AddressWork />);
        break;
      case 1:
        setRenderedComponent(<InfoBasic />);
        break;
      case 2:
        setRenderedComponent(<AddressWork />);
        break;
      case 3:
        setRenderedComponent(<AddressWork />);
        break;
      default:
        setRenderedComponent(null);
        break;
    }
  };

  const isPActive = (index: any) => {
    return index === activeIndex;
  };
  return (
    <>
      <div className={styles.main}>
        <div className={styles.intro}>
          <div className={styles.intro__gt}>Giới thiệu</div>
          <section className={styles.noti}>
            <p
              className={`${styles.tongquan} ${isPActive(0) ? "active" : ""}`}
              onClick={() => handlePClick(0)}
            >
              Tổng quan
            </p>
            <p
              className={`${styles.info} ${isPActive(1) ? "active" : ""}`}
              onClick={() => handlePClick(1)}
            >
              Thông tin liên hệ và cơ bản
            </p>
            <p
              className={`${styles.family} ${isPActive(2) ? "active" : ""}`}
              onClick={() => handlePClick(2)}
            >
              Gia đình và các mối liên hệ
            </p>
            <p
              className={`${styles.about} ${isPActive(3) ? "active" : ""}`}
              onClick={() => handlePClick(3)}
            >
              Chi tiết về bạn
            </p>
          </section>
        </div>

        <div>{renderedComponent}</div>
      </div>
    </>
  );
}
