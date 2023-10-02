import React from "react";
import styles from "./index.module.css";
import { Image } from "antd";
import LeftContent from "../../../../components/thuc_components/left-nav-group/leftContent";
const App = () => {
   return (
      <>
         <div className={styles.container}>
            <div className={styles.left_container}>
               <div className={styles.left}>
                  <LeftContent />
               </div>
            </div>
            <div className={styles.right}>
               <div className={styles.right_error}>
                  <Image alt="/" src={"/img/group/error.svg"} preview={false} />
                  <h3>Không có nội dung nào</h3>
               </div>
            </div>
         </div>
      </>
   );
};

export default App;
