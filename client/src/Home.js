import React, { useState } from 'react';
import './Home.css';
import { useNavigate } from 'react-router-dom';
import Start from './Start';


const Home = () => {

    const navigate = useNavigate();
    const handletitleClick = () => {

        navigate('/Start');
    }


    return (
        <main>
            <div className='titleBox' onClick={handletitleClick}>
                <img className="titleImg" alt="dog" src="img/puppy.png" />

            </div>
        </main>
    );


};


export default Home;