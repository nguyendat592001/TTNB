import { Modal } from "antd";
import styles from './ModalEditPost.module.css';

interface ModalEditPostProps {
    selectedModal: string | null;
    closeSelectedModal: () => void;
}

function ModalEditPost({ selectedModal, closeSelectedModal }: ModalEditPostProps) {
    return (
        <Modal
            title="ModalEditPost"
            open={selectedModal === 'editPost'}
            onCancel={closeSelectedModal}
            footer={null}
            className={`${styles.ModalEditPost} ModalShare`}
        >
        </Modal>
    );
}

export default ModalEditPost;