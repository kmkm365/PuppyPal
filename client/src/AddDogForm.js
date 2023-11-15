// AddDogForm.js
import React, { useState } from 'react';
import './AddDogForm.css';
const AddDogForm = ({ onSubmit, onCancel }) => {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [gender, setGender] = useState('');
    const [breed, setBreed] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const dog = { name, age, gender, breed };
        onSubmit(dog);
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>이름</label>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />

            <label>나이</label>
            <input type="text" value={age} onChange={(e) => setAge(e.target.value)} required />


            <label>성별</label>
            <select value={gender} onChange={(e) => setGender(e.target.value)} required>
                <option value="">선택하세요</option>
                <option value="male">남성</option>
                <option value="female">여성</option>
            </select>

            <label>품종</label>
            <select value={breed} onChange={(e) => setBreed(e.target.value)} required>
                <option value="">선택하세요</option>
                <option value="labrador">랩라도리트리버</option>
                <option value="goldenRetriever">골든 리트리버</option>
                {/* Add more options as needed */}
            </select>
            <div className='btn'>
                <button type="submit">저장</button>
                <button type="button" onClick={onCancel}>
                    취소
                </button>
            </div>   </form>
    );
};

export default AddDogForm;
