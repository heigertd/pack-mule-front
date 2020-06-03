import React, {useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import API from '../../utils/API'
import './style.css'
import NavBar from '../../components/NavBar';

export default function UserProfile() {

    const [currentUserState, setCurrentUserState] = useState();
    let history = useHistory();

    useEffect(()=>{
        API.readSessions().then(res =>{
            setCurrentUserState(res.data)
        })
    },[])

    function deleteUser(){
        API.deleteHiker(currentUserState.user.id).then(res =>{
            history.push('/')
        })
    }

    // console.log('current user state', currentUserState)

    return (
        <div>
            <NavBar />
            {currentUserState && currentUserState.user && 
            <div>
                <h1>hello {currentUserState.user.name}</h1> 
                <h3>Hiker Type: {currentUserState.user.hiker_type}</h3>
                <h3>Favorite Hike: {currentUserState.user.fav_hike}</h3>
                <h3>Experience: {currentUserState.user.experience}</h3>
                <h3>Fun Fact: {currentUserState.user.fun_fact}</h3>
                <h3>Email: {currentUserState.user.email}</h3>
                <h3>Username: {currentUserState.user.username}</h3>
                <button onClick = {deleteUser}>Delete</button>
            </div>
            }
        </div>
    )
}
