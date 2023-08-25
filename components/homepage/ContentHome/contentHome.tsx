
import { PlusCircleFilled, RightCircleFilled } from '@ant-design/icons'
import { Image } from 'antd'
import React, { useState } from 'react'
import styles from './contentHome.module.css'

const slidesData = [
    {
        name: 'Slide 1',
        src: '/img/c.png',
        alt: 'Slide 1',

    },
    {
        name: 'Slide 2',
        src: '/img/img-header/mes.png',
        alt: 'Slide 2'
    },
    {
        name: 'Slide 3',
        src: '/img/app_add.png',
        alt: 'Slide 3'
    },
    {
        name: 'Slide 4',
        src: '/img/img-header/ring.png',
        alt: 'Slide 1'
    },
    {
        name: 'Slide 5',
        src: '/img/img-header/ep_post_hide_bv.svg',
        alt: 'Slide 2'
    },
    {
        name: 'Slide 6',
        src: '/img/c.png',
        alt: 'Slide 3'
    },
];
export default function ContentHome(): JSX.Element {
    const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

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
    const showPrevButton = currentSlideIndex > 0
    return (
        <div>
            <div className={styles.container}>
                <div className={styles.content}>
                    <div className={styles.content__story}>
                        <div className={styles.add__story} >
                            <Image
                                src='/img/c.png'
                                alt=''
                                width={156}
                                height={156}
                                preview={false}
                                className={styles.imageAdd__story}
                            />
                            <div className={styles.btnAdd__story}>
                                <a href="/">
                                    <Image
                                        src='/img/img-home/add_story.svg'
                                        alt=''
                                        width={50}
                                        height={50}
                                        preview={false}
                                        className={styles.imageAdd}
                                    />
                                </a>
                            </div>
                        </div>
                        <div className={`${styles.slide__story}`} >
                            {showPrevButton && (
                                <Image
                                    src='/img/img-home/chat_story_next.svg'
                                    alt=''
                                    width={50}
                                    height={50}
                                    preview={false}
                                    className={`${styles.imagePrev} ${styles.rotate180}`}
                                    onClick={onPrevSlideClick}
                                />
                            )}
                            {slidesData.slice(currentSlideIndex, currentSlideIndex + 3).map((slide, index) => (
                                <div key={index} className={`${styles.story}`}>
                                    <div className={styles.userDetails}>

                                        <Image
                                            src={slide.src}
                                            alt={slide.alt}
                                            preview={false}
                                            className={styles.image__story}
                                        />
                                        <Image
                                            src={slide.src}
                                            alt={`${slide.name}'s Avatar`}
                                            width={50}
                                            height={50}
                                            preview={false}
                                            className={styles.avatar}
                                        />
                                        <span className={styles.username}>{slide.name}</span>
                                    </div>

                                </div>
                            ))}
                            {currentSlideIndex + 3 < slidesData.length && (
                                <Image
                                    src='/img/img-home/chat_story_next.svg'
                                    alt=''
                                    width={50}
                                    height={50}
                                    preview={false}
                                    className={styles.imageNext}
                                    onClick={onNextSlideClick}
                                />
                            )}
                        </div>
                    </div>
                    <div className={styles.content__post}>

                    </div>
                </div>
            </div>
        </div>
    )
}