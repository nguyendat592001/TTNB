"use client";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { Image } from "antd";
import styles from "./index.module.scss";
import NavBlock from "./center_nav";
import CoverImage from "@/components/headerperson/UpdateImageWall";
import EditPerPages from "@/components/common/Modal/EditPerPages/EditPages";
import Avatar from "@/components/headerperson/Avatar";

interface FriendExceptProps {
  isOpen: boolean;
  onClose: () => void;
}
const Center_avt = ({ isOpen, onClose }: FriendExceptProps) => {
  const router = useRouter();
  const [eidtImageWall, setEidtImageWall] = useState(false);
  const [avatar, setAvatar] = useState(false);
  const onClicknewstory = () => {
    router.push("/addstory24h");
  };

  return (
    <div>
      <div className={styles.center_avt}>
        <div className={styles.center_avt_header}>
          <div className={`${styles.avt} avt`}>
            <Image
              width={1200}
              alt="anh-bia"
              src={"/img/c.png"}
              preview={false}
            />
          </div>

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
                preview={false}
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
          <Image
            width={192}
            preview={false}
            height={186}
            alt="anh-loi"
            src={"/img/c.png"}
            className="anhdaidien"
          />

          <div
            onClick={() => {
              setAvatar(true);
            }}
            className="up"
          >
            <Image
              width={30}
              height={30}
              alt="anh-loi"
              src={"/img/nv_camera.svg"}
              preview={false}
            />
          </div>
          {avatar && (
            <Avatar
              isOpen={avatar}
              onClose={() => {
                setAvatar(false);
              }}
            />
          )}

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
                preview={false}
              />
            </div>
          </div>
          <div className={styles.center_avt_btn}>
            <div onClick={onClicknewstory} className={styles.addstory}>
              <Image
                width={20}
                height={20}
                alt="cin"
                src={"/img/nv_add-circle.svg"}
                preview={false}
              />
              Thêm vào tin
            </div>

            <EditPerPages
              isOpen={false}
              onClose={function (): void {
                throw new Error("Function not implemented.");
              }}
            />
          </div>
        </div>
        <div className={`${styles.center_nav_block} width100`}>
          <NavBlock />
        </div>
      </div>
    </div>
  );
};
export default Center_avt;
