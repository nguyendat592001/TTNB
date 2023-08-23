import { CaretDownOutlined, UserOutlined, SettingOutlined, LogoutOutlined } from "@ant-design/icons";
import { Dropdown, Image, Menu } from "antd";
import styles from './notify.module.css';

export default function User(): JSX.Element {
    const userMenu = (
        <Menu>
            <Menu.Item key="1" icon={<UserOutlined rev={undefined} />}>
                Profile
            </Menu.Item>
            <Menu.Item key="2" icon={<SettingOutlined rev={undefined} />}>
                Settings
            </Menu.Item>
            <Menu.Item key="3" icon={<LogoutOutlined rev={undefined} />}>
                Logout
            </Menu.Item>
        </Menu>
    );

    return (
        <Dropdown overlay={userMenu} placement="bottomRight" trigger={['click']}>
            <div className={styles.userDropdownTrigger}>
                <Image
                    src="/img/c.png"
                    alt=""
                    className={styles.avatar}
                    width={40}
                    height={40}
                    preview={false}
                />
                <CaretDownOutlined
                    style={{
                        fontSize: '25px',
                        color: '#999999',
                    }} rev={undefined} />
            </div>
        </Dropdown>
    );
}
