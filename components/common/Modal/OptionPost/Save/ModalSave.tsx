import { Modal } from "antd";
import styles from './ModalSave.module.css';

interface ModalSaveProps {
    selectedModal: string | null;
    closeSelectedModal: () => void;
}

function ModalSave({ selectedModal, closeSelectedModal }: ModalSaveProps) {
    return (
        <Modal
            title="ModalSave"
            open={selectedModal === 'save'}
            onCancel={closeSelectedModal}
            footer={null}
            className={`${styles.ModalSave} ModalShare`}
        >
        </Modal>
    );
}

export default ModalSave;