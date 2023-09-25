import React from "react";
import styles from "./index.module.css"


const Posted = () =>{
return(
    <>
    <div>
    <div className={styles.left_container}>
               <div className={styles.left}>
                  <div className={styles.left_all}>
                     <div className={styles.left_group}>
                        <p className={styles.left_group_p}>Nhóm</p>
                        <Popover className={`thuc_popover_group`} title={text} content={content} trigger="click" arrow={false}>
                           <button className={styles.left_group_btn}>Cài đặt</button>
                        </Popover>
                     </div>
                     <div className={styles.search}>
                        <Input
                           className={styles.inputSearch}
                           placeholder="Tìm kiếm nhóm "
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
                     <div className={styles.left_allcontent}>
                        <div className={styles.left_content} onClick={() => router.push("/group")}>
                           <div className={styles.left_icon2}>
                              <DesktopOutlined />
                           </div>
                           <p className={styles.left_p2}>Bảng feed của bạn</p>
                        </div>
                        <div className={styles.left_content} onClick={() => router.push("/group/discover")}>
                           <div className={styles.left_icon3}>
                              <AppstoreAddOutlined />
                           </div>
                           <p className={styles.left_p3}>Khám phá</p>
                        </div>
                     </div>
                     <div className={styles.left_button}>
                        <button className={styles.left_btn} onClick={showModalNew}>
                           + Tạo nhóm mới
                        </button>
                     </div>
                     <div className={styles.group}>
                        <p className={styles.add_p}>Nhóm do bạn quản lý</p>
                        <div className={styles.my_group} onClick={() => router.push("/group/your-group")}>
                           <Image alt="/" src={"/img/group/mu1.jpg"} style={{ borderRadius: "8px" }} width={50} height={50} preview={false} />
                           <div>
                              <p>Fan MU Việt Nam</p>
                              <p>1 tr thành viên</p>
                           </div>
                        </div>
                     </div>
                     <div className={styles.group2}>
                        <p className={styles.add_p}>Nhóm bạn đã tham gia</p>
                        <div className={styles.my_group}>
                           <Image alt="/" src={"/img/group/mu2.jpg"} style={{ borderRadius: "8px" }} width={50} height={50} preview={false} />
                           <div>
                              <p>Fan MU Việt Nam</p>
                              <p>1 tr thành viên</p>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div className={styles.right}>
               <div>
                  <p className={styles.add_p}>Gợi ý</p>
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
                              <button className={styles.btn_acp}>Tham gia nhóm</button>
                           </div>
                        </Card>
                     );
                  })}
               </div>
            </div>
    </div>
    </>
)

}
export default Posted;