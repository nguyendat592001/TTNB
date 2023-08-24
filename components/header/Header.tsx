import { CaretDownOutlined, SearchOutlined } from "@ant-design/icons";
import { Badge, Image, Col, Input, Row, Popover, ConfigProvider, } from "antd";
import Notify from "../notify/notify";

import styles from './header.module.css';
import SideBar from "./sidebar";

export default function Header(): JSX.Element {
    return (
        <>
            <div className={styles.container}>
                <Row gutter={48} className={styles.row}>
                    <Col span={6} >
                        <ConfigProvider
                            theme={{
                                components: {
                                    Menu: {
                                        darkItemBg: "#4c5bd4",
                                        darkItemHoverBg: "#2e3994",
                                        darkItemSelectedBg: "#2e3994",
                                        darkSubMenuItemBg: "#4c5bd4",
                                    },
                                },
                            }}
                        >
                            <Popover
                                content={
                                    <SideBar />
                                }
                                placement="bottomLeft"
                                className={styles.popover}
                                trigger="click"
                                arrow={false}
                            >
                                <div
                                    className={styles.navbar}
                                >

                                    <Image src="/img/img-header/nv_header_home.svg" alt="" preview={false} />
                                    <span style={{
                                        fontSize: '16px',
                                        fontWeight: 'bold',
                                        color: '#4C5BD4',
                                    }}>Trang Chủ</span>
                                    <CaretDownOutlined
                                        rev={undefined}
                                        style={{
                                            fontSize: '25px',
                                            color: '#4C5BD4',
                                        }}
                                    />
                                </div>
                            </Popover>
                        </ConfigProvider>
                    </Col>
                    <Col span={11} className={styles.colSearch} >
                        <div className={styles.search}>
                            <Input
                                className={styles.inputSearch}
                                placeholder="Tìm kiếm bài viết "
                                size="large"
                                suffix={<SearchOutlined style={{
                                    cursor: 'pointer',
                                    width: '20px',
                                }} rev={undefined} />}
                            />
                        </div>
                    </Col>
                    <Col span={6} offset={1} >
                        <Notify />
                    </Col>
                </Row>
            </div>
        </>
    )
}