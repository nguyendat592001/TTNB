import { useRouter } from "next/router";
import React, { useState } from "react";
import Image from "next/image";
import styles from "./index.module.scss";
import Link from "next/link";
import NavBlock from "./center_nav";
import CoverImage from "./center_nav/Modal/cover_image";
import EditPerPages from "@/components/common/Modal/EditPerPages/EditPages";

interface FriendExceptProps {
  isOpen: boolean;
  onClose: () => void;
}
const Center_avt = ({ isOpen, onClose }: FriendExceptProps) => {
  const router = useRouter();
  const [eidtImageWall, setEidtImageWall] = useState(false);

  return (
    <div>
      <div className={styles.center_avt}>
        <div className={styles.center_avt_header}>
          <Image width={1200} height={460} alt="anh-bia" src={"/img/c.png"} />

          <div className={styles.cover_image_container}>
            <div
              onClick={() => setEidtImageWall(true)}
              className={styles.center_cover_upload_btn}
            >
              <Image
                className={styles.center_cover_upload_img}
                width={24}
                height={24}
                alt="may-anh"
                src={"/img/nv_camera.svg"}
              />
              <span className={styles.center_cover_upload_btn_txt}>
                Chỉnh sửa ảnh bìa
              </span>
            </div>
            {eidtImageWall && (
              <CoverImage
                isOpen={eidtImageWall}
                onClose={() => setEidtImageWall(false)}
              />
            )}
          </div>
        </div>
        <div className={styles.center_avt_footer}>
          <div className={styles.center_avt_info}>
            <Image width={192} height={192} alt="anh-loi" src={"/img/c.png"} />
            <p>
              <Image
                width={30}
                height={30}
                alt="anh-loi"
                src={"/img/nv_camera.svg"}
              />
            </p>
          </div>
          <div className={styles.center_avt_info_detail}>
            <p className={styles.center_avt_name}>
              Công ty Cổ phần Thanh toán Hưng Hà
            </p>
            <p className={styles.center_avt_count_mem}>1 người theo dõi</p>
            <div className={`${styles.center_avt_6_follewer} active`}>
              <Image
                width={24}
                height={24}
                alt="anh"
                src={"/img/app_add.png"}
              />
              <Image
                width={24}
                height={24}
                alt="anh"
                src={"/img/app_add.png"}
              />
              <Image
                width={24}
                height={24}
                alt="anh"
                src={"/img/app_add.png"}
              />
            </div>
          </div>
          <div className={styles.center_avt_btn}>
            <Link href="/">
              <p>
                <Image
                  width={20}
                  height={20}
                  alt="cin"
                  src={"/img/nv_add-circle.svg"}
                />
                Thêm vào tin
              </p>
            </Link>
            <EditPerPages
              isOpen={false}
              onClose={function (): void {
                throw new Error("Function not implemented.");
              }}
            />
          </div>
        </div>
        <div className={styles.center_nav_block}>
          <NavBlock />
        </div>
      </div>
    </div>
  );
};
export default Center_avt;
