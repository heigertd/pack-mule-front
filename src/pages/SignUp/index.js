import React, { useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import API from '../../utils/API';
import './style.css'

export default function SignUp() {

    const [newUserState, setNewUserState] = useState ({})
    let history = useHistory();

    const handleInputChange = event => {
        const { name, value } = event.target;
        setNewUserState({
            ...newUserState,
            [name]: value
        })
    }

    const handleFormSubmit = event => {
        event.preventDefault();
        API.createNewHiker(newUserState).then(newHiker => {
            console.log('success', newHiker)
            history.push('/')
        })
        // history.push('/hikers')
    }

    return (
        <div className = 'signup-render-div'>
            <div className = 'signup-header'>
                {/* <h1>Pack Mule</h1> */}
                <h1>Sign Up</h1>
            </div>
            <div className = 'signup-page'>
                <div className = 'signup-form-div'>
                    <form className = 'signup-form'>
                        <div className = 'signup-input-div'>
                            {/* <label for='name'>Name</label> */}
                            <input className = 'signup-input-field' name='name' type='text' placeholder = 'Name' onChange={handleInputChange}></input>
                        </div>
                        <div className = 'signup-input-div'>
                            {/* <label for='hiker_type'>Type of Hiker</label> */}
                            <select className = 'signup-input-field' name='hiker_type' type='text' placeholder = 'Type of Hiker' onChange={handleInputChange}>
                                <option value='Basic' selected>Basic</option>
                                <option value='Mule'>Mule</option>
                            </select>
                        </div>         
                        <div className = 'signup-input-div'>
                            {/* <label for='experience'>Experience</label> */}
                            <select className = 'signup-input-field' name='experience' placeholder = 'Experience' onChange={handleInputChange}>
                                <option value='Expert'>Expert</option>
                                <option value='Intermediate'>Intermediate</option>
                                <option value='Beginner' selected>Beginner</option>
                            </select>
                        </div>
                        {/* <div className = 'signup-input-div'>
                            <input className = 'signup-input-field' name= 'fav_hikes' type = 'text' placeholder = 'Favorite Hike' onChange={handleInputChange}></input>
                        </div> */}
                        <div className = 'signup-input-div'>
                            {/* <label for='username'>Username</label> */}
                            <input className = 'signup-input-field' name = 'username' type = 'text' placeholder = 'Username' onChange={handleInputChange}></input>
                        </div>
                        <div className = 'signup-input-div'>
                            {/* <label for='email'>Email</label> */}
                            <input className = 'signup-input-field' name = 'email' type = 'text' placeholder = 'Email' onChange={handleInputChange}></input>
                        </div>
                        <div className = 'signup-input-div'>
                            {/* <label for='password'>Password</label> */}
                            <input className = 'signup-input-field' name = 'password' type = 'password' placeholder = 'Password' onChange={handleInputChange}></input>
                        </div>
                        <div className = 'signup-input-div'>
                            {/* <label for='age'>Age</label> */}
                            <input className = 'signup-input-field' name = 'age' placeholder = 'Age' onChange={handleInputChange}></input>
                        </div>
                        <div className = 'signup-input-div'>
                            {/* <label for='fun_fact'>Fun Fact</label> */}
                            <textarea className = 'signup-input-field' name = 'fun_fact' type = 'text' placeholder = 'Quick Bio (Years hiking, favorite hike, fun fact etc.)' onChange={handleInputChange}></textarea>
                        </div>
                                   
                        <button className = 'signup-button' onClick = {handleFormSubmit}>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
