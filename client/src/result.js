
import './Result.css';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';


const Result = () => {
    const navigate = useNavigate();
    const handletitleClick = () => {

        navigate('/Home');
    }

    const location = useLocation();
    const dog = location.state?.dog;
    return (

        <div>
            <header> <img onClick={handletitleClick} alt="dog" src="img/header.png" /></header>
            {dog && (
                <div>
                    <h3>강아지 정보</h3>
                    <p>이름: {dog.dog.name}</p>
                    <p>나이: {dog.dog.age}</p>
                    <p>성별: {dog.dog.gender}</p>
                    <p>품종: {dog.dog.breed}</p>
                </div>
            )}
        </div>

    );

};


export default Result;