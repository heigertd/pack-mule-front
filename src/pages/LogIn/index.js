import React, {useState} from 'react'
import './style.css'

export default function LogIn() {

    const [loginState, setLoginState] = useState()

    const handleInputChange = event => {
        const { name, value } = event.target;
        setLoginState({
            ...loginState,
            [name]: value
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
                        <input name = 'password' type = 'text' onChange = {handleInputChange}></input>
                    </div>
                </form>
            </div>
            <div>
                <p>Need an account? <a href= '/signup'>Sign Up here!</a></p>
            </div>
        </div>
    )
}
