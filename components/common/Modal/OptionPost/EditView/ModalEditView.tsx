import { Modal } from "antd";
import styles from './ModalEditView.module.css';

interface ModalEditViewProps {
    selectedModal: string | null;
    closeSelectedModal: () => void;
}

function ModalEditView({ selectedModal, closeSelectedModal }: ModalEditViewProps) {
    return (
        <Modal
            title="ModalEditView"
            open={selectedModal === 'editView'}
            onCancel={closeSelectedModal}
            footer={null}
            className={`${styles.ModalEditView} ModalShare`}
        >
        </Modal>
    );
}

export default ModalEditView;