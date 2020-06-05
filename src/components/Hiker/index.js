import React from 'react';
import './style.css'

export default function Hiker(props) {

    function selectedHiker(){
        var chosenHiker = props.hiker.id;
        props.selectHiker(chosenHiker)
    }

    return (
        <div className='border'>
            
                <img className = 'img' src={require ('../../assets/default.jpg')} alt = 'profil picture' />
            
            <div className='txt-div'>
                <p> {props.hiker.name} </p>
                <p>{props.hiker.experience} </p>
                <p>{props.hiker.age} </p>
            </div>
                <button className = 'see-more' data-key={props.hiker.id} onClick = {selectedHiker}>More</button>
        </div>
    )
}
