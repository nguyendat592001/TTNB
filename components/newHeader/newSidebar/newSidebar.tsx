import {
    AppstoreOutlined,
    ContainerOutlined,
    DesktopOutlined,
    MailOutlined,
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    PieChartOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Button, Menu } from 'antd'
import React, { useState } from 'react'
import styles from './newSidebar.module.css'


type MenuItem = Required<MenuProps>['items'][number];

function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
    type?: 'group',
): MenuItem {
    return {
        key,
        icon,
        children,
        label,
        type,
    } as MenuItem;
}

interface NewSidebarProps {
    collapsed: boolean;
    toggleCollapsed: () => void;
}

const items: MenuItem[] = [
    getItem('Option 1', '1', <PieChartOutlined rev={undefined} />),
    getItem('Option 2', '2', <DesktopOutlined rev={undefined} />),
    getItem('Option 3', '3', <ContainerOutlined rev={undefined} />),
    getItem('Option 4', '4', <AppstoreOutlined rev={undefined} />),
    getItem('Option 5', '5', <MailOutlined rev={undefined} />),
    getItem('Option 6', '6', <MailOutlined rev={undefined} />),
    getItem('Option 7', '7', <MailOutlined rev={undefined} />),
    getItem('Option 8', '8', <MailOutlined rev={undefined} />),
    getItem('Option 9', '9', <MailOutlined rev={undefined} />),
    getItem('Option 10', '10', <MailOutlined rev={undefined} />),
];

const NewSidebar: React.FC<NewSidebarProps> = ({ collapsed, toggleCollapsed }) => {

    return (
        <>
            <div style={{ width: 256 }}>

                <Button
                    type="primary"
                    onClick={toggleCollapsed}
                    style={{ marginBottom: 16 }}
                    className={styles.btnMenu}
                >
                    {collapsed ? <MenuUnfoldOutlined rev={undefined} /> : <MenuFoldOutlined rev={undefined} />}
                </Button>

                <Menu
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    mode="inline"
                    theme="dark"
                    inlineCollapsed={collapsed}
                    items={items}
                />
            </div>
        </>
    )
}
export default NewSidebar