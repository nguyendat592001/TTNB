import { CaretDownOutlined, UserOutlined, SettingOutlined, LogoutOutlined, RightOutlined } from "@ant-design/icons";
import { Dropdown, Image, Menu } from "antd";
import React from "react";
import styles from './user.module.css';

export default function User(): JSX.Element {
    const menuItems = [
        {
            key: "1",
            icon: "/img/c.png",
            label: "Nguyễn Thế Đạt",
            isFirstImage: true,
            link: "/",
        },
        {
            key: "2",
            icon: "/img/img-header/user/ep_icon_friend.svg",
            label: "Bạn bè",
            link: "/",
        },
        {
            key: "3",
            icon: "/img/img-header/user/ep_icon_group.svg",
            label: "Nhóm",
            link: "/",
        },
        {
            key: "4",
            icon: "/img/img-header/user/ep_icon_save.svg",
            label: "Đã lưu",
            link: "/",
        },
        {
            key: "5",
            icon: "/img/img-header/user/ep_info_event.svg",
            label: "Sự kiện",
            link: "/",
        },
        {
            key: "6",
            icon: "/img/img-header/user/ep_info_mess.svg",
            label: "Tin nhắn",
            link: "/",
        },
        {
            key: "7",
            icon: "/img/img-header/user/ep_info_kn.svg",
            label: "Sự kiện",
            link: "/",
        },
        {
            key: "8",
            icon: "/img/img-header/user/v_header_info_acc.svg",
            label: "Thông tin tài khoản",
            link: "/",
        },
        {
            key: "9",
            icon: "/img/img-header/user/v_header_menu_danhgia.svg",
            label: "Đánh giá",
            link: "/",
        },
        {
            key: "10",
            icon: "/img/img-header/user/v_header_menu_error.svg",
            label: "Báo lỗi",
            link: "/",
        },
        {
            key: "11",
            icon: "/img/img-header/user/v_header_menu_huongdan.svg",
            label: "Hướng dẫn",
            link: "/",
        },
        {
            key: "12",
            icon: "/img/img-header/user/v_header_menu_logout.svg",
            label: "Đăng xuất",
            link: "/",
        },
    ];
    const userMenu = (
        <div>
            <Menu className={`${styles.MenuUser} MenuUser`}>
                {menuItems.map((item, index) => (
                    <React.Fragment key={item.key}>
                        <Menu.Item
                            className={`${styles.menuItem} ${index >= 7 ? styles.itemWithSpacing : ''}`}
                        >
                            <a href={item.link} className={styles.menuLink}>
                                <Image
                                    width={index >= 7 ? 25 : 40}
                                    height={index >= 7 ? 25 : 40}
                                    src={item.icon}
                                    alt={item.label}
                                    preview={false}
                                    className={styles.menuIcon}
                                    style={item.isFirstImage ? { borderRadius: '50%' } : {}}
                                />
                                <span className={index >= 7 ? styles.menuLabelAfter : styles.menuLabel}>
                                    {item.label}
                                </span>
                            </a>
                            {index >= 7 && <RightOutlined
                                rev={undefined}
                                style={{
                                    position: 'absolute',
                                    right: '20px',
                                    fontSize: '16px',
                                    top: 'calc(50% - 7px)',
                                }}
                            />}
                        </Menu.Item>
                        {index === 6 && <Menu.Divider style={{
                            margin: '4px 16px',
                            height: '1px',
                            backgroundColor: '#000',
                        }} />}
                    </React.Fragment>
                ))}
            </Menu>

        </div >

    );
    return (
        <Dropdown overlay={userMenu} placement="bottomLeft" trigger={['click']}>
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
