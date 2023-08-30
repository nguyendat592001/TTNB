import React, { useState } from 'react';
import { Modal, Button, Image, Input } from 'antd';
import styles from './ModalTag.module.css';
import { SearchOutlined } from '@ant-design/icons';

interface Friend {
    id: number;
    name: string;
    imageUrl: string;
}

interface ModalTagProps {
    isOpen: boolean;
    onClose: () => void;
}

const friendsData: Friend[] = [
    { id: 1, name: 'Nguyễn Văn A', imageUrl: '/img/c.png' },
    { id: 2, name: 'Nguyễn Văn B', imageUrl: '/img/c.png' },
];

const ModalTag: React.FC<ModalTagProps> = ({ isOpen, onClose }) => {

    const [selectedFriends, setSelectedFriends] = useState<Friend[]>([]);

    const handleFriendSelect = (friend: Friend) => {
        const isFriendSelected = selectedFriends.some(selectedFriend => selectedFriend.id === friend.id);

        if (!isFriendSelected) {
            setSelectedFriends([...selectedFriends, friend]);
        }
    };

    const handleFriendDeselect = (friend: Friend) => {
        setSelectedFriends(selectedFriends.filter(item => item.id !== friend.id));
    };

    return (
        <Modal
            title="Gắn thẻ bạn bè"
            visible={isOpen}
            onCancel={onClose}
            footer={null}
            centered
            className={`${styles.modal} modal__tag`}
        >
            <div className={styles.modal__container} >
                <div className={styles.modal__body}>
                    <div className={styles.modal__content}>
                        <div className={styles.search}>
                            <Input
                                placeholder='Nhập tên bạn bè'
                                className={styles.modal__input}
                                bordered={false}
                                suffix={
                                    <SearchOutlined rev={undefined} />
                                }
                            />
                            <span className={styles.btn__submit}>Xong</span>
                        </div>

                        <div className={styles.modal__list}>
                            {friendsData.map(friend => (
                                <div key={friend.id} className={styles.modal__item} onClick={() => handleFriendSelect(friend)}>
                                    <Image
                                        src={friend.imageUrl}
                                        alt={friend.name}
                                        preview={false}
                                        width={40}
                                        height={40}
                                        className={styles.modal__img}
                                    />
                                    <p className={`${styles.modal__name} ${styles.modal__name__active}`}>
                                        {friend.name}
                                    </p>
                                </div>
                            ))}
                        </div>

                        <div className={styles.selected}>
                            {selectedFriends.map(friend => (
                                <div key={friend.id} className={styles.selected__item}>
                                    <Image
                                        src={friend.imageUrl}
                                        alt={friend.name}
                                        preview={false}
                                        width={30}
                                        height={30}
                                        className={styles.modal__img}
                                    />
                                    <p className={styles.modal__name}>{friend.name}</p>
                                    <span
                                        className={styles.selected__close}
                                        onClick={() => handleFriendDeselect(friend)}
                                    >
                                        <Image
                                            src='/img/img-home/xoa_user.svg'
                                            alt=''
                                            preview={false}
                                        />
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </Modal>
    );
}

export default ModalTag;