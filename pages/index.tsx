import ContactHome from "@/components/homepage/ContactHome/contact";
import ContentHome from "@/components/homepage/ContentHome/contentHome";
import NavbarHome from "@/components/homepage/NavBarHome/NavBarHome";
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
                <div className='container'>
                    <Row className='row'>
                        <Col span={6} className='navbarHome' >
                            <NavbarHome />
                        </Col>
                        <Col span={12} className='content' >
                            <ContentHome />
                        </Col>
                        <Col span={6} offset={0} className='Contact' >
                            <ContactHome />
                        </Col>
                    </Row>
                </div>
            </div>
        </div>
    );
}
