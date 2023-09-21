import React, { useState } from "react";
import styles from "./index.module.css";
import { Button, Image, Input, Dropdown, Divider, Menu, message, Popover, Tooltip } from "antd";
import NewFeed from "../../../../components/thuc_components/newFeed/newFeed";
// import Status from "../../../../components/thuc_components/status/status";
import { DownOutlined } from "@ant-design/icons";
import PostComment from "../../../../components/homepage/ContentHome/Post/PostComment/PostComment";
import ReactionIcons from "../../../../components/homepage/ContentHome/Post/ReactionIcons/ReactionIcons ";
import OptionPost from "@/components/common/Popover/OptionPost";
import { menuOptionPost, menuOptionSharePost } from "../../../../components/homepage/ContentHome/Post/dataPost";
import ModalShareOnTime from "@/components/common/Modal/Share/ShareOnTime/ModalShareOnTime";
import ModalShareOnChat from "@/components/common/Modal/Share/ShareOnChat/ModalShareOnChat";
import ModalShareOnGroup from "@/components/common/Modal/Share/ShareOnGroup/ModalShareOnGroup";
import ModalShareOnPage from "@/components/common/Modal/Share/ShareOnPage/ModalShareOnPage";
import ModalSave from "@/components/common/Modal/OptionPost/Save/ModalSave";
import ModalNotify from "@/components/common/Modal/OptionPost/ModalNotify/ModalNotify";
import ModalComment from "@/components/common/Modal/OptionPost/ModalComment/ModalComment";
import ModalEditPost from "@/components/common/Modal/OptionPost/ModalEditPost/ModalEditPost";
import ModalRegime from "@/components/common/Modal/Regime/ModalRegime";

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

const Discuss = () => {
   const [comments, setComments] = useState([]);
   const [showComments, setShowComments] = useState(false);
   const [selectedImage, setSelectedImage] = useState("/img/img-home/ep_post_active_like.svg");
   const [selectedReplyIndex, setSelectedReplyIndex] = useState(-1);
   const [likeCount, setLikeCount] = useState(1);
   const [selectedModal, setSelectedModal] = useState("");
   const [isSharePopoverOpen, setIsSharePopoverOpen] = useState(false);
   const [isOptionPopoverOpen, setIsOptionPopoverOpen] = useState(Array(4).fill(false));
   const [isFirstClick, setIsFirstClick] = useState(false);

   function handleReplyClick(index) {
      setSelectedReplyIndex(index === selectedReplyIndex ? -1 : index);
   }

   function handleImageClick(newImage) {
      if (newImage !== selectedImage) {
         setSelectedImage(newImage);
         setLikeCount(likeCount + 1);
      }
   }

   function handleCommentClick() {
      setShowComments(!showComments);
   }

   function handleSubmitComment(comment) {
      if (comment.trim() !== "") {
         const newComment = {
            avatar: "/img/c.png",
            name: "Nguyễn Thế Đạt",
            content: comment,
            timestamp: "12:34 PM",
            day: "28/08/2023",
         };
         addComment(newComment);
      }
   }

   function addComment(comment) {
      setComments((prevComments) => [...prevComments, comment]);
   }
   const content = (
      <div className={styles.contentPopover}>
         <p className={styles.contentPopover__title}>Thích</p>
         <div className={styles.listUser}>
            <div className={styles.listUser__item}>
               <a href="/" className={styles.listUser__item__name}>
                  Nguyễn Hoàng Việt
               </a>
               <a href="/" className={styles.listUser__item__name}>
                  Nguyễn Thế Đạt
               </a>
               <a href="/" className={styles.listUser__item__name}>
                  Thức Đẹp Trai
               </a>
            </div>
         </div>
      </div>
   );

   const handlePopoverItemClick = (modal, index) => {
      if (modal === MODAL_SHARE_NOW) {
         message.success("Chia sẻ thành công");
      } else if (modal === MODAL_OPTION_POST_NOTIFY) {
         if (!isFirstClick) {
            menuOptionPost[1] = {
               key: "notifications",
               icon: <Image src="/img/img-OptionPost/ep_post_notify.svg" alt="icon" width={20} height={20} preview={false} />,
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
      setIsOptionPopoverOpen(Array(4).fill(false));
   };

   const closeSelectedModal = () => {
      setSelectedModal(null);
   };

   const renderModal = () => {
      switch (selectedModal) {
         case MODAL_SHARE_ON_TIME:
            return <ModalShareOnTime selectedModal={selectedModal} closeSelectedModal={closeSelectedModal} />;
         case MODAL_SHARE_ON_CHAT:
            return <ModalShareOnChat selectedModal={selectedModal} closeSelectedModal={closeSelectedModal} />;
         case MODAL_SHARE_ON_GROUP:
            return <ModalShareOnGroup selectedModal={selectedModal} closeSelectedModal={closeSelectedModal} />;
         case MODAL_SHARE_ON_PAGE:
            return <ModalShareOnPage selectedModal={selectedModal} closeSelectedModal={closeSelectedModal} />;

         case MODAL_OPTION_POST_SAVE:
            return <ModalSave selectedModal={selectedModal} closeSelectedModal={closeSelectedModal} />;
         case MODAL_OPTION_POST_NOTIFY:
            return <ModalNotify selectedModal={selectedModal} closeSelectedModal={closeSelectedModal} />;
         case MODAL_OPTION_POST_COMMENT:
            return <ModalComment selectedModal={selectedModal} closeSelectedModal={closeSelectedModal} />;
         case MODAL_OPTION_POST_EDIT:
            return <ModalEditPost selectedModal={selectedModal} closeSelectedModal={closeSelectedModal} />;
         case MODAL_OPTION_POST_EDIT_VIEW:
            return <ModalRegime isOpen={true} onClose={closeSelectedModal} />;
         default:
            return null;
      }
   };

   const dataStatus = [
      {
         id: "1",
         avatar: "/img/group/mu1.jpg",
         name: "Thức Đẹp Trai",
         feel: "Đang cảm thấy lo lắng",
         withs: "cùng với",
         friend: "Nguyễn Thế Đạt",
         address: "Lô 6, KĐT Định Công - Hoàng Mai - Hà Nội",
         content: "Win rồi ",
         collection: "/img/group/tq5.jpg",
         at: "tại",
         time: "2 ngày trước",
      },
      {
         id: "2",
         avatar: "/img/group/mu1.jpg",
         name: "Thức Đẹp Trai",
         feel: "Đang cảm thấy vô cùng đau đầu",
         withs: "",
         friend: "",
         address: "",
         content: "ok",
         collection: "/img/group/tq5.jpg",
         at: "",
         time: "5 ngày trước",
      },
      {
         id: "3",
         avatar: "/img/group/mu1.jpg",
         name: "Thức Đẹp Trai",
         feel: "",
         withs: "",
         friend: "",
         address: "",
         content: "Một ngày đẹp trời",
         collection: "/img/group/tq5.jpg",
         at: "",
         time: "6 ngày trước",
      },
      {
         id: "4",
         avatar: "/img/group/mu1.jpg",
         name: "Thức Đẹp Trai",
         feel: "Đang cảm thấy lo lắng",
         withs: "",
         friend: "",
         address: "Lô 6, KĐT Định Công - Hoàng Mai - Hà Nội",
         content: "",
         collection: "/img/group/tq5.jpg",
         at: "tại",
         time: "9 ngày trước",
      },
   ];

   const dataImg = [
      {
         key: "1",
         img: "/img/group/mu1.jpg",
      },
      {
         key: "2",
         img: "/img/group/mu2.jpg",
      },
      {
         key: "3",
         img: "/img/group/mu3.jpg",
      },
   ];
   const dataPin = [
      {
         avatar: "/img/group/mu1.jpg",
         name: "Fan MU Việt Nam",
         position: "Quản trị viên",
         time: "1 tuần trước",
         title: "Win!!!",
         content: "/img/group/mu2.jpg",
      },
      {
         avatar: "/img/group/mu1.jpg",
         name: "Fan MU Việt Nam",
         position: "Quản trị viên",
         time: "2 tuần trước",
         title: "ok!!!",
         content: "/img/group/mu3.jpg",
      },
      {
         avatar: "/img/group/mu1.jpg",
         name: "Fan MU Việt Nam",
         position: "Quản trị viên",
         time: "1 tháng trước",
         title: "hihi!!!",
         content: "/img/group/mu4.jpg",
      },
   ];
   const items = [
      {
         key: "1",
         label: (
            <div className={styles.introduce_flex}>
               <Image alt="/" src="/img/group/dot21.svg" preview={false} />
               <p>Bỏ ghim bài viết</p>
            </div>
         ),
      },
      {
         key: "2",
         label: (
            <div className={styles.introduce_flex}>
               <Image alt="/" src="/img/group/dot10.png" width={20} height={20} preview={false} />
               <p>Ghim lên đầu</p>
            </div>
         ),
      },
   ];

   return (
      <>
         <div className={styles.container}>
            <div className={styles.content}>
               <div className={styles.content_top}>
                  <div className={styles.upload}>
                     <NewFeed />
                  </div>

                  <div className={styles.pin}>
                     <h3>Ghim bài viết</h3>
                     <div className={styles.pin_container}>
                        <div className={styles.all_pin}>
                           <div className={styles.pin_if}>
                              <Image alt="/" src="/img/group/gim.svg" preview={false} />
                              <p>Nêu bật những điều đáng chú ý nhất trong nhóm</p>
                              <p>Nêu bật những điều đáng chú ý nhất trong nhóm ở một nơi thuận tiện mà bạn có thể ghim bài viết</p>
                           </div>
                           {dataPin.map((item) => {
                              return (
                                 <div className={styles.pin_if}>
                                    <div className={styles.content}>
                                       <div className={styles.introduce_flex}>
                                          <Image alt="/" src={item.avatar} width={50} height={50} style={{ borderRadius: "50%" }} preview={false} />
                                          <div className={styles.name}>
                                             <h3>{item.name}</h3>
                                             <div className={styles.introduce_flex}>
                                                <p>{item.position}</p>
                                                <p>{item.time}</p>
                                             </div>
                                          </div>
                                       </div>
                                       <Dropdown menu={{ items }} placement="bottomRight" arrow>
                                          <Image alt="/" src="/img/group/dot9.svg" preview={false} />
                                       </Dropdown>
                                    </div>
                                    <p>{item.title}</p>
                                    <Image alt="/" src={item.content} height={170} preview={false} />
                                 </div>
                              );
                           })}
                        </div>
                     </div>
                  </div>
                  <div className={styles.all_status}>
                     {dataStatus.map((item, index) => {
                        return (
                           <div className={styles.status} key={item.id}>
                              <div className={styles.post}>
                                 <>
                                    <div className={styles.post__header}>
                                       <div className={styles.post__header__left}>
                                          <div className={styles.post__header__left__avatar}>
                                             <Image src={item.avatar} alt="avatar" width={40} height={40} preview={false} className={styles.avatar} />
                                          </div>
                                          <div className={styles.post__header__left__info}>
                                             <div className={styles.post__header__left__info__author_name}>
                                                <a href="/">{item.name} </a>
                                                <span className={styles.post_fell}>{item.feel}</span>
                                                <span className={styles.post_with}>
                                                   {item.withs}
                                                   <a href="/"> {item.friend} </a>
                                                </span>
                                                <span className={styles.post_at}>
                                                   {item.at}
                                                   <span className={styles.post_at_bold}>{item.address}</span>
                                                </span>
                                             </div>

                                             <div className={styles.post__header__left__info__time}>
                                                <p className={styles.info__time}>{item.time}</p>
                                                <div className={styles.info__regime}>
                                                   <Tooltip title="Công khai" placement="bottom" arrow={false}>
                                                      <Image src="/img/img-home/regime/regime1.svg" alt="" width={20} height={20} preview={false} className={styles.iconRegime} />
                                                   </Tooltip>
                                                </div>
                                             </div>
                                          </div>
                                       </div>
                                       <div className={styles.post__header__right}>
                                          <div className={styles.post__header__right__icon}>
                                             <Popover
                                                placement="bottomRight"
                                                content={<OptionPost menuItems={menuOptionPost} onMenuItemClick={() => handlePopoverItemClick("", index)} />}
                                                trigger="click"
                                                arrow={false}
                                                open={isOptionPopoverOpen[index]}
                                                onOpenChange={(open) => {
                                                   if (!isOptionPopoverOpen[index]) {
                                                      const newArr = Array(isOptionPopoverOpen.length).fill(false);
                                                      newArr[index] = true;
                                                      setIsOptionPopoverOpen(newArr);
                                                      console.log(isOptionPopoverOpen);
                                                   } else {
                                                      setIsOptionPopoverOpen(Array(isOptionPopoverOpen.length).fill(false));
                                                   }
                                                }}>
                                                <Image
                                                   src="/img/img-header/ep_post_more.svg"
                                                   alt="icon"
                                                   width={20}
                                                   height={20}
                                                   preview={false}
                                                   // onClick={() => setIsOptionPopoverOpen(!isOptionPopoverOpen)}
                                                   style={{
                                                      cursor: "pointer",
                                                      marginRight: "10px",
                                                   }}
                                                />
                                             </Popover>
                                          </div>
                                       </div>
                                    </div>
                                    <div className={styles.post__content}>
                                       <div className={styles.post__content__text}>
                                          <p>{item.content}</p>
                                       </div>
                                       <div className={styles.post__content__image}>
                                          <Image src={item.collection} alt="icon" />
                                       </div>
                                       {/* <PostVideo /> */}
                                    </div>
                                    <div className={styles.post__count_reaction}>
                                       <div className={styles.post__reaction__count_like}>
                                          <Popover placement="bottomLeft" content={content} trigger="hover" arrow={false}>
                                             <Image src={selectedImage} alt="icon" width={25} height={25} preview={false} />
                                          </Popover>
                                          <Popover placement="bottomLeft" content={content} trigger="hover" arrow={false}>
                                             <p className={styles.post__reaction__count_like__text}>{likeCount} Người</p>
                                          </Popover>
                                       </div>
                                       <div className={styles.sum__comment}>
                                          <div className={styles.post__reaction__count_comment}>
                                             <Popover placement="bottomLeft" content={content} trigger="hover" arrow={false}>
                                                <span className={styles.post__reaction__count_comment}>
                                                   1.000
                                                   <span> Bình luận </span>
                                                </span>
                                             </Popover>
                                          </div>

                                          <div className={styles.post__reaction__count_share}>
                                             <Popover placement="bottomLeft" content={content} trigger="hover" arrow={false}>
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
                                       <ReactionIcons selectedImage={selectedImage} onSelectImage={handleImageClick} />
                                       <div className={styles.post__footer__middle} onClick={handleCommentClick}>
                                          <div className={styles.post__footer__middle__icon}>
                                             <Image src="/img/img-home/ep_post_cmt.svg" alt="icon" width={25} height={25} preview={false} />
                                          </div>
                                          <div className={styles.post__footer__middle__text}>
                                             <p>Bình luận</p>
                                          </div>
                                       </div>

                                       <Popover
                                          placement="bottomRight"
                                          content={<OptionPost menuItems={menuOptionSharePost} onMenuItemClick={handlePopoverItemClick} />}
                                          trigger="click"
                                          arrow={false}
                                          open={isSharePopoverOpen}
                                          onOpenChange={(open) => setIsSharePopoverOpen(open)}>
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
                                          <Popover content={menu} trigger="click" arrow={false} placement="bottomRight">
                                             <div className={styles.post__comment_sort}>
                                                Mới nhất
                                                <span>
                                                   <DownOutlined rev={undefined} className={styles.post__comment_sort_icon} />
                                                </span>
                                             </div>
                                          </Popover>
                                          {comments.map((comment, index) => (
                                             <div key={index} className={styles.comment}>
                                                <div className={styles.comment__avatar_user}>
                                                   <Image src={comment.avatar} width={40} height={40} preview={false} className={styles.comment__avatar_user_img} alt="avatar" />
                                                </div>
                                                <div className={styles.comment__content}>
                                                   <div className={styles.comment__content_info}>
                                                      <p className={styles.comment__name}>{comment.name}</p>
                                                      <p className={styles.comment__text}>{comment.content}</p>
                                                   </div>
                                                   <div className={styles.comment__content_reaction}>
                                                      <p className={styles.comment__cxuc}>Thích</p>
                                                      <p className={styles.comment__reply} onClick={() => handleReplyClick(index)}>
                                                         Trả lời
                                                      </p>

                                                      <p className={styles.comment__day}>{comment.day}</p>
                                                      <p>lúc</p>
                                                      <p className={styles.comment__timestamp}>{comment.timestamp}</p>
                                                   </div>
                                                   {selectedReplyIndex === index && <PostComment onSubmitComment={handleSubmitComment} parentId={index} />}
                                                </div>
                                             </div>
                                          ))}
                                       </div>
                                    )}
                                 </>
                              </div>
                           </div>
                        );
                     })}
                  </div>
               </div>
               <div className={styles.content_bot}>
                  <div className={styles.introduce}>
                     <p className={styles.introduce_p}>Giới thiệu</p>
                     <div className={styles.introduce_content}>
                        <p>Đây là nhóm Fan MU Việt Nam</p>
                        <div className={styles.introduce_flex}>
                           <Image alt="/" src="/img/group/earth.png" preview={false} />
                           <div>
                              <h3>Công khai</h3>
                              <p>Bất kỳ ai cũng có thể nhìn thấy mọi người trong nhóm và những gì họ đăng.</p>
                           </div>
                        </div>
                        <div className={styles.introduce_flex}>
                           <Image alt="/" src="/img/group/eye.png" preview={false} />
                           <div>
                              <h3>Hiển thị</h3>
                              <p>Ai cũng có thể tìm nhóm này.</p>
                           </div>
                        </div>
                        <Button className={`thuc_btn_full`}>Tìm hiểu thêm</Button>
                     </div>
                  </div>
                  <div className={styles.introduce}>
                     <p className={styles.introduce_p}>File phương tiện mới chia sẻ</p>
                     <div className={styles.introduce_all_img}>
                        {dataImg.map((item) => {
                           return (
                              <div className={styles.introduce_img} key={item.key}>
                                 <Image alt="/" src={item.img} height={170} preview={false} />
                              </div>
                           );
                        })}
                     </div>
                     <Button className={`thuc_btn_full`}>Xem tất cả</Button>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
};
export default Discuss;
