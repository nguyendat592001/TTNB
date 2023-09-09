import { useEffect, useState } from "react";
import ModalRegime from "../../Regime/ModalRegime";

interface ModalEditViewProps {
    selectedModal: string | null;
    closeSelectedModal: () => void;
    toggleModal: () => void;
}

function ModalEditView({ selectedModal, closeSelectedModal, toggleModal }: ModalEditViewProps) {
    const [isRegimeModalOpen, setIsRegimeModalOpen] = useState(false);

    useEffect(() => {
        // Check if the selected modal is editView
        if (selectedModal === 'editView') {
            // Show the ModalRegime immediately
            setIsRegimeModalOpen(true);
        } else {
            // Close the ModalRegime if another modal is selected or closed
            setIsRegimeModalOpen(false);
        }
    }, [selectedModal]);

    // Function to handle closing ModalRegime
    const closeRegimeModal = () => {
        setIsRegimeModalOpen(false);
        toggleModal(); // You can also close the parent modal if needed
    }

    return (
        <div>
            {/* Conditionally render ModalRegime based on isRegimeModalOpen */}
            <ModalRegime isOpen={isRegimeModalOpen} onClose={closeRegimeModal} />
        </div>
    );
}

export default ModalEditView;
