import { SearchOutlined } from '@ant-design/icons'
import { Input, Menu, Image, Button, Popover } from 'antd'
import { useRouter } from 'next/router';
import React, { useState } from 'react'
import styles from './index.module.scss'

import SideBar from '@/components/header/sidebar/sidebar';
import addQuestions from '@/components/dat/traodoicauhoi/addQuestion/addQuestion';

const SelectOptions = [
    {
        key: '1',
        value: 'Wiki',
        img: '/img/QTTT/wiki.png',
    },
    {
        key: '2',
        value: 'Trao đổi - Đặt câu hỏi',
        img: '/img/QTTT/traodoicauhoi.png',
    },
    {
        key: '3',
        value: 'Câu hỏi của tôi',
        img: '/img/QTTT/cauhoicuatoi.png',
    },
];

export default function TraoDoiCauHoi() {

    const router = useRouter();
    const [subMenuOpen, setSubMenuOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(SelectOptions[1]);

    const handleMouseEnter = () => {
        setSubMenuOpen(true);
    };

    const handleMouseLeave = () => {
        setSubMenuOpen(false);
    };

    const handleMenuClick = (option: any) => {
        setSelectedOption(option);
        setSubMenuOpen(false);

        if (option.key === '1') {
            router.push('/quantritrithuc/wiki');
        }
        if (option.key === '2') {
            router.push('/quantritrithuc/traodoicauhoi');
        }
        if (option.key === '3') {
            router.push('/quantritrithuc/cauhoicuatoi');
        }
    };

    const remainingOptions = SelectOptions.filter(option => option.key !== selectedOption.key);

    return (
        <div
            className={`${styles.TDCHContainer} QTTTContainer flex`}
        >
            <div className={`${styles.sidebar}`}>
                <SideBar />
            </div>
            <div className={`${styles.subSidebar}`}></div>
            <div className={`${styles.TDCHContent} `}>
                <div className={`${styles.TDCHContentBody} flex`}>
                    <div className={`${styles.TDCHContentBodyLeft} `}>
                        <div className={`${styles.TDCHSearchInput} `}>
                            <Input
                                placeholder="Tìm kiếm sách"
                                suffix={<SearchOutlined rev={undefined} />}
                                className={styles.searchInput}
                                size="large"
                            />
                        </div>
                        <div className={`${styles.TDCHContentBodyLeftContent} `}>
                            addQuestions
                        </div>
                    </div>
                    <div
                        className={styles.contentRightContainer}
                    >
                        <div
                            className={`${styles.TDCHcontentRight} TDCHcontentRight`}
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                        >
                            <div>
                                <div
                                    className={`${styles.selectedOption} cursor-pointer`}
                                >
                                    <Image
                                        src={selectedOption.img}
                                        alt={selectedOption.value}
                                        preview={false}
                                    />
                                    <span className={`${styles.optionText} cursor-pointer`}>{selectedOption.value}</span>
                                </div>
                                <Menu
                                    style={{ display: subMenuOpen ? 'block' : 'none' }}
                                    onClick={(e) => handleMenuClick(remainingOptions.find(option => option.key === e.key))}
                                >
                                    {remainingOptions.map(option => (
                                        <Menu.Item key={option.key}>
                                            <div
                                                style={{
                                                    display: 'flex',
                                                    gap: '20px',
                                                }}
                                            >
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
                            <div className={`${styles.t}`}>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
