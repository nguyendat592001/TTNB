import React, { ReactNode } from 'react';
import { useRouter } from 'next/router';
import { useState, useEffect } from "react"

import styles from './layout.module.css';
import Header from './header/Header';
import HeaderNew from './newHeader/newHeader';
interface LayoutProps {
    children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {

    const router = useRouter();
    const [isCompanyUrl, setIsCompanyUrl] = useState(false)

    useEffect(() => {
        if (router.pathname.includes("/login")) {
            setIsCompanyUrl(true)
        } else {
            setIsCompanyUrl(false)
        }
    }, [router.pathname])

    const renderHeader = () => {
        if (isCompanyUrl) {
            return null;
        } else {
            const pagesWithNewHeader = ['/sukien', '/b', '/c', '/d', '/e'];
            if (pagesWithNewHeader.includes(router.pathname)) {
                return <HeaderNew />;
            } else {
                return <Header />;
            }
        }
    };
    return (
        <div className="main">
            <div className={styles.body}>
                <div className={styles.header}>
                    {renderHeader()}
                </div>
                <div className="col-12">
                    {children}
                </div>
            </div>
        </div>
    );

}
