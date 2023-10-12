import React from "react";
import styles from "./watchstory24h.module.scss";
import { Image } from "antd";
function Story() {
  return (
    <div>
      <div className={styles.story_content}>
        <div>
          <div>sdjadha</div>
          <div className={styles.img_story}>
            <Image
              alt="anh-story"
              src={"/img/c.png"}
              preview={false}
              width={350}
              height={500}
            />
          </div>
          <div className={styles.story_footer}>adajdhgajsdga</div>
        </div>
      </div>
    </div>
  );
}

export default Story;
