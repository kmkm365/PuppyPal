
import './Start.css';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';



const Start = () => {
    const navigate = useNavigate();
    const handletitleClick = () => {

        navigate('/Home');
    }
    const handleinfoClick = () => {

        navigate('/Info');
    }
    const handlebehavClick = () => {

        navigate('/BehaviorDirect');
    }

    return (

        <main>
            <img onClick={handletitleClick} alt="dog" src="img/startpuppy.png" />
            <div className='btnBox'>
                <button onClick={handleinfoClick} className='mypetInfo'>마이펫 정보 등록하기</button>
                <button onClick={handlebehavClick} className='behavior'>정보 등록 없이 행동 분석</button>
            </div>
        </main>

    );

};


export default Start;