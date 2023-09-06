import { Modal } from "antd";
import styles from './ModalNotify.module.css';

interface ModalNotifyProps {
    selectedModal: string | null;
    closeSelectedModal: () => void;
}

function ModalNotify({ selectedModal, closeSelectedModal }: ModalNotifyProps) {
    return (
        <Modal
            title="ModalNotify"
            open={selectedModal === 'notifications'}
            onCancel={closeSelectedModal}
            footer={null}
            className={`${styles.ModalNotify} ModalShare`}
        >
        </Modal>
    );
}

export default ModalNotify;