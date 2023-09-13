import React, { useState } from 'react';
import {
    AppstoreOutlined,
    ContainerOutlined,
    DesktopOutlined,
    MailOutlined,
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    PieChartOutlined,
} from '@ant-design/icons';
import { Col, ConfigProvider, MenuProps, Row } from 'antd';
import { Button, Menu } from 'antd';

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
import styles from './newHeader.module.css';
import NewNotify from './newNotify/newNotify';
import NewSidebar from './newSidebar/newSidebar';

interface HeaderNewProps {
    collapsed: boolean;
    toggleCollapsed: () => void;
}

const HeaderNew: React.FC<HeaderNewProps> = ({ collapsed, toggleCollapsed }) => {

    return (
        <>
            <div className={styles.container}>
                <Row gutter={48} className={styles.row}>
                    <Col lg={11} md={6} xs={7} offset={1} className={`${styles.Sidebar} SideBar`} >
                        <Button
                            type="primary"
                            style={{ marginBottom: 16 }}
                            className={styles.btnMenu}
                            onClick={toggleCollapsed}
                        >
                            {collapsed ? <MenuUnfoldOutlined rev={undefined} /> : <MenuFoldOutlined rev={undefined} />}
                        </Button>
                    </Col>
                    <Col lg={8} md={6} xs={7} offset={4} className={styles.colNotify} >
                        <NewNotify />
                    </Col>
                </Row>
            </div>
            <NewSidebar collapsed={collapsed} toggleCollapsed={toggleCollapsed} />
        </>
    )
}
export default HeaderNew;
