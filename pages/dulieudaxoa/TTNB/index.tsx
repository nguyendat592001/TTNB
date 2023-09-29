import SideBar from '@/components/header/sidebar/sidebar'
import React, { useState } from 'react'
import { Button, Image, Input, Modal, Tabs } from "antd";
import type { TabsProps } from "antd";
import styles from './index.module.scss'
import { LeftOutlined, SearchOutlined } from '@ant-design/icons';
import ContentTab1 from '@/components/dat/dulieudaxoa/ContentTab1';
import ContentTab2 from '@/components/dat/dulieudaxoa/ContentTab2';
import { useRouter } from 'next/router';


export default function TTNB() {
    const router = useRouter();
    const [activeTabs, setActiveTabs] = useState("1");

    const [selectAll, setSelectAll] = useState(false);
    const [selectedItems, setSelectedItems] = useState([]);

    const [isModalDeleteOpen, setIsModalDeleteOpen] = useState(false);
    const [isModalRestoreOpen, setIsModalRestoreOpen] = useState(false);
    const [selectedAction, setSelectedAction] = useState('');


    const showRestoreModal = () => {
        setSelectedAction('Khôi phục');
        setIsModalRestoreOpen(true);
    };

    const showDeleteModal = () => {
        setSelectedAction('Xóa');
        setIsModalDeleteOpen(true);
    };

    const handleRestoreModalOk = () => {
        setIsModalRestoreOpen(false);
    };

    const handleRestoreModalCancel = () => {
        setIsModalRestoreOpen(false);
    };

    const handleDeleteModalOk = () => {
        setIsModalDeleteOpen(false);
    };

    const handleDeleteModalCancel = () => {
        setIsModalDeleteOpen(false);
    };

    const handleSelectAll = () => {
        if (!selectAll) {
            setSelectedItems(itemsTab.map((item) => item.key));
        } else {
            setSelectedItems([]);
        }
        setSelectAll(!selectAll);
    };
    const onChange = (key: string) => {
        setActiveTabs(key);
    };
    const RenderTab1 = () => {
        if (activeTabs === "1") {
            return (
                <Image
                    src="/logo/deleteData/tab1-xanh.svg"
                    alt="tab1"
                    width={22}
                    height={22}
                    preview={false}
                />
            );
        } else {
            return (
                <Image
                    src="/logo/deleteData/tab1-xam.svg"
                    alt="tab1"
                    width={22}
                    height={22}
                    preview={false}
                />
            );
        }
    };
    const RenderTab2 = () => {
        if (activeTabs === "2") {
            return (
                <Image
                    src="/logo/deleteData/tab2-xanh.svg"
                    alt="tab2"
                    width={22}
                    height={22}
                    preview={false}
                />
            );
        } else {
            return (
                <Image
                    src="/logo/deleteData/tab2-xam.svg"
                    alt="tab2"
                    width={22}
                    height={22}
                    preview={false}
                />
            );
        }
    };

    const itemsTab: TabsProps["items"] = [
        {
            key: "1",
            label: <RenderTab1 />,
            children: <ContentTab1 />,
        },
        {
            key: "2",
            label: <RenderTab2 />,
            children: <ContentTab2 />,
        },
    ];
    return (
        <div className='flex containerTTNB'>
            <div className={`${styles.sidebar}`}>
                <SideBar />
            </div>

            <div className={`${styles.sidebarContent}`}></div>

            <div style={{
                width: '100%',
                height: '100%',
            }}>
                <div
                    onClick={() => router.back()}
                    className={`${styles.backWrapper} flex cursor-pointer`}
                >
                    <LeftOutlined rev={undefined} />
                    <p className={styles.back}>Truyền thông nội bộ</p>
                </div>

                <div id="TableDeleteDataDetail" className={styles.container}>
                    <div className={styles.position}>
                        <div className={styles.btnGroup}>
                            {!selectAll && (
                                <div className={styles.btn}>
                                    <Button block onClick={handleSelectAll}>
                                        Chọn tất cả
                                    </Button>
                                </div>
                            )}
                            {selectAll && selectedItems.length > 0 && (
                                <div className={styles.btn}>
                                    <Button block
                                        onClick={showRestoreModal}
                                    >Khôi phục</Button>
                                </div>
                            )}
                            {selectAll && selectedItems.length > 0 && (
                                <div className={styles.btn}>
                                    <Button block
                                        onClick={showDeleteModal}
                                    >Xóa</Button>
                                </div>
                            )}
                            {selectAll && selectedItems.length > 0 && (
                                <div className={styles.btn}>
                                    <Button block
                                        onClick={handleSelectAll}
                                    >
                                        Bỏ chọn tất cả
                                    </Button>
                                </div>
                            )}
                        </div>
                        <div className={styles.searchWrapper}>
                            <Input
                                placeholder="Tìm kiếm"
                                size="large"
                                className={styles.search}
                                suffix={
                                    <SearchOutlined
                                        className="cursor-pointer"
                                        rev={"xxx"}
                                    />
                                }
                            />
                        </div>
                    </div>
                    <Tabs
                        defaultActiveKey="1"
                        items={itemsTab}
                        onChange={onChange}
                        className={`${styles.tabTTNB} tabTTNB`}
                    />
                </div>
            </div>
            <Modal
                title={selectedAction}
                open={isModalRestoreOpen}
                onOk={handleRestoreModalOk}
                onCancel={handleRestoreModalCancel}
                footer={null}
                className={`${styles.modalRestore} ttnbModalRestore`}
            >
                <p
                    className={styles.modalRestoreContent}
                >Bạn có chắc muốn khôi phục
                    <span style={{
                        fontWeight: 'bold',
                        margin: '0 5px',

                    }}>Tài liệu ABC</span>
                    thông tin về tài liệu sẽ được khôi phục lại vị trí ban đầu?</p>

                <div className={styles.modalRestoreBtn}>
                    <Button
                        size='large'
                        onClick={handleRestoreModalCancel}
                        className={styles.modalRestoreBtnCancel}
                    >
                        Hủy
                    </Button>
                    <Button
                        size='large'
                        onClick={handleRestoreModalOk}
                        className={styles.modalRestoreBtnOk}
                    >
                        Khôi phục
                    </Button>
                </div>
            </Modal>

            <Modal
                title={selectedAction}
                open={isModalDeleteOpen}
                onOk={handleDeleteModalOk}
                footer={null}
                onCancel={handleDeleteModalCancel}
                className={`${styles.modalDelete} ttnbModalDelete`}
            >
                <p
                    className={styles.modalDeleteContent}
                >Bạn có chắc muốn xóa vĩnh viễn? Tất cả nội dung sẽ
                    <span
                        style={{
                            fontWeight: 'bold',
                            margin: '0 5px',
                        }}
                    >không thể khôi phục lại.</span>
                </p>

                <div className={styles.modalDeleteBtn}>
                    <Button
                        size='large'
                        onClick={handleDeleteModalCancel}
                        className={styles.modalDeleteBtnCancel}
                    >
                        Hủy
                    </Button>
                    <Button
                        size='large'
                        onClick={handleDeleteModalOk}
                        className={styles.modalDeleteBtnOk}
                    >
                        Xóa
                    </Button>
                </div>
            </Modal>
        </div>
    )
}
