import styles from './notify.module.css';
import { Badge, Image, Popover } from 'antd';
import User from './user/user';
import Ring from './ring/ring';


export default function Notify(): JSX.Element {
    return (
        <>
            <div className={styles.notify}>
                <div
                    className={styles.mess}
                >
                    <Badge count={5} size='small'>
                        <Image src="/img/img-header/mes.png" alt="" preview={false} />
                    </Badge>
                </div>
                <Popover
                    content={
                        <Ring />
                    }
                    placement="bottomLeft"
                    className={styles.popover}
                    trigger="click"
                    arrow={false}
                >
                    <div className={styles.ring}>
                        <Badge count={1} size='small'>
                            <Image src="/img/img-header/ring.png" alt="" preview={false} />
                        </Badge>
                    </div>
                </Popover>
                <div
                    className={styles.user}
                >
                    <User />
                </div>

            </div>
        </>
    )
}