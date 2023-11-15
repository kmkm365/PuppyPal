
import './Info.css';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Modal from 'react-modal';
import AddDogForm from './AddDogForm'; // 적절한 경로로 변경
import EditDogForm from './EditDogForm'; // 적절한 경로로 변경
import DeleteConfirmationModal from './DeleteConfirmationModal'; // 적절한 경로로 변경

import Behavior from './Behavior'; // Adjust the path based on your project structure



const Info = () => {

    const navigate = useNavigate();
    const handletitleClick = () => {

        navigate('/Home');
    }
    const [dogs, setDogs] = useState([]);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [deleteConfirmationModalIsOpen, setDeleteConfirmationModalIsOpen] = useState(false);
    const [selectedDog, setSelectedDog] = useState("");


    const openModal = (dog) => {
        setSelectedDog(dog);
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setSelectedDog(null);
        setModalIsOpen(false);
    };
    const openDeleteConfirmationModal = () => {
        setDeleteConfirmationModalIsOpen(true);
    };

    const closeDeleteConfirmationModal = () => {
        setDeleteConfirmationModalIsOpen(false);
    };


    const addDog = (dog) => {
        setDogs([...dogs, dog]);
        closeModal();
    };
    const editDog = (updatedDog) => {
        const updatedDogs = dogs.map((dog) => (dog === selectedDog ? updatedDog : dog));
        setDogs(updatedDogs);
        closeModal();
    };

    const deleteDog = (dog) => {
        setSelectedDog(dog);
        openDeleteConfirmationModal();
    };
    const confirmDelete = () => {
        if (selectedDog) {
            const updatedDogs = dogs.filter((dog) => dog !== selectedDog);
            setDogs(updatedDogs);
            closeModal();
            closeDeleteConfirmationModal();
        }
    };
    const handleAnalysis = (dog) => {
        navigate('/Behavior', { state: { dog } });
    };

    return (
        <div>

            <header> <img onClick={handletitleClick} alt="dog" src="img/header.png" /></header>
            <div className='infoBox'>

                <button className="addBtn" onClick={() => openModal(null)}>Add Dog</button>

                <div >
                    {dogs.map((dog, index) => (
                        <div className="dogInfoBox" key={index}>
                            이름: {dog.name}<br />
                            나이: {dog.age} <br /> 성별: {dog.gender} <br />품종: {dog.breed}
                            <div className='edBtn-box'>
                                <button className="edBtn" onClick={() => openModal(dog)}>Edit</button>{' '}
                                <button className="edBtn" onClick={() => deleteDog(dog)}>Delete</button>
                                <button className="edBtn" onClick={() => handleAnalysis(dog)}>분석</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Modal
                className="modal-content"
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Dog Information Modal"
            >
                {selectedDog ? (
                    <EditDogForm onSubmit={editDog} onCancel={closeModal} dog={selectedDog} />
                ) : (
                    <AddDogForm onSubmit={addDog} onCancel={closeModal} />
                )}

            </Modal>
            <DeleteConfirmationModal
                isOpen={deleteConfirmationModalIsOpen}
                onConfirm={confirmDelete}
                onCancel={closeDeleteConfirmationModal}
            />
        </div>
    );
};



export default Info;