import { Divider, Image, Input } from 'antd';
import styles from './AddPost.module.css';

function AddPost() {
    return (
        <>
            <div style={{ marginTop: '-25px' }}>
                <div className={styles.addPost}>
                    <div className={styles.addPost__header}>
                        <div className={styles.addPost__header__left}>
                            <Image
                                src='/img/c.png'
                                alt='avatar'
                                width={50}
                                height={50}
                                preview={false}
                                className={styles.avatar}
                            />
                        </div>
                        <div className={styles.addPost__header__right}>
                            <Input
                                className={styles.input}
                                placeholder="Bạn đang nghĩ gì?"
                                bordered={false}
                                size="large"
                            />
                        </div>
                    </div>
                    <Divider className={styles.divider} />
                    <div className={styles.addPost__body}>
                        <div className={styles.addPost__body_item} >
                            <Image
                                src='/img/img-home/nv_upload_file.svg'
                                alt='avatar'
                                width={30}
                                height={30}
                                preview={false}
                                className={styles.avatar}
                            />
                            <span className={styles.addPost__body_title}>Ảnh/video/tệp</span>
                        </div>
                        <div className={styles.addPost__body_item}>
                            <Image
                                src='/img/img-home/nv_post_feel_user_tag.svg'
                                alt='avatar'
                                width={30}
                                height={30}
                                preview={false}
                                className={styles.avatar}
                            />
                            <span className={styles.addPost__body_title} >Nhắc tên thành viên</span>
                        </div>
                        <div className={styles.addPost__body_item}>
                            <Image
                                src='/img/img-home/nv_icon_post_footer_active.svg'
                                alt='avatar'
                                width={30}
                                height={30}
                                preview={false}
                                className={styles.avatar}
                            />
                            <span className={styles.addPost__body_title}>Cảm xúc/Hoạt động</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AddPost;