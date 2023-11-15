
import './Behavior.css';
import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Behavior = () => {
    const location = useLocation();
    const dog = { ...location.state };
    const navigate = useNavigate();
    const handletitleClick = () => {

        navigate('/Home');
    }
    const [selectedVideo, setSelectedVideo] = useState(null);
    const [showConfirmationModal, setShowConfirmationModal] = useState("");
    const [imageClass, setImageClass] = useState('');


    const addClassToImage = () => {
        setImageClass('new-class');
    };
    const handleHomeClick = () => {
        window.location.href = '/App';
    }

    const handleVideoUpload = (event) => {
        setSelectedVideo(event.target.files[0]);
        addClassToImage();
    };

    const handleConfirmUpload = () => {

        console.log('Upload successful:');
        setSelectedVideo(null);
        setShowConfirmationModal(false);
        navigate('/Result', { state: { dog } });


    };

    const openConfirmationModal = () => {
        setShowConfirmationModal(true);
    };

    const closeConfirmationModal = () => {
        setShowConfirmationModal(false);
        setSelectedVideo(null);
        setImageClass('');
    };
    return (
        <div>
            <header> <img onClick={handletitleClick} alt="dog" src="img/header.png" /></header>


            <div className="video-upload">
                <p>{dog.dog.name}(이)의 영상을 업로드 해주세요</p>
                <img className={imageClass} src="img/video.png" />

                {selectedVideo && (
                    <div>
                        <video controls width="280">
                            <source src={URL.createObjectURL(selectedVideo)} type="video/mp4" />

                        </video>
                        <button className="uploadbtn" onClick={openConfirmationModal}>Upload</button>
                    </div>
                )}


                <input className={imageClass} id="videoUpload" type="file" accept="video/*" onChange={handleVideoUpload} />
            </div>

            {showConfirmationModal && (
                <div className="videoModal">
                    <div className="modal-cont">

                        <p className="first-element"><b>Confirm Upload</b></p>
                        <p className="first-element">Do you want to upload the selected video?</p>
                        <div className='confirmBtn'>
                            <button className="second-element" onClick={handleConfirmUpload}>Yes</button>
                            <button className="third-element" onClick={closeConfirmationModal}>Cancel</button>
                        </div>
                    </div>
                </div>
            )}

        </div>
    );
};

export default Behavior;