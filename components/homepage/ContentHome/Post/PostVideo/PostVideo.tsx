
import styles from './PostVideo.module.css';

import React, { useRef } from 'react';

function PostVideo() {
    const videoRef = useRef<HTMLVideoElement>(null);

    const handleVideoClick = () => {
        if (videoRef.current) {
            const promise = videoRef.current.requestFullscreen();

            promise
                .then(() => videoRef.current?.play())
                .catch(error => {
                    console.log('Error attempting to enable fullscreen:', error);
                });
        }
    };
    return (
        <div className={styles.post__content__container}>
            <div className={styles.post__content__text}>
                <p>Hello</p>
            </div>
            <div className={`${styles.post__content__video} ${styles.post__content__video_container}`}>
                <video
                    ref={videoRef}
                    width="100%"
                    height="270"
                    controls
                    onClick={handleVideoClick}
                    className={styles.video}
                >
                    <source src="/video/video1.mp4" type="video/mp4" />
                </video>
            </div>
        </div>
    );
}

export default PostVideo;