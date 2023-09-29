import { List, Image } from 'antd';
import React from 'react';
import styles from './ContentTab.module.scss';
interface DataProps {
    key: string;
    day: number;
    month: number;
    year: number;
    time: string;
    name: string;
    description: string;
    department: string;
}

const dataForContentCollapse: DataProps[] = [
    {
        key: '1',
        day: 1,
        month: 9,
        year: 2023,
        time: '10:00 AM',
        name: 'dat123',
        description: 'alo1234',
        department: 'vn',
    },
    {
        key: '2',
        day: 2,
        month: 9,
        year: 2023,
        time: '11:30 AM',
        name: 'viet123',
        description:
            'alo113',
        department: 'vn',
    },
];

export default function ContentTab2() {
    // Tạo một đối tượng Map để nhóm dữ liệu theo ngày
    const groupedData = new Map<string, DataProps[]>();
    dataForContentCollapse.forEach((data) => {
        const key = `${data.day}.${data.month}.${data.year}`;
        if (!groupedData.has(key)) {
            groupedData.set(key, []);
        }
        groupedData.get(key)?.push(data);
    });

    const dataSource = Array.from(groupedData.keys()).map((key) => {
        return {
            key,
            data: groupedData.get(key) || [],
        };
    });

    const renderItem = (item: { key: string; data: DataProps[] }) => (
        <List.Item>
            <div>
                <ul>
                    {item.data.map((data) => (
                        <li
                            key={data.key}
                            className={`${styles.listItem}`}
                        >
                            <div
                                className='flex flex-align-center flex-space-between'
                                style={{
                                    gap: '20px',
                                }}
                            >
                                <Image
                                    src="/img/dulieudaxoa/imgdaxoa.png"
                                    alt="avatar"
                                    preview={false}
                                />
                                <div
                                    className='flex'
                                    style={{
                                        gap: '200px',
                                    }}
                                >
                                    <div className={`${styles.timeDelete} flex`} >
                                        <p>{`${data.day}.${data.month}.${data.year}`}</p>
                                        <p>{data.time}</p>
                                    </div>
                                    <input
                                        type="checkbox"
                                        className={`${styles.checkboxDelete}`}
                                    />
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </List.Item>
    );

    return (
        <div>
            <List
                dataSource={dataSource}
                renderItem={renderItem}
                itemLayout="vertical"
                pagination={false}
            />
        </div>
    );
}
