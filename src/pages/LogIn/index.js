import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';
import API from '../../utils/API';
import './style.css'

export default function LogIn() {

    let history = useHistory();

    const [loginState, setLoginState] = useState()
    const [wrongLogin, setWrongLogin] = useState();

    const handleInputChange = event => {
        const { name, value } = event.target;
        setLoginState({
            ...loginState,
            [name]: value
        })
    }

    const handleLogIn = event => {
        // console.log('clicked')
        event.preventDefault();
        API.logInHiker(loginState).then(newHiker => {
            // console.log(newHiker.data)
            switch(newHiker.data){
                case 'username':
                    setWrongLogin('No User Found');
                    // console.log(newHiker.data)
                    break;
                case 'password':
                    setWrongLogin('Incorrect Password');
                    // console.log(newHiker.data)
                    break;        
                default:
                    history.push('/hikers')
                    break;            
            }
            
        })
    }

    function handleNewAccount(){
        history.push("/signup")
    }

    const readSessions =()=>{
        API.readSessions().then(res =>{
            console.log(res.data)
        })
    }

    return (
        <div className = 'login-render-div'>
            <div className = 'login-header'>
                <h1>Pack Mule</h1>
            </div>
            <div className = 'login-page'>
                    <div className = 'login-form-div'>
                        <form className = 'login-form'>
                            <div className='login-input-div'>
                                {/* <lable for = 'username'>UserName</lable> */}
                                <input className = 'login-input-field' name = 'username' type = 'text' placeholder='UserName' onChange = {handleInputChange}></input>
                            </div>
                            <div className='login-input-div'>
                                {/* <lable for = 'password'>Password</lable> */}
                                <input className = 'login-input-field' name = 'password' type = 'password' placeholder = 'Password' onChange = {handleInputChange}></input>
                            </div>
                                {wrongLogin && wrongLogin &&
                                    <p>{wrongLogin}</p>
                                }
                            <button className = 'login-button' onClick = {handleLogIn}>LogIn</button>
                            <button className = 'login-button' onClick = {handleNewAccount}>Create an Account</button>
                        </form>
                        {/* <button onClick = {readSessions}>check log in</button> */}
                    </div> 
            </div>
        </div>
    )
}
