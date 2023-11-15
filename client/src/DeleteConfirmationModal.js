// DeleteConfirmationModal.js
import React from 'react';
import Modal from 'react-modal';
import './DeleteConfirmationModal.css';
const DeleteConfirmationModal = ({ isOpen, onConfirm, onCancel }) => {
    return (
        <Modal
            className="deleteModal"
            isOpen={isOpen}
            onRequestClose={onCancel}
            contentLabel="Delete Confirmation Modal"
        >
            <p>정말 삭제하시겠습니까?</p>
            <div>
                <button className="deleteBtn" onClick={onConfirm}>예</button>
                <button className="deleteBtn" onClick={onCancel}>아니오</button>
            </div>
        </Modal>
    );
};

export default DeleteConfirmationModal;
