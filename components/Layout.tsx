import React, { ReactNode } from 'react';
import Header from './header/header';
import Navbar from './navbar/navbar';

import styles from './layout.module.css';
interface LayoutProps {
    children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
    return (
        <div className="main">
            {/* <div className="nav">
                <Navbar />
            </div> */}
            <div className="body">
                <div className="header">
                    <Header />
                </div>
                <div className="col-12">
                    {children}
                </div>
            </div>
        </div>
    );
}
