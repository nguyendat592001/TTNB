import DoiNgoaiContent from '@/components/Event/DoiNgoaiContent';
import NoiBoContent from '@/components/Event/NoiBoContent';
import TableEvent from '@/components/Event/TableEvent';
import { SearchOutlined } from '@ant-design/icons';
import { Image, Input, Menu } from 'antd';
import router from 'next/router';
import { useState } from 'react';

import styles from './sukien.module.css';

const SelectOptions = [
    {
        key: '1',
        value: 'Sự kiện',
        img: '/img/sukien/sbp_4.png',
    },
    {
        key: '2',
        value: 'Trang công ty',
        img: '/img/sukien/sbp_1.png',
    },
    {
        key: '3',
        value: 'Thông báo',
        img: '/img/sukien/sbp_2.png',
    },
    {
        key: '4',
        value: 'Tin tức',
        img: '/img/sukien/sbp_3.png',
    },
];

interface SelectOptions {
    key: string;
    value: string;
    img: string;

}
const App: React.FC = () => {
    const [subMenuVisible, setSubMenuVisible] = useState(false);
    const [selectedOption, setSelectedOption] = useState(SelectOptions[0]);
    const [currentContent, setCurrentContent] = useState<React.ReactNode | null>(null);

    const handleMouseEnter = () => {
        setSubMenuVisible(true);
    };

    const handleMouseLeave = () => {
        setSubMenuVisible(false);
    };

    const handleMenuClick = (option: any) => {
        setSelectedOption(option);
        setSubMenuVisible(false);
        if (option.key === "2") {
            router.push("/truyenthongnoibo/trangcongty");
        }
        if (option.key === "3") {
            router.push("/truyenthongnoibo/nhomthaoluan");
        }
        if (option.key === "4") {
            router.push("/truyenthongnoibo/sinh-nhat");
        }
        if (option.key === "1") {
            router.push("/truyenthongnoibo/sukien");
        }
    };

    const handleEventNoiBoClick = () => {
        setCurrentContent(<NoiBoContent />);
    };

    const handleEventDoiNgoaiClick = () => {
        setCurrentContent(<DoiNgoaiContent />);
    };

    const remainingOptions = SelectOptions.filter(option => option.key !== selectedOption.key);
    return (
        <>
            <div className={styles.container}>
                <div className={styles.contentLeft}>
                    {currentContent ? (
                        currentContent
                    ) : (
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
                    )}
                </div>
                <div
                    className={styles.contentRightContainer}
                >
                    <div
                        className={`${styles.contentRight} contentRight`}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                    >
                        <div>
                            <div
                                className={styles.selectedOption}
                            >
                                <Image
                                    src={selectedOption.img}
                                    alt={selectedOption.value}
                                    preview={false}
                                />
                                <span className={styles.optionText}>{selectedOption.value}</span>
                            </div>
                            <Menu
                                style={{ display: subMenuVisible ? 'block' : 'none' }}
                                onClick={(e) => handleMenuClick(remainingOptions.find(option => option.key === e.key))}
                            >
                                {remainingOptions.map(option => (
                                    <Menu.Item key={option.key}>
                                        <div>
                                            <Image
                                                src={option.img}
                                                alt={option.value}
                                                preview={false}
                                            />
                                            <span className={styles.optionText}>{option.value}</span>
                                        </div>
                                    </Menu.Item>
                                ))}
                            </Menu>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default App;