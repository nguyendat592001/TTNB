import { Input, Image, Button } from "antd";
import React, { useState } from "react";
import styles from "./sukien.module.scss";
import TruyenThongNoiBo from "..";
import { SearchOutlined } from "@ant-design/icons";
import Head from "next/head";
import router from "next/router";
import TableEvent from "@/components/Event/TableEvent";
import ModalViewDetail from "@/components/dat/Modal/TTNB/ModalViewDetail";
import ModalJoinEvent from "@/components/dat/Modal/TTNB/ModalJoinEvent";

export default function Trangcongty() {
    const handleEventNoiBoClick = () => {
        router.push("/truyenthongnoibo/sukien/sukiennoibo");
    };
    const handleEventDoiNgoaiClick = () => {
        router.push("/truyenthongnoibo/sukien/sukiendoingoai");
    };
    const childrenContentLeft = (
        <div className={styles.container}>
            <div className={styles.contentLeft}>
                <>
                    <Input
                        placeholder="Tìm kiếm sự kiện"
                        suffix={<SearchOutlined rev={undefined} />}
                        className={styles.searchInput}
                        bordered={false}
                    />
                    <div className={styles.AllEvent}>
                        <div className={styles.Event}>
                            <div
                                className={styles.EventNoiBo}
                                onClick={handleEventNoiBoClick}
                            >
                                <Image
                                    src='/img/sukien/sk_nb.png'
                                    alt='img'
                                    preview={false}
                                    width={35}
                                    height={35}
                                />
                                <div
                                    className={styles.EventNoiBoContent}
                                >
                                    <p
                                        className={styles.EventNoiBoContentNumber}
                                    >0</p>
                                    <p
                                        className={styles.EventNoiBoContentText}
                                    >Sự kiện nội bộ</p>
                                </div>
                            </div>
                            <div
                                className={styles.EventDoiNgoai}
                                onClick={handleEventDoiNgoaiClick}
                            >
                                <Image
                                    src='/img/sukien/sk_dn.png'
                                    alt='img'
                                    preview={false}
                                    width={35}
                                    height={35}
                                />
                                <div
                                    className={styles.EventDoiNgoaiContent}
                                >
                                    <p
                                        className={styles.EventDoiNgoaiContentNumber}
                                    >0</p>
                                    <p
                                        className={styles.EventDoiNgoaiContentText}
                                    >Sự kiện đối ngoại</p>
                                </div>
                            </div>
                        </div>
                        <div className={styles.ContentEvent}>
                            <div className={styles.TotalEvent}>
                                <div className={styles.TotalEventTitle}>
                                    <p className={styles.TotalEventTitleText}>Tổng số sự kiện (1)</p>
                                </div>
                                <div className={`${styles.TableEvent} TableEvent`}>
                                    <TableEvent />
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            </div>
        </div>
    );

    const [isModalViewDetailOpen, setIsModalViewDetailOpen] = useState(false);
    const [isModalJoinEventOpen, setIsModalJoinEventOpen] = useState(false);

    const handleViewDetailClick = () => {
        setIsModalViewDetailOpen(true);
    };

    const handleJoinEventClick = () => {
        setIsModalJoinEventOpen(true);
    };

    const childrenContentRight = (
        <div className={styles.containerRight}>
            <div className={styles.RItem}>
                <div className={styles.RTitle}>
                    <p className={styles.RTitleText}>a</p>
                </div>
                <div className={styles.RContent}>
                    <p>Nội dung sự kiện: <span>a</span></p>
                    <p>Vị trí đăng sự kiện: <span>PHÒNG 3: PHÒNG KỸ THUẬT SỐ 3- Đ/C THU HẰNG</span></p>
                    <p>Thành viên tham gia</p>
                    <p>Danh sách câu hỏi trong sự kiện</p>
                </div>
                <div className={styles.RFooter}>
                    <Button
                        className={styles.RFooterButtonJoin}
                        onClick={handleJoinEventClick}
                    >
                        Tham gia
                    </Button>
                    <Button
                        className={styles.RFooterButtonView}
                        onClick={handleViewDetailClick}
                    >
                        Xem chi tiết
                    </Button>
                </div>
            </div>
            <ModalViewDetail
                open={isModalViewDetailOpen}
                onClose={() => setIsModalViewDetailOpen(false)}
            />
            <ModalJoinEvent
                open={isModalJoinEventOpen}
                onClose={() => setIsModalJoinEventOpen(false)}
            />
        </div>
    );

    return (
        <>
            <Head>
                <title>Trang Sự Kiện</title>
            </Head>
            <TruyenThongNoiBo
                childrenContentLeft={childrenContentLeft}
                childrenContentRight={childrenContentRight}
            />
        </>
    );
}
