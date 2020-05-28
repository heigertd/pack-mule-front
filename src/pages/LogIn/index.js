import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';
import API from '../../utils/API';
import './style.css'

export default function LogIn() {

    let history = useHistory();

    const [loginState, setLoginState] = useState()

    const handleInputChange = event => {
        const { name, value } = event.target;
        setLoginState({
            ...loginState,
            [name]: value
        })
    }

    const handleLogIn = event => {
        event.preventDefault();
        API.logInHiker(loginState).then(newHiker => {
            // console.log(newHiker.data)
            switch(newHiker.data){
                case false:
                    console.log(newHiker.data)
                    break;
                        
                default:
                    history.push('/hikers')
                    break;            
            }
            
        })
    }

    const readSessions =()=>{
        API.readSessions().then(res =>{
            console.log(res.data)
        })
    }

    return (
        <div>
            <div>
                <form>
                    <div className='login-input-div'>
                        <lable for = 'username'>UserName</lable>
                        <input name = 'username' type = 'text' onChange = {handleInputChange}></input>
                    </div>
                    <div className='login-input-div'>
                        <lable for = 'password'>Password</lable>
                        <input name = 'password' type = 'password' onChange = {handleInputChange}></input>
                    </div>
                    <button onClick = {handleLogIn}>LogIn</button>
                </form>
                <button onClick = {readSessions}>check log in</button>
            </div>
            <div>
                <p>Need an account? <a href= '/signup'>Sign Up here!</a></p>
            </div>
        </div>
    )
}
