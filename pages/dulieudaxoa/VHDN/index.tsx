import SideBar from '@/components/header/sidebar/sidebar'
import React from 'react'

import styles from './index.module.scss'

export default function VHDN() {
    return (
        <div className='flex'>
            <div className={`${styles.sidebar}`}>
                <SideBar />
            </div>
            <div className={`${styles.sidebarContent}`}></div>
            <div>
                <h1>Văn hóa doanh nghiệp</h1>
            </div>
        </div>
    )
}
