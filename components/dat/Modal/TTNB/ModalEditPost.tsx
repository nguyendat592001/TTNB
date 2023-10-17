import React from 'react';
import { Modal, Button, Image } from 'antd';

interface ModalEditPostProps {
    open: boolean;
    onClose: () => void;
}
const ModalEditPost: React.FC<ModalEditPostProps> = ({ open, onClose }) => {
    return (
        <Modal
            title="Chỉnh sửa sự kiện nội bộ"
            open={open}
            onCancel={onClose}
            footer={null}
            className="edit-group-modal"
        >

            <div
                style={{
                    display: 'flex',
                    justifyContent: 'space-evenly',
                    marginTop: '40px',
                    marginBottom: '30px',
                }}
            >
                <Button
                    onClick={onClose}
                    size="large"
                    style={{
                        width: '170px',
                        border: '1px solid #4c5bd4',
                        color: '#4c5bd4',
                        backgroundColor: 'white',
                        borderRadius: '50px',
                        fontWeight: 'bold',
                    }}

                >
                    Hủy</Button>
                <Button
                    onClick={onClose}
                    size="large"
                    style={{
                        width: '170px',
                        border: '1px solid #4c5bd4',
                        color: '#fff',
                        backgroundColor: '#4c5bd4',
                        borderRadius: '50px',
                        fontWeight: 'bold',
                    }}
                >
                    Xóa</Button>
            </div>
        </Modal>
    )
}

export default ModalEditPost
