import SideBar from '@/components/header/sidebar/sidebar'
import React from 'react'

import styles from './index.module.scss'

export default function QLTT() {
    return (
        <div className='flex'>
            <div className={`${styles.sidebar}`}>
                <SideBar />
            </div>
            <div className={`${styles.sidebarContent}`}></div>
            <div>
                <h1>Quản lý tri thức</h1>
            </div>
        </div>
    )
}
