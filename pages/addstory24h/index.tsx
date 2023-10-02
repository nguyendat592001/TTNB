import React, { useState } from "react";
import styles from "./addstory.module.scss";
import { Image, Slider, Upload, UploadFile } from "antd";
import Head from "next/head";
import NavStory from "./NavStory/navStory";
export default function Index() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        if (e.target) {
          setSelectedImage(e.target.result as string);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className={styles.story}>
      <Head>
        <title>Tạo tin 24h</title>
        <link rel="shortcut icon" href="next.svg" type="image/x-icon" />
      </Head>
      <NavStory selectedImage={selectedImage} />
      <div className={`${styles.header} ${selectedImage ? styles.hidden : ""}`}>
        <label htmlFor="image_story" className={styles.image_story}>
          <Image
            width={77}
            height={77}
            src={"/img/tao-tin-anh.svg"}
            alt=""
            preview={false}
          />

          <span>Tạo tin ảnh</span>
          <input
            type="file"
            hidden
            id="image_story"
            onChange={handleImageChange}
          />
        </label>
        <div className={styles.text_story}>
          <Image
            preview={false}
            width={77}
            height={77}
            src={"/img/tao-tin-van-ban.svg"}
            alt=""
          />
          <span>Tạo tin văn bản</span>
        </div>
      </div>
      <div
        className={`${styles.header} ${styles.edit} ${
          selectedImage ? "" : styles.hidden
        }`}
      >
        <span>Xem trước</span>
        <div className={styles.fa_content}>
          <div className={styles.content}>
            <div className={styles.image_story2}>
              {selectedImage && (
                <Image
                  width={300}
                  height={470}
                  src={selectedImage}
                  alt="Selected Image"
                  preview={false}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
