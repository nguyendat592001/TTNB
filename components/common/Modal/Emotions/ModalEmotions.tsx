import React, { useState } from 'react';
import { Modal, Tabs, TabsProps, } from 'antd';
import styles from './ModalEmotions.module.css';
import Emotion from './Emotion';
import Activity from './Activity';

interface EmotionsProps {
    isOpen: boolean;
    onClose: () => void;
}
const items: TabsProps['items'] = [
    {
        key: '1',
        label: 'Cảm xúc',
        children: <Emotion />,
    },
    {
        key: '2',
        label: 'Hoạt động',
        children: <Activity />,
    },
];
const Emotions: React.FC<EmotionsProps> = ({ isOpen, onClose }) => {
    return (
        <Modal
            title="Cảm xúc/Hoạt động"
            open={isOpen}
            onCancel={onClose}
            footer={null}
            centered
            className={`${styles.modal} modal__Emotions`}
        >
            <Tabs
                defaultActiveKey="1"
                items={items}
                tabBarGutter={20}
            />
        </Modal>
    );
};

export default Emotions;