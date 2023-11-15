
import './BehaviorDirect.css';
import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const BehaviorDirect = () => {

    const navigate = useNavigate();
    const handletitleClick = () => {

        navigate('/Home');
    }
    return (
        <div>
            <header> <img onClick={handletitleClick} alt="dog" src="img/header.png" /></header>

        </div>
    );
};

export default BehaviorDirect;