import React, { useState } from 'react'
import { useRouter } from 'next/router';
import styles from './dulieudaxoa.module.scss'
import { Image } from 'antd';
import SideBar from '@/components/header/sidebar/sidebar';

const App: React.FC = () => {
    const router = useRouter();

    const handleItemClick = (path: string) => {
        router.push(`/dulieudaxoa${path}`);
    };
    return (
        <div className='flex'>
            <div className={`${styles.sidebar}`}>
                <SideBar />
            </div>
            <div className={`${styles.sidebarContent}`}></div>
            <div className={`${styles.dulieudaxoa} flex flex-space-around flex-wrap`}>
                <div className={`${styles.dulieudaxoa__TTNB} flex flex-align-center`}
                    onClick={() => handleItemClick('/TTNB')}
                >
                    <Image src="/img/dulieudaxoa/ttnb.png" alt="loi hinh anh" preview={false} />
                    <div className={styles.dulieudaxoa__TTNB__content}>
                        <div className={styles.dulieudaxoa__TTNB__number}>1<span>Tệp</span></div>
                        <p>Truyền thông nội bộ</p>
                    </div>
                </div>
                <div className={`${styles.dulieudaxoa__VHDN} flex flex-align-center`}
                    onClick={() => handleItemClick('/VHDN')}
                >
                    <Image src="/img/dulieudaxoa/vhdn.png" alt="loi hinh anh" preview={false} />
                    <div className={styles.dulieudaxoa__VHDN__content}>
                        <div className={styles.dulieudaxoa__VHDN__number}>0<span>Tệp</span></div>
                        <p>Văn hóa doanh nghiệp</p>
                    </div>
                </div>
                <div className={`${styles.dulieudaxoa__QLTT} flex flex-align-center`}
                    onClick={() => handleItemClick('/QLTT')}
                >
                    <Image src="/img/dulieudaxoa/qltt.png" alt="loi hinh anh" preview={false} />
                    <div className={styles.dulieudaxoa__QLTT__content}>
                        <div className={styles.dulieudaxoa__QLTT__number}>0<span>Tệp</span></div>
                        <p>Quản trị tri thức</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default App