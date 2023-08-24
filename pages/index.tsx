import NavbarHome from "@/components/navbar/NavBarHome/NavBarHome";
import { Col, Row } from "antd";
import Head from "next/head";

export default function Home() {
    return (
        <div>
            <Head>
                <title> Homepage </title>
                <meta name="keywords" content="coders" />
                <meta charSet="utf-8" />
                <link rel="shortcut icon" href="./next.svg" />
            </Head>
            <div className="navbarHome">
                <div className='{styles.container}'>
                    <Row gutter={48} className='{styles.row}'>
                        <Col span={6} >
                            <NavbarHome />
                        </Col>
                        <Col span={11} className='{styles.colSearch}' >
                            <div className='{styles.search}'>

                            </div>
                        </Col>
                        <Col span={6} offset={1} >

                        </Col>
                    </Row>
                </div>
            </div>
        </div>
    );
}
