import React, { ReactNode } from 'react';
import Header from './header/Header';

import styles from './layout.module.css';
interface LayoutProps {
    children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
    return (
        <div className={styles.main}>
            {/* <div className="nav">
                <Navbar />
            </div> */}
            <div className={styles.body}>
                <div className={styles.header}>
                    <Header />
                </div>
                <div className="col-12">
                    {children}
                </div>
            </div>
        </div>
    );
}
