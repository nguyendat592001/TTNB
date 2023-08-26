import React, { ReactNode } from 'react';
import { useRouter } from 'next/router';
import { useState, useEffect } from "react"

import styles from './layout.module.css';
import Header from './header/Header';
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
    return (
        <div className="main">
            {/* <div className="nav">
                <Navbar />
            </div> */}
            <div className={styles.body}>
                <div className={styles.header}>
                    {isCompanyUrl ? null : <Header />}

                </div>
                <div className="col-12">
                    {children}
                </div>
            </div>
        </div>
    );

}
