import { Modal } from "antd";
import styles from './ModalShareOnPage.module.css';

interface ModalShareOnPageProps {
    selectedModal: string | null;
    closeSelectedModal: () => void;
}

function ModalShareOnPage({ selectedModal, closeSelectedModal }: ModalShareOnPageProps) {
    return (
        <Modal
            title="ModalShareOnPage"
            open={selectedModal === 'shareOnPage'}
            onCancel={closeSelectedModal}
            footer={null}
            className={`${styles.ModalShareOnPage} ModalShare`}
        >
        </Modal>
    );
}

export default ModalShareOnPage;