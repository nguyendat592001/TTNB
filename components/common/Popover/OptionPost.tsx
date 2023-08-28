import { EditOutlined, SaveOutlined } from "@ant-design/icons";
import { ConfigProvider, Dropdown, Menu, Image } from "antd";

import styles from "./OptionPost.module.css";

const menuItems = [
    {
        key: 'save',
        icon: <Image
            src='/img/img-OptionPost/ep_post_save.svg'
            alt='icon'
            width={20}
            height={20}
            preview={false}
        />,
        text: 'Lưu bài viết',
    },
    {
        key: 'disableNotifications',
        icon: <Image
            src='/img/img-OptionPost/ep_post_turn_off_notify.svg'
            alt='icon'
            width={20}
            height={20}
            preview={false}
        />,
        text: 'Tắt thông báo',
    },
    {
        key: 'turnOnNotific',
        icon: <Image
            src='/img/img-OptionPost/nv_who_can_comment.png'
            alt='icon'
            width={20}
            height={20}
            preview={false}
        />,
        text: 'Ai có thể bình luận về bài viết của bạn',
    },
    {
        key: 'editPost',
        icon: <Image
            src='/img/img-OptionPost/chinh-sua.svg'
            alt='icon'
            width={20}
            height={20}
            preview={false}
        />,
        text: 'Chỉnh sửa bài viết',
    },
    {
        key: 'editViewObject',
        icon: <Image
            src='/img/img-home/regime/regime1.svg'
            alt='icon'
            width={20}
            height={20}
            preview={false}
        />,
        text: 'Chỉnh sửa đối tượng xem bài viết',
    },
];
function OptionPost() {

    return (
        <div className={`${styles.MenuOptionPost} MenuOptionPost`}>
            <ConfigProvider
                theme={{
                    components: {
                        Menu: {
                            darkItemBg: 'white',
                            darkItemSelectedBg: '#ccc',
                            darkItemHoverBg: '#ccc',
                            darkItemColor: 'black',
                            groupTitleColor: 'black',
                        },
                    },
                }}
            >
                <Menu
                    theme='dark'
                    className={`${styles.menuOption} menuOption`}
                >
                    {menuItems.map(item => (
                        <Menu.Item key={item.key} icon={item.icon}>
                            <span className={styles.menuText}>{item.text}</span>
                        </Menu.Item>
                    ))}
                </Menu>
            </ConfigProvider>
        </div >
    );
}

export default OptionPost;