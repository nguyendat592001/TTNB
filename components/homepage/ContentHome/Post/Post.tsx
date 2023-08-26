
import OptionPost from '@/components/common/Popover/OptionPost';
import { ConfigProvider, Divider, Image, Input, Popover } from 'antd';

import styles from './Post.module.css';

function Post() {
    return (

        <div className={styles.post}>
            <div className={styles.post__header}>
                <div className={styles.post__header__left}>
                    <div className={styles.post__header__left__avatar}>
                        <Image
                            src='/img/c.png'
                            alt='avatar'
                            width={40}
                            height={40}
                            preview={false}
                            className={styles.avatar}
                        />
                    </div>
                    <div className={styles.post__header__left__info}>
                        <div className={styles.post__header__left__info__author_name}>
                            <a href="/">Nguyễn Thế Đạt </a>
                            <span className={styles.post_fell}> đang cảm thấy Rất là Ok </span>
                            <span className={styles.post_with}>
                                cùng với
                                <a href="/"> Nguyễn Thế Đạt </a>
                            </span>
                            <span className={styles.post_at}>
                                tại
                                <span className={styles.post_at_bold}> Lô 6, KĐT Định Công - Hoàng Mai - Hà Nội </span>
                            </span>
                        </div>

                        <div className={styles.post__header__left__info__time}>
                            <p className={styles.info__time} >2 giờ trước</p>
                            <Image
                                src='/img/img-home/regime/regime1.svg'
                                alt=''
                                width={20}
                                height={20}
                                preview={false}
                                className={styles.iconRegime}
                            />
                        </div>

                    </div>
                </div>
                <div className={styles.post__header__right}>
                    <div className={styles.post__header__right__icon}>

                        <Popover
                            placement="bottomRight"
                            content={<OptionPost />}
                            trigger="click"
                            arrow={false}
                        >
                            <Image
                                src='/img/img-header/ep_post_more.svg'
                                alt='icon'
                                width={20}
                                height={20}
                                preview={false}
                            />

                        </Popover>

                    </div>
                </div>
            </div>
            <div className={styles.post__content}>
                <div className={styles.post__content__text}>
                    <p>Hello</p>
                </div>
                <div className={styles.post__content__image}>
                    <Image
                        src='/img/c.png'
                        alt='icon'
                    />
                </div>
            </div>
            <div className={styles.post__reaction}>
                <div className={styles.post__reaction__count_like}>
                    <Image
                        src='/img/img-home/reaction/reaction_1.svg'
                        alt='icon'
                        width={25}
                        height={25}
                        preview={false}
                    />
                    <p className={styles.post__reaction__count_like__text}>
                        1.000
                        <span> Lượt thích </span>
                    </p>

                </div>
                <div className={styles.sum__comment}>
                    <div className={styles.post__reaction__count_comment}>
                        <span className={styles.post__reaction__count_comment}>
                            1.000
                            <span> Bình luận </span>
                        </span>
                    </div>

                    <div className={styles.post__reaction__count_share}>
                        <span className={styles.post__reaction__count_share__text}>
                            1.000
                            <span> Lượt chia sẻ </span>
                        </span>
                    </div>
                </div>
            </div>
            <Divider className={styles.divider} />
            <div className={styles.post__footer}>
                <div className={styles.post__footer__left}>
                    <div className={styles.post__footer__left__icon}>
                        <Image
                            src='/img/img-home/ep_post_active_like.svg'
                            alt='icon'
                            width={28}
                            height={28}
                            preview={false}
                        />
                    </div>
                    <div className={styles.post__footer__left__text}>
                        <p>Thích</p>
                    </div>
                </div>
                <div className={styles.post__footer__middle}>
                    <div className={styles.post__footer__middle__icon}>
                        <Image
                            src='/img/img-home/ep_post_cmt.svg'
                            alt='icon'
                            width={25}
                            height={25}
                            preview={false}
                        />
                    </div>
                    <div className={styles.post__footer__middle__text}>
                        <p>Bình luận</p>
                    </div>
                </div>
                <div className={styles.post__footer__right}>
                    <div className={styles.post__footer__right__icon}>
                        <Image
                            src='/img/img-home/ep_post_share.svg'
                            alt='icon'
                            width={28}
                            height={28}
                            preview={false}
                        />
                    </div>
                    <div className={styles.post__footer__right__text}>
                        <p>Chia sẻ</p>
                    </div>
                </div>
            </div>
            <Divider className={styles.divider} />
            <div className={styles.post__comment}>
                <div className={styles.post__comment__avatar}>
                    <Image
                        src='/img/c.png'
                        alt='icon'
                        width={40}
                        height={40}
                        preview={false}
                        className={styles.comment__avatar}
                    />
                </div>
                <div className={styles.post__comment__input}>
                    <Input
                        placeholder='Viết bình luận...'
                        bordered={false}
                        className={styles.comment__input}
                        suffix={
                            <>
                                <Image
                                    src='/img/img-home/ep_post_icon_feel.svg'
                                    alt='icon'
                                    width={25}
                                    height={25}
                                    preview={false}
                                />
                                <Image
                                    src='/img/img-home/ep_post_write_img.svg'
                                    alt='icon'
                                    width={25}
                                    height={25}
                                    preview={false}
                                />
                            </>
                        }
                    />
                </div>
            </div>
        </div>


    );
}

export default Post;