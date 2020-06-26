import React from 'react';
import {useEffect} from 'react';
import sal from 'sal.js'
import './style.css'

export default function Hiker(props) {

    useEffect(() => {
        sal({
            threshold: .25,
            once: false,
        
        });
    }, [])

    function selectedHiker(){
        var chosenHiker = props.hiker.id;
        props.selectHiker(chosenHiker)
    }

    return (
        <div data-sal='fade' className='border'>
            
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
