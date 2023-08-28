import { Menu } from "antd";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from './sidebar.module.css';
import { Icon1, Icon2, Icon3, Icon4, Icon5, Icon6, Icon7, Icon8, Icon9 } from "../iconheader";

export default function SideBar(): JSX.Element {
    const pathname = usePathname();
    return (
        <div className={`${styles.MenuSidebar} MenuSidebar`}>
            <Menu
                mode="inline"
                id="NavMenu"
                defaultSelectedKeys={["1"]}
                theme="dark"
                className="ItemMenuSidebar"
                items={[
                    {
                        label: (
                            <Link
                                className={
                                    pathname === "/" ? styles.MenuItemActive : styles.MenuItem
                                }
                                href="/"
                            >
                                Trang chủ
                            </Link>
                        ),
                        key: "1",
                        icon: <Icon1 />,
                    },
                    {
                        label: (
                            <Link
                                className={styles.MenuItem}
                                href=''
                            >
                                Truyền thông nội bộ
                            </Link>
                        ),
                        key: "truyenthongnoibo",
                        icon: <Icon2 />,
                    },
                    {
                        label: (
                            <Link
                                className={styles.MenuItem}
                                href=''
                            >
                                Văn hóa doanh nghiệp
                            </Link>
                        ),
                        key: "vanhoadn",
                        icon: <Icon3 />,
                    },
                    {
                        label: (
                            <Link
                                className={styles.MenuItem}
                                href=''
                            >
                                Quản lý tri thức
                            </Link>
                        ),
                        key: "quanlytrithuc",
                        icon: <Icon4 />,
                    },
                    {
                        label: (
                            <Link
                                className={styles.MenuItem}
                                href=''
                            >
                                Quản lý cuộc họp
                            </Link>
                        ),
                        key: "quanlycuochop",
                        icon: <Icon5 />,
                    },
                    {
                        label: (
                            <Link
                                className={styles.MenuItem}
                                href=''
                            >
                                Dữ liệu đã xóa gần đây
                            </Link>
                        ),
                        key: "dulieudaxoaganday",
                        icon: <Icon6 />,
                    },
                    {
                        label: (
                            <Link
                                className={styles.MenuItem}
                                href=''
                            >
                                cài đặt
                            </Link>
                        ),
                        key: "caidat",
                        icon: <Icon7 />,
                    },
                    {
                        label: (
                            <Link
                                className={styles.MenuItem}
                                href=''
                            >
                                Chuyển đối số 365
                            </Link>
                        ),
                        key: "chuyendoiso",
                        icon: <Icon8 />,
                    },
                    {
                        label: (
                            <Link
                                className={styles.MenuItem}
                                href=''
                            >
                                Cài đặt chung
                            </Link>
                        ),
                        key: "caidatchung",
                        icon: <Icon9 />,
                    },
                ]}
            />
        </div>
    )
}