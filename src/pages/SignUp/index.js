import React, { useState, useEffect } from 'react'
import API from '../../utils/API';

export default function SignUp() {

    const [newUserState, setNewUserState] = useState ({})

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
        })
    }

    return (
        <div>
            <form>
                <input name='name' type='text' onChange={handleInputChange}></input>
                <label for='name'>Name</label>
                <input name='hiker_type' type='text' onChange={handleInputChange}></input>
                <label for='hiker_type'>Type of Hiker</label>
                {/* <input name= 'fav_hikes' type = 'text'></input>
                <label for='fav_hikes'>Favorite Hike</label> */}
                <input name='experience' type='text' onChange={handleInputChange}></input>
                <label for='experience'>Experience</label>
                {/* <input name = 'fun_fact' type = 'text'></input>
                <input name = 'email' type = 'text'></input>
                <input name = 'age'></input>
                <input name = 'username' type = 'text'></input>
                <input name = 'password' type = 'password'></input> */}
                <button onClick = {handleFormSubmit}>Submit</button>
            </form>
        </div>
    )
}
