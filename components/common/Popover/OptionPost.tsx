import { EditOutlined, SaveOutlined } from "@ant-design/icons";
import { ConfigProvider, Dropdown, Menu } from "antd";

import styles from "./OptionPost.module.css";

const menuItems = [
    {
        key: 'save',
        icon: <SaveOutlined rev={undefined} />,
        text: 'Lưu bài viết',
    },
    {
        key: 'disableNotifications',
        icon: <EditOutlined rev={undefined} />,
        text: 'Tắt thông báo',
    },
    {
        key: 'editPost',
        icon: <EditOutlined rev={undefined} />,
        text: 'Chỉnh sửa bài viết',
    },
    {
        key: 'editViewObject',
        icon: <EditOutlined rev={undefined} />,
        text: 'Chỉnh sửa đối tượng xem bài viết',
    },
];
function OptionPost() {

    return (
        <div className={styles.container}>
            <ConfigProvider
                theme={{
                    components: {
                        Menu: {
                            darkItemSelectedBg: '#ccc',
                            darkItemHoverBg: '#ccc',
                            darkItemBg: 'white'
                        },
                    },
                }}
            >
                <Menu
                    theme='dark'
                    className={styles.menuOption}
                >
                    {menuItems.map(item => (
                        <Menu.Item key={item.key} icon={item.icon}>
                            {item.text}
                        </Menu.Item>
                    ))}
                </Menu>
            </ConfigProvider>
        </div >
    );
}

export default OptionPost;