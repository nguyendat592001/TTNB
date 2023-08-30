import { Divider, Image, Menu, Popover } from 'antd';
import { SetStateAction, useState } from 'react';
import { DownOutlined } from '@ant-design/icons';

import OptionPost from '@/components/common/Popover/OptionPost';
import PostComment from './PostComment/PostComment';
import styles from './Post.module.css';
import { menuOptionPost, menuOptionSharePost } from './dataPost'
import ReactionIcons from './ReactionIcons/ReactionIcons ';

interface Comment {
    avatar: string;
    name: string;
    content: string;
    timestamp: string;
    day: string;

}

const menu = (
    <Menu className={`${styles.menu__sort_popover} menuSortPopover `}>
        <Menu.Item key="1">Mới nhất</Menu.Item>
        <Menu.Item key="2">Cũ nhất</Menu.Item>
    </Menu>
);



function Post() {

    const [comments, setComments] = useState<Comment[]>([]);
    const [showComments, setShowComments] = useState(false);
    const [selectedImage, setSelectedImage] = useState('/img/img-home/ep_post_active_like.svg');
    const [selectedReplyIndex, setSelectedReplyIndex] = useState(-1);
    const [likeCount, setLikeCount] = useState(1);

    function handleReplyClick(index: number) {
        setSelectedReplyIndex(index === selectedReplyIndex ? -1 : index);
    }

    function handleImageClick(newImage: SetStateAction<string>) {
        if (newImage !== selectedImage) {
            setSelectedImage(newImage);
            setLikeCount(likeCount + 1);
        }
    }

    function handleCommentClick() {
        setShowComments(!showComments);
    }

    function handleSubmitComment(comment: string) {
        if (comment.trim() !== '') {
            const newComment: Comment = {
                avatar: '/img/c.png',
                name: 'Nguyễn Thế Đạt',
                content: comment,
                timestamp: '12:34 PM',
                day: '28/08/2023',
            };
            addComment(newComment);
        }
    }

    function addComment(comment: Comment) {
        setComments(prevComments => [...prevComments, comment]);
    }

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
                            content={<OptionPost menuItems={menuOptionPost} />}
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
            <div className={styles.post__count_reaction}>
                <div className={styles.post__reaction__count_like}>
                    <Image
                        src={selectedImage}
                        alt='icon'
                        width={25}
                        height={25}
                        preview={false}
                    />
                    <p className={styles.post__reaction__count_like__text}>
                        {likeCount} Người
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
                <ReactionIcons
                    selectedImage={selectedImage}
                    onSelectImage={handleImageClick}
                />
                <div className={styles.post__footer__middle} onClick={handleCommentClick}>
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

                <Popover
                    placement="bottomRight"
                    content={<OptionPost menuItems={menuOptionSharePost} />}
                    trigger="click"
                    arrow={false}
                >
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
                </Popover>
            </div>

            <Divider className={styles.divider} />

            <PostComment onSubmitComment={handleSubmitComment} />
            {showComments && (
                <div className={styles.comments}>
                    <Popover
                        content={menu}
                        trigger="click"
                        arrow={false}
                        placement="bottomRight"
                    >
                        <div className={styles.post__comment_sort}>
                            Mới nhất
                            <span>
                                <DownOutlined
                                    rev={undefined}
                                    className={styles.post__comment_sort_icon}
                                />
                            </span>
                        </div>
                    </Popover>
                    {comments.map((comment, index) => (
                        <div key={index} className={styles.comment}>
                            <div className={styles.comment__avatar_user}>
                                <Image
                                    src={comment.avatar}
                                    width={40}
                                    height={40}
                                    preview={false}
                                    className={styles.comment__avatar_user_img}
                                    alt='avatar' />
                            </div>
                            <div className={styles.comment__content}>
                                <div className={styles.comment__content_info}>
                                    <p className={styles.comment__name}>{comment.name}</p>
                                    <p className={styles.comment__text}>{comment.content}</p>
                                </div>
                                <div className={styles.comment__content_reaction}>
                                    <p className={styles.comment__cxuc}>Thích</p>
                                    <p
                                        className={styles.comment__reply}
                                        onClick={() => handleReplyClick(index)}
                                    >
                                        Trả lời
                                    </p>

                                    <p className={styles.comment__day}>{comment.day}</p>
                                    <p>lúc</p>
                                    <p className={styles.comment__timestamp}>{comment.timestamp}</p>
                                </div>
                                {selectedReplyIndex === index && (
                                    <PostComment
                                        onSubmitComment={handleSubmitComment}
                                        parentId={index}
                                    />
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default Post;