import {
  Alert,
  Button,
  Divider,
  Image,
  Menu,
  message,
  Popover,
  Tooltip,
} from "antd";
import { SetStateAction, useState } from "react";
import { DownOutlined } from "@ant-design/icons";

import styles from "./Post.module.css";
import PostComment from "./PostComment/PostComment";
import ReactionIcons from "./ReactionIcons/ReactionIcons ";
import OptionPost from "@/components/common/Popover/OptionPost";
import { menuOptionPost, menuOptionSharePost } from "./dataPost";
import ModalShareOnTime from "@/components/common/Modal/Share/ShareOnTime/ModalShareOnTime";
import ModalShareOnChat from "@/components/common/Modal/Share/ShareOnChat/ModalShareOnChat";
import ModalShareOnGroup from "@/components/common/Modal/Share/ShareOnGroup/ModalShareOnGroup";
import ModalShareOnPage from "@/components/common/Modal/Share/ShareOnPage/ModalShareOnPage";
import ModalSave from "@/components/common/Modal/OptionPost/Save/ModalSave";
import ModalNotify from "@/components/common/Modal/OptionPost/ModalNotify/ModalNotify";
import ModalComment from "@/components/common/Modal/OptionPost/ModalComment/ModalComment";
import ModalEditPost from "@/components/common/Modal/OptionPost/ModalEditPost/ModalEditPost";
import ModalEditView from "@/components/common/Modal/OptionPost/EditView/ModalEditView";
import ModalRegime from "@/components/common/Modal/Regime/ModalRegime";
import Link from "next/link";

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

const MODAL_SHARE_NOW = "shareNow";
const MODAL_SHARE_ON_TIME = "shareOnTime";
const MODAL_SHARE_ON_CHAT = "shareOnChat";
const MODAL_SHARE_ON_GROUP = "shareOnGroup";
const MODAL_SHARE_ON_PAGE = "shareOnPage";

const MODAL_OPTION_POST_SAVE = "save";
const MODAL_OPTION_POST_NOTIFY = "notifications";
const MODAL_OPTION_POST_COMMENT = "comment";
const MODAL_OPTION_POST_EDIT = "editPost";
const MODAL_OPTION_POST_EDIT_VIEW = "editView";

function Post() {
  const [comments, setComments] = useState<Comment[]>([]);
  const [showComments, setShowComments] = useState(false);
  const [selectedImage, setSelectedImage] = useState(
    "/img/img-home/ep_post_active_like.svg"
  );
  const [selectedReplyIndex, setSelectedReplyIndex] = useState(-1);
  const [likeCount, setLikeCount] = useState(1);
  const [selectedModal, setSelectedModal] = useState<string | null>(null);
  const [isSharePopoverOpen, setIsSharePopoverOpen] = useState(false);
  const [isOptionPopoverOpen, setIsOptionPopoverOpen] = useState(false);
  const [isModalShareOTOpen, setIsModalShareOTOpen] = useState(false);

  const [isFirstClick, setIsFirstClick] = useState(false);

  const [isPostClosed, setIsPostClosed] = useState(false);
  const [isPostRestored, setIsPostRestored] = useState(false);

  function handleRestoreClick() {
    setIsPostRestored(true);
    alert("Bài viết đã được khôi phục");
  }

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
    if (comment.trim() !== "") {
      const newComment: Comment = {
        avatar: "/img/c.png",
        name: "Nguyễn Thế Đạt",
        content: comment,
        timestamp: "12:34 PM",
        day: "28/08/2023",
      };
      addComment(newComment);
    }
  }

  function addComment(comment: Comment) {
    setComments((prevComments) => [...prevComments, comment]);
  }
  const content = (
    <div className={styles.contentPopover}>
      <p className={styles.contentPopover__title}>Thích</p>
      <div className={styles.listUser}>
        <div className={styles.listUser__item}>
          <Link href="/" className={styles.listUser__item__name}>
            Nguyễn Thế Đạt
          </Link>
          <Link href="/" className={styles.listUser__item__name}>
            Nguyễn Thế Đạt
          </Link>
          <Link href="/" className={styles.listUser__item__name}>
            Nguyễn Thế Đạt
          </Link>
        </div>
      </div>
    </div>
  );

  const handlePopoverItemClick = (modal: string) => {
    if (modal === MODAL_SHARE_NOW) {
      message.success("Chia sẻ thành công");
    }
    // else if (modal === MODAL_SHARE_ON_TIME) {
    //     setIsModalShareOTOpen(true);
    // }
    else if (modal === MODAL_OPTION_POST_NOTIFY) {
      if (!isFirstClick) {
        menuOptionPost[1] = {
          key: "notifications",
          icon: (
            <Image
              src="/img/img-OptionPost/ep_post_notify.svg"
              alt="icon"
              width={20}
              height={20}
              preview={false}
            />
          ),
          text: "Bật thông báo mới",
        };
        alert("Tắt thông báo bài viết thành công");
        setIsFirstClick(true);
      } else {
        setSelectedModal(modal);
      }
    } else {
      setSelectedModal(modal);
    }

    setIsSharePopoverOpen(false);
    setIsOptionPopoverOpen(false);
  };

  const closeSelectedModal = () => {
    setSelectedModal(null);
  };

  const renderModal = () => {
    switch (selectedModal) {
      case MODAL_SHARE_ON_TIME:
        return (
          <ModalShareOnTime
            selectedModal={selectedModal}
            closeSelectedModal={closeSelectedModal}
          />
        );
      case MODAL_SHARE_ON_CHAT:
        return (
          <ModalShareOnChat
            selectedModal={selectedModal}
            closeSelectedModal={closeSelectedModal}
          />
        );
      case MODAL_SHARE_ON_GROUP:
        return (
          <ModalShareOnGroup
            selectedModal={selectedModal}
            closeSelectedModal={closeSelectedModal}
          />
        );
      case MODAL_SHARE_ON_PAGE:
        return (
          <ModalShareOnPage
            selectedModal={selectedModal}
            closeSelectedModal={closeSelectedModal}
          />
        );

      case MODAL_OPTION_POST_SAVE:
        return (
          <ModalSave
            selectedModal={selectedModal}
            closeSelectedModal={closeSelectedModal}
          />
        );
      case MODAL_OPTION_POST_NOTIFY:
        return (
          <ModalNotify
            selectedModal={selectedModal}
            closeSelectedModal={closeSelectedModal}
          />
        );
      case MODAL_OPTION_POST_COMMENT:
        return (
          <ModalComment
            selectedModal={selectedModal}
            closeSelectedModal={closeSelectedModal}
          />
        );
      case MODAL_OPTION_POST_EDIT:
        return (
          <ModalEditPost
            selectedModal={selectedModal}
            closeSelectedModal={closeSelectedModal}
          />
        );
      case MODAL_OPTION_POST_EDIT_VIEW:
        return <ModalRegime isOpen={true} onClose={closeSelectedModal} />;
      default:
        return null;
    }
  };

  return (
    <div className={styles.post}>
      {isPostClosed && !isPostRestored ? (
        <div className={styles.postHidden}>
          <div className={styles.postHidden__container}>
            <div className={styles.postHidden__content}>
              <Image
                src="/img/img-home/hiddenPost/an-bai-viet.svg"
                alt=""
                preview={false}
                className={styles.postHidden__content__img}
              />
              <div className={styles.postHidden__content__text}>
                <p className={styles.postHidden__content__text_title}>
                  Đã ẩn bài viết
                </p>
                <p className={styles.postHidden__content__text_desc}>
                  Bạn sẽ không nhìn thấy bài viết này trên bảng tin
                </p>
              </div>
            </div>
            <div className={styles.postHidden__content}>
              <Image
                src="/img/img-home/hiddenPost/tim-ho-tro.svg"
                alt=""
                preview={false}
                className={styles.postHidden__content__img}
              />
              <div className={styles.postHidden__content__text}>
                <p className={styles.postHidden__content__text_title}>
                  Tìm hỗ trợ hoặc báo cáo bài viết
                </p>
                <p className={styles.postHidden__content__text_desc}>
                  Tôi lo ngại về bài viết này
                </p>
              </div>
            </div>
          </div>
          <Button
            onClick={handleRestoreClick}
            size="large"
            className={styles.postHidden__btn}
          >
            Hoàn tác
          </Button>
        </div>
      ) : (
        <>
          <div className={styles.post__header}>
            <div className={styles.post__header__left}>
              <div className={styles.post__header__left__avatar}>
                <Image
                  src="/img/c.png"
                  alt="avatar"
                  width={40}
                  height={40}
                  preview={false}
                  className={styles.avatar}
                />
              </div>
              <div className={styles.post__header__left__info}>
                <div className={styles.post__header__left__info__author_name}>
                  <Link href="/">Nguyễn Thế Đạt </Link>
                  <span className={styles.post_fell}>
                    {" "}
                    đang cảm thấy Rất là Ok{" "}
                  </span>
                  <span className={styles.post_with}>
                    cùng với
                    <Link href="/"> Nguyễn Thế Đạt </Link>
                  </span>
                  <span className={styles.post_at}>
                    tại
                    <span className={styles.post_at_bold}>
                      {" "}
                      Lô 6, KĐT Định Công - Hoàng Mai - Hà Nội{" "}
                    </span>
                  </span>
                </div>

                <div className={styles.post__header__left__info__time}>
                  <p className={styles.info__time}>2 giờ trước</p>
                  <div className={styles.info__regime}>
                    <Tooltip title="Công khai" placement="bottom" arrow={false}>
                      <Image
                        src="/img/img-home/regime/regime1.svg"
                        alt=""
                        width={20}
                        height={20}
                        preview={false}
                        className={styles.iconRegime}
                      />
                    </Tooltip>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.post__header__right}>
              <div className={styles.post__header__right__icon}>
                <Popover
                  placement="bottomRight"
                  content={
                    <OptionPost
                      menuItems={menuOptionPost}
                      onMenuItemClick={handlePopoverItemClick}
                    />
                  }
                  trigger="click"
                  arrow={false}
                  open={isOptionPopoverOpen}
                  onOpenChange={(open) => setIsOptionPopoverOpen(open)}
                >
                  <Image
                    src="/img/img-header/ep_post_more.svg"
                    alt="icon"
                    width={20}
                    height={20}
                    preview={false}
                    onClick={() => setIsOptionPopoverOpen(!isOptionPopoverOpen)}
                    style={{
                      cursor: "pointer",
                      marginRight: "10px",
                    }}
                  />
                </Popover>
              </div>
            </div>
            <div className={styles.closePost}>
              <Image
                src="/img/img-home/del_option.svg"
                alt="icon"
                width={16}
                height={16}
                preview={false}
                style={{
                  cursor: "pointer",
                }}
                onClick={() => setIsPostClosed(true)}
              />
            </div>
          </div>
          <div className={styles.post__content}>
            <div className={styles.post__content__text}>
              <p>Hello</p>
            </div>
            <div className={styles.post__content__image}>
              <Image src="/img/c.png" alt="icon" />
            </div>
            {/* <PostVideo /> */}
          </div>
          <div className={styles.post__count_reaction}>
            <div className={styles.post__reaction__count_like}>
              <Popover
                placement="bottomLeft"
                content={content}
                trigger="hover"
                arrow={false}
              >
                <Image
                  src={selectedImage}
                  alt="icon"
                  width={25}
                  height={25}
                  preview={false}
                />
              </Popover>
              <Popover
                placement="bottomLeft"
                content={content}
                trigger="hover"
                arrow={false}
              >
                <p className={styles.post__reaction__count_like__text}>
                  {likeCount} Người
                </p>
              </Popover>
            </div>
            <div className={styles.sum__comment}>
              <div className={styles.post__reaction__count_comment}>
                <Popover
                  placement="bottomLeft"
                  content={content}
                  trigger="hover"
                  arrow={false}
                >
                  <span className={styles.post__reaction__count_comment}>
                    1.000
                    <span> Bình luận </span>
                  </span>
                </Popover>
              </div>

              <div className={styles.post__reaction__count_share}>
                <Popover
                  placement="bottomLeft"
                  content={content}
                  trigger="hover"
                  arrow={false}
                >
                  <span className={styles.post__reaction__count_share__text}>
                    1.000
                    <span> Lượt chia sẻ </span>
                  </span>
                </Popover>
              </div>
            </div>
          </div>

          <Divider className={styles.divider} />

          <div className={styles.post__footer}>
            <ReactionIcons
              selectedImage={selectedImage}
              onSelectImage={handleImageClick}
            />
            <div
              className={styles.post__footer__middle}
              onClick={handleCommentClick}
            >
              <div className={styles.post__footer__middle__icon}>
                <Image
                  src="/img/img-home/ep_post_cmt.svg"
                  alt="icon"
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
              content={
                <OptionPost
                  menuItems={menuOptionSharePost}
                  onMenuItemClick={handlePopoverItemClick}
                />
              }
              trigger="click"
              arrow={false}
              open={isSharePopoverOpen}
              onOpenChange={(open) => setIsSharePopoverOpen(open)}
            >
              <div className={styles.post__footer__right}>
                <div className={styles.post__footer__right__icon}>
                  <Image
                    src="/img/img-home/ep_post_share.svg"
                    alt="icon"
                    width={28}
                    height={28}
                    preview={false}
                    onClick={() => setIsSharePopoverOpen(!isSharePopoverOpen)}
                  />
                </div>
                <div className={styles.post__footer__right__text}>
                  <p>Chia sẻ</p>
                </div>
              </div>
            </Popover>
          </div>
          {renderModal()}
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
                      alt="avatar"
                    />
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
                      <p className={styles.comment__timestamp}>
                        {comment.timestamp}
                      </p>
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
        </>
      )}
    </div>
  );
}

export default Post;
