import { PlusCircleFilled, RightCircleFilled } from "@ant-design/icons";
import { Image } from "antd";
import React, { useEffect, useState } from "react";
import AddPost from "./AddPost/AddPost";
import styles from "./contentHome.module.css";
import Post from "./Post/Post";
import Link from "next/link";

const slidesData = [
  {
    name: "Slide 1Slide 1Slide 1Slide 1Slide 1Slide 1Slide 1s",
    src: "/img/c.png",
    alt: "Slide 1",
  },
  {
    name: "Slide 2",
    src: "/img/c.png",
    alt: "Slide 2",
  },
  {
    name: "Slide 3",
    src: "/img/c.png",
    alt: "Slide 3",
  },
  {
    name: "Slide 4",
    src: "/img/c.png",
    alt: "Slide 1",
  },
  {
    name: "Slide 5",
    src: "/img/c.png",
    alt: "Slide 2",
  },
  {
    name: "Slide 6",
    src: "/img/c.png",
    alt: "Slide 3",
  },
];
export default function ContentHome(): JSX.Element {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      const windowWidth = window.innerWidth;
      if (windowWidth >= 1024) {
        setSlidesToShow(4);
      } else if (windowWidth >= 768) {
        setSlidesToShow(3);
      } else {
        setSlidesToShow(2);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const onNextSlideClick = () => {
    const nextIndex = currentSlideIndex + 1;
    if (nextIndex < slidesData.length) {
      setCurrentSlideIndex(nextIndex);
    }
  };

  const onPrevSlideClick = () => {
    const prevIndex = currentSlideIndex - 1;
    if (prevIndex >= 0) {
      setCurrentSlideIndex(prevIndex);
    }
  };
  const showPrevButton = currentSlideIndex > 0;
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.content__story}>
            <div className={styles.add__story}>
              <Image
                src="/img/c.png"
                alt=""
                width={156}
                height={156}
                preview={false}
                className={styles.imageAdd__story}
              />
              <div className={styles.btnAdd__story}>
                <Link href="/">
                  <Image
                    src="/img/img-home/add_story.svg"
                    alt=""
                    width={50}
                    height={50}
                    preview={false}
                    className={styles.imageAdd}
                  />
                </Link>
              </div>
            </div>
            <div className={`${styles.slide__story}`}>
              {showPrevButton && (
                <Image
                  src="/img/img-home/chat_story_next.svg"
                  alt=""
                  width={50}
                  height={50}
                  preview={false}
                  className={`${styles.imagePrev} ${styles.rotate180}`}
                  onClick={onPrevSlideClick}
                />
              )}

              {slidesData
                .slice(currentSlideIndex, currentSlideIndex + slidesToShow)
                .map((slide, index) => (
                  <div key={index} className={`${styles.story}`}>
                    <div className={styles.userDetails}>
                      <Image
                        src={slide.src}
                        alt={slide.alt}
                        preview={false}
                        className={styles.image__story}
                      />
                      <div className={styles.info}>
                        <Image
                          src={slide.src}
                          alt={`${slide.name} Avatar`}
                          width={50}
                          height={50}
                          preview={false}
                          className={styles.avatar}
                        />
                        <p className={styles.username}>{slide.name}</p>
                      </div>
                    </div>
                  </div>
                ))}
              {currentSlideIndex + slidesToShow < slidesData.length && (
                <Image
                  src="/img/img-home/chat_story_next.svg"
                  alt=""
                  width={50}
                  height={50}
                  preview={false}
                  className={styles.imageNext}
                  onClick={onNextSlideClick}
                />
              )}
            </div>
          </div>
          <div className={styles.content__addPost}>
            <AddPost />
          </div>
          <div className={styles.content__Post}>
            <Post />
            <Post />
          </div>
        </div>
      </div>
    </div>
  );
}
