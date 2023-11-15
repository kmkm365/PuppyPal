// EditDogForm.js
import './EditDogForm.css';
import React, { useState, useEffect } from 'react';

const EditDogForm = ({ onSubmit, onCancel, dog }) => {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [gender, setGender] = useState('');
    const [breed, setBreed] = useState('');

    useEffect(() => {
        // 편집 중인 개의 정보로 폼 필드를 채웁니다.
        if (dog) {
            setName(dog.name);
            setAge(dog.age);
            setGender(dog.gender);
            setBreed(dog.breed);
        }
    }, [dog]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const updatedDog = { name, age, gender, breed };
        onSubmit(updatedDog);
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>이름:</label>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />

            <label>나이:</label>
            <input type="text" value={age} onChange={(e) => setAge(e.target.value)} required />


            <label>성별:</label>
            <select value={gender} onChange={(e) => setGender(e.target.value)} required>
                <option value="male">남성</option>
                <option value="female">여성</option>
            </select>

            <label>품종:</label>
            <select value={breed} onChange={(e) => setBreed(e.target.value)} required>
                <option value="labrador">랩라도리트리버</option>
                <option value="goldenRetriever">골든 리트리버</option>
                {/* Add more options as needed */}
            </select>
            <div className='editFormBtnBox'>
                <button className="editFormBtn" type="submit">저장</button>
                <button className="editFormBtn" type="button" onClick={onCancel}>
                    취소
                </button>
            </div>
        </form>
    );
};

export default EditDogForm;
