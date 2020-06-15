import React, {useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import API from '../../utils/API';
import './style.css'

export default function UpdateUser() {
    const [currentUserState, setCurrentUserState] = useState();
    const [updatedUserState, setupdatedUserState] = useState ({});
    const history = useHistory();

    useEffect(()=>{
        API.readSessions().then(res =>{
            setCurrentUserState(res.data)
            setupdatedUserState(res.data)
        })
    },[])
    

    const handleInputChange = event => {
        const { name, value } = event.target;
        setupdatedUserState({
            ...updatedUserState,
            [name]: value
        })
    }

    const handleUpdateSubmit = event => {
        event.preventDefault();
        API.updateUserInfo(updatedUserState, currentUserState.user.id).then(updatedHiker => {
            console.log('success', updatedHiker)
            history.push('/userprofile')
        })
        // history.push('/hikers')
    }

    return (
        <div className = 'signup-render-div'>
            <div className = 'signup-header'>
                {/* <h1>Pack Mule</h1> */}
                <h1>Update</h1>
            </div>
            {currentUserState && currentUserState.user && 
            <div className = 'signup-page'>
                <div className = 'signup-form-div'>
                    <form className = 'signup-form'>
                        <div className = 'signup-input-div'>
                            {/* <label for='name'>Name</label> */}
                            <input className = 'signup-input-field' name='name' type='text' placeholder = {currentUserState.user.name} onChange={handleInputChange}></input>
                        </div>
                        <div className = 'signup-input-div'>
                            {/* <label for='hiker_type'>Type of Hiker</label> */}
                            <input className = 'signup-input-field' name='hiker_type' type='text' placeholder = {currentUserState.user.hiker_type} onChange={handleInputChange}></input>
                        </div>         
                        <div className = 'signup-input-div'>
                            {/* <label for='experience'>Experience</label> */}
                            <input className = 'signup-input-field' name='experience' type='text' placeholder = {currentUserState.user.experience} onChange={handleInputChange}></input>
                        </div>
                        {/* <div className = 'signup-input-div'>
                            <input className = 'signup-input-field' name= 'fav_hikes' type = 'text' placeholder = 'Favorite Hike' onChange={handleInputChange}></input>
                        </div> */}
                        <div className = 'signup-input-div'>
                            {/* <label for='username'>Username</label> */}
                            <input className = 'signup-input-field' name = 'username' type = 'text' placeholder = {currentUserState.user.username} onChange={handleInputChange}></input>
                        </div>
                        <div className = 'signup-input-div'>
                            {/* <label for='email'>Email</label> */}
                            <input className = 'signup-input-field' name = 'email' type = 'text' placeholder = {currentUserState.user.email} onChange={handleInputChange}></input>
                        </div>
                        {/* <div className = 'signup-input-div'>
                            <label for='password'>Password</label>
                            <input className = 'signup-input-field' name = 'password' type = 'password' placeholder = {currentUserState.user.password} onChange={handleInputChange}></input>
                        </div> */}
                        <div className = 'signup-input-div'>
                            {/* <label for='age'>Age</label> */}
                            <input className = 'signup-input-field' name = 'age' placeholder = {currentUserState.user.age} onChange={handleInputChange}></input>
                        </div>
                        <div className = 'signup-input-div'>
                            {/* <label for='fun_fact'>Fun Fact</label> */}
                            <textarea className = 'signup-input-field' name = 'fun_fact' type = 'text' placeholder = {currentUserState.user.fun_fact} onChange={handleInputChange}></textarea>
                        </div>
                                   
                        <button className = 'signup-button' onClick = {handleUpdateSubmit} >Update</button>
                        <p className = 'update-note'>Note: Updated information will be visable next time you log in</p>
                    </form>
                </div>
            </div>
            }
        </div>
        
    )
}
