import { EditOutlined, SaveOutlined } from "@ant-design/icons";
import { ConfigProvider, Dropdown, Menu, Image } from "antd";

import styles from "./OptionPost.module.css";

type MenuItem = {
    key: string;
    icon: JSX.Element;
    text: string;
};

function OptionPost({ menuItems }: { menuItems: MenuItem[] }) {

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