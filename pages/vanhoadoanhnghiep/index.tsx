
import SideBar from '@/components/header/sidebar/sidebar';
import { SearchOutlined } from '@ant-design/icons'
import { Input, Menu, Image, Button, Popover } from 'antd'
import { useRouter } from 'next/router';
import React, { useState } from 'react'

import styles from './index.module.scss'
const SelectOptions = [
    {
        key: '1',
        value: 'Thư từ CEO',
        img: '/img/VHDN/v_1.png',
    },
    {
        key: '2',
        value: 'Tầm nhìn - Sứ mệnh',
        img: '/img/VHDN/v_2.png',
    },
    {
        key: '3',
        value: 'Giá trị cốt lõi - Mục tiêu chiến lược',
        img: '/img/VHDN/v_3.png',
    },
    {
        key: '4',
        value: 'Nguyên tắc làm việc',
        img: '/img/VHDN/v_4.png',
    },
    {
        key: '5',
        value: 'Danh sách phòng ban',
        img: '/img/VHDN/v_5.png',
    },
    {
        key: '6',
        value: 'Cài đặt lịch cập nhật thông tin mới',
        img: '/img/VHDN/v_6.png',
    },
];

interface SelectOptions {
    key: string;
    value: string;
    img: string;

}

interface VHDNProps {
    childrenContentLeft?: React.ReactNode;
    childrenContentRight?: React.ReactNode;
}

export default function Vanhoadoanhnghiep({ childrenContentLeft, childrenContentRight }: VHDNProps) {
    const router = useRouter();
    const [subMenuOpen, setSubMenuOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(SelectOptions[0]);

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
            router.push('/vanhoadoanhnghiep/thutuceo');
        }
        if (option.key === '2') {
            router.push('/vanhoadoanhnghiep/tamnhin-sumenh');
        }
        if (option.key === '3') {
            router.push('/vanhoadoanhnghiep/giatricotloi-muctieu');
        }
        if (option.key === '4') {
            router.push('/vanhoadoanhnghiep/nguyentaclamviec');
        }
        if (option.key === '5') {
            router.push('/vanhoadoanhnghiep/danhsachphongban');
        }
        if (option.key === '6') {
            router.push('/vanhoadoanhnghiep/caidatlichcapnhat');
        }
    };

    const remainingOptions = SelectOptions.filter(option => option.key !== selectedOption.key);
    const handleSelectedOptionClick = () => {
        router.push('/vanhoadoanhnghiep/thutuceo');
    };
    return (
        <div
            className={`${styles.VHDNContainer} VHDNContainer flex`}
        >
            <div className={`${styles.sidebar}`}>
                <SideBar />
            </div>
            <div className={`${styles.subSidebar}`}></div>
            <div className={`${styles.VHDNContent} VHDNContent`}>

                <div className={`${styles.VHDNContentHeader} VHDNContentHeader flex`}>
                    <div className={`${styles.VHDNSearchInput} VHDNSearchInput `}>
                        {childrenContentLeft}
                    </div>
                    <div
                        className={styles.contentRightContainer}
                    >
                        <div
                            className={`${styles.VHDNcontentRight} VHDNcontentRight`}
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                        >
                            <div>
                                <div
                                    className={`${styles.selectedOption} cursor-pointer`}
                                    onClick={handleSelectedOptionClick}
                                >
                                    <Image
                                        src={selectedOption.img}
                                        alt={selectedOption.value}
                                        preview={false}
                                        width={25}
                                    />
                                    <span className={`${styles.optionText} cursor-pointer`}>{selectedOption.value}</span>
                                </div>
                                <Menu
                                    style={{
                                        display: subMenuOpen ? 'block' : 'none',
                                        zIndex: 1000000000000,
                                    }}
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
                                                    width={25}
                                                />
                                                <span className={styles.optionText}>{option.value}</span>
                                            </div>
                                        </Menu.Item>
                                    ))}
                                </Menu>
                            </div>

                        </div>
                        <div style={{
                            position: 'fixed',
                            top: '160px',
                            zIndex: -3,
                            width: '360px',
                        }}>
                            {childrenContentRight}
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}