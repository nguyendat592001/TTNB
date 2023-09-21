import React from "react";
import styles from "./index.module.css";
import { Image, Input, Card } from "antd";
import { useRouter } from "next/router";
import { TeamOutlined, UserSwitchOutlined, UserAddOutlined, UserOutlined, SearchOutlined } from "@ant-design/icons";

const App = () => {
   const router = useRouter();

   const data = [
      {
         img: "/img/before_login/img.jpg",
         name: "Thức Đẹp Trai",
         friend: "666 bạn chung",
      },
      {
         img: "/img/before_login/img2.jpg",
         name: "Thức Đẹp Trai",
         friend: "666 bạn chung",
      },
      {
         img: "/img/before_login/img.jpg",
         name: "Thức Đẹp Trai",
         friend: "666 bạn chung",
      },
      {
         img: "/img/before_login/img2.jpg",
         name: "Thức Đẹp Trai",
         friend: "666 bạn chung",
      },
      {
         img: "/img/before_login/img2.jpg",
         name: "Thức Đẹp Trai",
         friend: "666 bạn chung",
      },
      {
         img: "/img/before_login/img.jpg",
         name: "Thức Đẹp Trai",
         friend: "666 bạn chung",
      },
      {
         img: "/img/before_login/img2.jpg",
         name: "Thức Đẹp Trai",
         friend: "666 bạn chung",
      },
      {
         img: "/img/before_login/img.jpg",
         name: "Thức Đẹp Trai",
         friend: "666 bạn chung",
      },
   ];
   return (
      <>
         <div className={styles.container}>
            <div className={styles.left}>
               <div className={styles.left_all}>
                  <div className={styles.left_content} onClick={() => router.push("/friend")}>
                     <div className={styles.left_icon}>
                        <TeamOutlined />
                     </div>
                     <p className={styles.left_p}>Tổng quan</p>
                  </div>
                  <div className={styles.left_content} onClick={() => router.push("/friend/addFiend")}>
                     <div className={styles.left_icon2}>
                        <UserSwitchOutlined />
                     </div>
                     <p className={styles.left_p2}>Lời mời kết bạn</p>
                  </div>
                  <div className={styles.left_content} onClick={() => router.push("/friend/suggest")}>
                     <div className={styles.left_icon3}>
                        <UserAddOutlined />
                     </div>
                     <p className={styles.left_p3}>Gợi ý</p>
                  </div>
                  <div className={styles.left_content} onClick={() => router.push("/friend/allFriend")}>
                     <div className={styles.left_icon4}>
                        <UserOutlined />
                     </div>
                     <p className={styles.left_p4}>Tất cả bạn bè</p>
                  </div>
               </div>
            </div>
            <div className={styles.right}>
               <div className={styles.search}>
                  <Input
                     className={styles.inputSearch}
                     placeholder="Tìm kiếm bạn bè "
                     size="large"
                     suffix={
                        <SearchOutlined
                           style={{
                              cursor: "pointer",
                              width: "20px",
                           }}
                           rev={undefined}
                        />
                     }
                  />
               </div>
               <div className={styles.right_none}>
                  <div className={styles.right_btn}>
                     <button className={styles.right_btn1} onClick={() => router.push("/friend")}>
                        Tổng quan
                     </button>
                     <button className={styles.right_btn2} onClick={() => router.push("/friend/addFiend")}>
                        Lời mời kết bạn
                     </button>
                     <button className={styles.right_btn3} onClick={() => router.push("/friend/suggest")}>
                        Gợi ý
                     </button>
                     <button className={styles.right_btn4} onClick={() => router.push("/friend/allFriend")}>
                        Tất cả bạn bè
                     </button>
                  </div>
               </div>
               <div className={styles.add_friend}>
                  <div>
                     <p className={styles.add_p}>Lời mời kết bạn</p>
                  </div>
                  <div>
                     <button className={styles.add_btn} onClick={() => router.push("/friend/addFiend")}>
                        Xem tất cả
                     </button>
                  </div>
               </div>
               <div className={styles.all_card}>
                  {data.map((item,key) => {
                     return (
                        <Card key={key}
                           className={`thuc_card ${styles.card}`}
                           style={{
                              width: 280,
                           }}>
                           <Image alt="/" src={item.img} height={250} preview={false} />
                           <p className={styles.name}>{item.name}</p>
                           <p className={styles.friend}>{item.friend}</p>
                           <div className={styles.friend_btn}>
                              <button className={styles.btn_acp}>Xác nhận</button>
                              <button className={styles.btn_delete}>Xóa</button>
                           </div>
                        </Card>
                     );
                  })}
               </div>
               <div className={styles.add_friend}>
                  <div>
                     <p className={styles.add_p}>Những người bạn có thể biết</p>
                  </div>
                  <div>
                     <button className={styles.add_btn} onClick={() => router.push("/friend/suggest")}>
                        Xem tất cả
                     </button>
                  </div>
               </div>
               <div className={styles.all_card}>
                  {data.map((item,key) => {
                     return (
                        <Card key={key}
                           className={`thuc_card ${styles.card}`}
                           style={{
                              width: 280,
                           }}>
                           <Image alt="/" src={item.img} height={250} preview={false} />
                           <p className={styles.name}>{item.name}</p>
                           <p className={styles.friend}>{item.friend}</p>
                           <div className={styles.friend_btn}>
                              <button className={styles.btn_acp}>Thêm bạn bè</button>
                              <button className={styles.btn_delete}>Gỡ bỏ</button>
                           </div>
                        </Card>
                     );
                  })}
               </div>
            </div>
         </div>
      </>
   );
};

export default App;
