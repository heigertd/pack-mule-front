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

    function updateUser(){
        history.push('/updateuser')
    }

    // console.log('current user state', currentUserState)

    return (
        <div className = 'profile-render-div'>
            <div className = 'profile-header'>
                    <a className = 'profile-link' href='/hikers'>Mules</a>
            </div>
            {currentUserState && currentUserState.user && 
            <div>
                <div className = 'hello-div'>
                    <h1>Hello {currentUserState.user.name}</h1>
                    <img className = 'img' src={require ('../../assets/default.jpg')} alt = 'profil picture' />
                </div>
            <div className = 'user-info-div'>
                <h3>Hiker Type: {currentUserState.user.hiker_type}</h3>
                {/* <h3>Favorite Hike: {currentUserState.user.fav_hike}</h3> */}
                <h3>Experience: {currentUserState.user.experience}</h3>
                <h3>Fun Fact: {currentUserState.user.fun_fact}</h3>
                <h3>Email: {currentUserState.user.email}</h3>
                <h3>Username: {currentUserState.user.username}</h3>
                <button className = 'delete-button' onClick = {deleteUser}>Delete Profile</button>
                <button className = 'delete-button' onClick = {updateUser}>Update Info</button>
            </div>
            </div>
            }
        </div>
    )
}
