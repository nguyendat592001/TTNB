import { Modal } from "antd";
import styles from './ModalComment.module.css';

interface ModalCommentProps {
    selectedModal: string | null;
    closeSelectedModal: () => void;
}

function ModalComment({ selectedModal, closeSelectedModal }: ModalCommentProps) {
    return (
        <Modal
            title="ModalComment"
            open={selectedModal === 'comment'}
            onCancel={closeSelectedModal}
            footer={null}
            className={`${styles.ModalComment} ModalShare`}
        >
        </Modal>
    );
}

export default ModalComment;