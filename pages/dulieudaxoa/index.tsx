import { Col, Row, Typography } from 'antd';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
const { Text } = Typography;
import styles from './dulieudaxoa.module.scss'

const arr = [
    {
        time: "16:42, Ngày 30/07/2023",
        title: "KPI Test tiep",
        department: "Thiết lập KPI",
        description: "Công ty Cổ thanh toan hanu suefawe...",
    },
    {
        time: "16:42, Ngày 30/07/2023",
        title: "KPI Test tiep",
        department: "Thiết lập KPI",
        description: "Công ty Cổ thanh toan hanu suefawe...",
    },
    {
        time: "16:42, Ngày 30/07/2023",
        title: "KPI Test tiep",
        department: "Thiết lập KPI",
        description: "Công ty Cổ thanh toan hanu suefawe...",
    },
    {
        time: "16:42, Ngày 30/07/2023",
        title: "KPI Test tiep",
        department: "Thiết lập KPI",
        description: "Công ty Cổ thanh toan hanu suefawe...",
    },
    {
        time: "16:42, Ngày 30/07/2023",
        title: "KPI Test tiep",
        department: "Thiết lập KPI",
        description: "Công ty Cổ thanh toan hanu suefawe...",
    },
];
const App: React.FC = () => {

    const router = useRouter();

    return (
        <>
            <div>
                abc
            </div>
        </>
    );
};

export default App
