import React, { useState } from "react";
import Image from "next/image";
import Popdot from "./popdot";
import styles from "./search_per.module.scss";
import { Input, Switch } from "antd";

import { SearchOutlined } from "@ant-design/icons";
import Head from "next/head";

interface Info_post {
  id: number;
  name: string;
  date: string;
  avt: boolean;
  imgSrc: boolean;
  text: string;
  imgfr: boolean;
}
export default function Search_per() {
  const [time, setTime] = useState(false);
  const handleonClick = () => {
    setTime(!time);
  };
  const info = [
    {
      id: 1,
      name: "Nguyễn Văn Thức",
      date: "16:00 11/6/2023",
      avt: "/img/c.png",
      imgSrc: "/img/c.png",
      imgfr: "/img/friend.svg",
      text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariaturerror eaque optio repellat in alias corporis, sed ratione debitisplaceat est? Ex repellendus debitis sunt voluptatibus. Asperiores,obcaecati in. Cum! ",
    },
    {
      id: 2,
      name: "Nguyễn Văn Thức",
      date: "16:00 11/6/2023",
      avt: "/img/c.png",
      imgSrc: "/img/c.png",
      imgfr: "/img/friend.svg",
      text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariaturerror eaque optio repellat in alias corporis, sed ratione debitisplaceat est? Ex repellendus debitis sunt voluptatibus. Asperiores,obcaecati in. Cum! ",
    },
    {
      id: 3,
      name: "Nguyễn Văn Thức",
      date: "16:00 11/6/2023",
      avt: "/img/c.png",
      imgSrc: "/img/c.png",
      imgfr: "/img/friend.svg",
      text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariaturerror eaque optio repellat in alias corporis, sed ratione debitisplaceat est? Ex repellendus debitis sunt voluptatibus. Asperiores,obcaecati in. Cum! ",
    },
  ];
  const onChange = (checked: boolean) => {
    console.log(`switch to ${checked}`);
  };
  return (
    <>
      <Head>
        <title>Tìm kiếm trong trang cá nhân</title>
        <link rel="shortcut icon" href="/next.svg" type="image/x-icon" />
      </Head>
      <div className={styles.center}>
        <div className={styles.container}>
          <div className={styles.header_dn}>
            {" "}
            <div className={styles.dn}>
              <span className={styles.search_result}>Kết quả tìm kiếm</span>
              <p className={styles.in_person}>Trong trang cá nhân</p>
              <div className="search_per_input">
                <Input
                  suffix={<SearchOutlined rev={undefined} />}
                  placeholder="Tìm kiếm"
                />
              </div>

              <span className={styles.search_result}>Bộ lọc</span>
              <div className={styles.bv}>
                <span>Bài viết bạn đã xem</span>
                <Switch defaultChecked onChange={onChange} />
              </div>
              <div className={styles.bv}>
                <span>Gần đây nhất</span>
                <Switch defaultChecked onChange={onChange} />
              </div>
              <div className={styles.time_post}>
                <p>Thời gian đăng</p>
                <Image
                  width={23}
                  height={23}
                  src={"/img/next_dropdown.svg"}
                  alt={""}
                  onClick={handleonClick}
                />
              </div>
              {time ? (
                <div className={styles.time_post_year}>
                  <ul>
                    <li>Năm 2018</li>
                    <li>Năm 2018</li>
                    <li>Năm 2018</li>
                    <li>Năm 2018</li>
                    <li>Năm 2018</li>
                    <li>Năm 2018</li>
                    <li>Năm 2018</li>
                    <li>Năm 2018</li>
                  </ul>
                </div>
              ) : null}
            </div>
          </div>
          {info.map((infos, index) => (
            <div key={index} className={styles.post}>
              <div className={styles.info_post}>
                <div className={styles.info_per}>
                  <Image width={40} height={40} alt="" src={infos.avt} />
                  <div>
                    <p>{infos.name}</p>
                    <p>
                      {infos.date}.
                      <Image
                        width={21}
                        height={21}
                        alt=""
                        src={infos.imgfr}
                        style={{ marginLeft: 10 }}
                      />
                    </p>
                  </div>
                </div>
                <Popdot />
              </div>
              <div className={styles.post_post}>
                <p>{infos.text}</p>
                <Image width={144} height={144} alt="" src={infos.imgSrc} />
              </div>
              <div className={styles.footer}>
                <div className={styles.like}>
                  <Image
                    width={26}
                    height={26}
                    alt=""
                    src={"/img/search_indi_like.svg"}
                  />
                  <span>Bạn, Mipan Zu Zu và 98 người khác</span>
                </div>
                <div className={styles.comment}>
                  20 <span>Bình luận</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
