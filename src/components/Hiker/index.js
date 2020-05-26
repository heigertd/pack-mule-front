import React from 'react';
import './style.css'

export default function Hiker({ hiker }) {
    return (
        <div className='border'>
            <div className = "img-div">
                <img className = 'img' src={require ('../../assets/default.jpg')} alt = 'profil picture' />
            </div>
            <div className='txt-div'>
                <p>Name: {hiker.name} </p>
                <p>Experience: {hiker.experience} </p>
                <p>{hiker.hiker_type} </p>
            </div>
        </div>
    )
}
