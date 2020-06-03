import React from 'react';
import './style.css'

export default function Hiker(props) {

    function selectedHiker(){
        var chosenHiker = props.hiker.id;
        props.selectHiker(chosenHiker)
    }

    return (
        <div className='border'>
            <div className = "img-div">
                <img className = 'img' src={require ('../../assets/default.jpg')} alt = 'profil picture' />
            </div>
            <div className='txt-div'>
                <p>Name: {props.hiker.name} </p>
                <p>Experience: {props.hiker.experience} </p>
                <p>{props.hiker.hiker_type} </p>
                <button data-key={props.hiker.id} onClick = {selectedHiker}>See Profile</button>
            </div>
        </div>
    )
}
