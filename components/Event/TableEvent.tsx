import { Modal, Space, Table } from 'antd';
import { ColumnsType } from 'antd/es/table';
import { useState } from 'react';
import styles from './TableEvent.module.css';

interface DataType {
    key: string;
    stt: string;
    tatcasukien: string;
    nguoitao: string;
    time: string;
    chucvu: string;
}

const TableEvent: React.FC = () => {
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [selectedRow, setSelectedRow] = useState<DataType | null>(null);

    const columns: ColumnsType<DataType> = [
        {
            title: 'STT',
            dataIndex: 'stt',
            key: 'stt',
            align: "center"
        },
        {
            title: 'Tất cả sự kiện',
            dataIndex: 'tatcasukien',
            key: 'tatcasukien',
            align: "center",
            render: (name, record) => (
                <Space direction="vertical">
                    <a className={styles.tensukien}>{name}</a>
                    <a className={styles.thoigian}>{record.time}</a>
                </Space>
            ),
        },
        {
            title: 'Người tạo',
            dataIndex: 'nguoitao',
            key: 'nguoitao',
            align: "center",
            render: (name, record) => (
                <Space direction="vertical">
                    <a className={styles.nguoitao}>{name}</a>
                    <a className={styles.chucvu}>{record.chucvu}</a>
                </Space>
            ),
        },

        {
            title: 'Delete',
            dataIndex: 'delete',
            key: 'delete',
            align: "center",
            render: (_, record: DataType) => (
                <Space direction="vertical">
                    <a className={styles.delete} onClick={() => showDeleteModal(record)}>Delete</a>
                </Space>
            ),
        }
    ];

    let data: DataType[] = [
        {
            key: '1',
            stt: '1',
            tatcasukien: "Event 1",
            nguoitao: 'Đạt',
            chucvu: 'Manager',
            time: '10:00 AM',
        },
        {
            key: '2',
            stt: '2',
            tatcasukien: "Event 2",
            nguoitao: 'Đạt',
            chucvu: 'Developer',
            time: '2:30 PM',
        },
        {
            key: '3',
            stt: '3',
            tatcasukien: "Event 3",
            nguoitao: 'Đạt',
            chucvu: 'Designer',
            time: '7:45 AM',
        },
    ];

    const showDeleteModal = (record: DataType) => {
        setSelectedRow(record);
        setIsDeleteModalOpen(true);
    };

    const handleDelete = () => {
        if (selectedRow) {
            const newData = data.filter(item => item.key !== selectedRow.key);
            data = newData;
            setIsDeleteModalOpen(false);
        }
    };

    const handleCancel = () => {
        setIsDeleteModalOpen(false);
    };

    return (
        <div>
            <Table
                columns={columns}
                dataSource={data}
                pagination={false}
            />
            <Modal
                title="Confirm Delete"
                visible={isDeleteModalOpen}
                onOk={handleDelete}
                onCancel={handleCancel}
            >
                <p>Are you sure you want to delete this event?</p>
            </Modal>
        </div>
    );
}

export default TableEvent;
