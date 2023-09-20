import React from 'react';
import { ConfigProvider, Tabs } from 'antd';
import type { TabsProps } from 'antd';

import styles from './caidat.module.scss';

const onChange = (key: string) => {
    console.log(key);
};

const items: TabsProps['items'] = [
    {
        key: '1',
        label: 'Cài đặt chung',
        children: 'Content of Tab Pane 1',
    },
    {
        key: '2',
        label: 'Thông tin bảo mật',
        children: 'Content of Tab Pane 2',
    },
    {
        key: '3',
        label: 'Nhật ký hoạt động',
        children: 'Content of Tab Pane 3',
    },
    {
        key: '4',
        label: 'Danh sách thành viên',
        children: 'Content of Tab Pane 4',
    },
    {
        key: '5',
        label: 'Nhóm - thảo luận',
        children: 'Content of Tab Pane 5',
    }
];

const App: React.FC = () =>
    <div className={`${styles.abc} abc`}>
        <ConfigProvider
            theme={{
                token: {
                    colorBgContainer: '#ccc',
                },
            }}
        >
            <Tabs
                defaultActiveKey="1"
                items={items}
                onChange={onChange}
            />
        </ConfigProvider>
    </div>
export default App;
