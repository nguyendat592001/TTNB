import { SearchOutlined } from '@ant-design/icons'
import { Button, Image, Input, Table } from 'antd'
import { ColumnsType } from 'antd/es/table';
import React, { useState } from 'react'

import styles from './NhomThaoLuan.module.scss'

interface DataType {
}

export default function NhomThaoLuan() {

    const columns: ColumnsType<DataType> = [
        {
            title: 'STT',
            dataIndex: 'stt',
            key: 'stt',
            align: 'center',
        },
        {
            title: 'Nhóm - thảo luận',
            dataIndex: 'nhomThaoLuan',
            key: 'nhomThaoLuan',
            align: 'center',
        },
        {
            title: 'Quản trị',
            dataIndex: 'quanTri',
            key: 'quanTri',
            align: 'center',
        },
        {
            title: 'Số lượng thành viên',
            dataIndex: 'soLuongThanhVien',
            key: 'soLuongThanhVien',
            align: 'center',
        },
        {
            title: 'Chế độ',
            dataIndex: 'cheDo',
            key: 'cheDo',
            align: 'center',
        },
    ];

    const data: DataType[] = [
        {
            stt: 1,
            nhomThaoLuan: 'Nhóm 1',
            quanTri: 'dat',
            soLuongThanhVien: 10,
            cheDo: 'Công khai',
        },
        {
            stt: 2,
            nhomThaoLuan: 'Nhóm 2',
            quanTri: 'dat123',
            soLuongThanhVien: 20,
            cheDo: 'Công khai',
        },
    ];

    const [searchQuery, setSearchQuery] = useState('');

    const filteredData = data.filter((item) =>
        item.nhomThaoLuan.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        const query = e.target.value;
        setSearchQuery(query);
    };

    return (
        <>
            <div
                className={`${styles.headerContainer}`}
            >
                <div className={`${styles.header} flex flex-align-center flex-space-between `}>
                    <div className={`${styles.headerSearch}`}>
                        <Input
                            placeholder="Tìm kiếm nhóm-thảo luận"
                            className={`${styles.headerSearchInput}`}
                            size="large"
                            suffix={<SearchOutlined rev={undefined} />}
                            bordered={false}
                        />
                    </div>

                    <div className={`${styles.headerAddGroup}`}>
                        <Button
                            className={`${styles.headerAddGroupButton} flex flex-align-center`}
                            onClick={() => console.log('click')}
                            size="large"
                        >
                            <Image
                                src='/img/caidat/themnhom.png'
                                alt='loi'
                                preview={false}
                                className={`${styles.headerAddGroupButtonImage}`}
                            />
                            <p
                                className={`${styles.headerAddGroupButtonText}`}
                            >Thêm nhóm - thảo luận</p>
                        </Button>
                    </div>
                </div>
            </div>
            <div className={styles.TableGroup}>
                <Table
                    columns={columns}
                    dataSource={filteredData}
                    pagination={false}
                />
            </div>
        </>
    )
}
