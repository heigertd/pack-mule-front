import React, {useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import Hiker from '../../components/Hiker';
import API from '../../utils/API';
import './style.css'
import NavBar from '../../components/NavBar';

export default function AllHikers() {
    let history = useHistory();
    
    const [hikersState, setHikersState] = useState([]);
    const[clickedHikerState, setClickedHikerState] = useState();
    const[searchState, setSearchState] = useState();
    const[filteredHikersState, setFilteredHikersState] = useState();

    useEffect(()=>{
        API.getAllHikers().then(res =>{
            setFilteredHikersState(res.data)
            setHikersState(res.data)
        })
    },[])

    useEffect(()=>{
        const copyOfHiker = [...hikersState]
        const filteredHikers = copyOfHiker.filter(hiker => hiker.name.includes(searchState.search))
        setFilteredHikersState(filteredHikers)

        console.log()
    },[searchState])
    
    function selectHiker(Passedkey){
        let hikerId = Passedkey;
        API.getClickedHiker(hikerId).then(res => {
            console.log('got hiker')
            setClickedHikerState(res.data)
        }
        )
    }

    function closeUserPopUp(){
        setClickedHikerState('')
    }

    const handleInputChange = event => {
        const { name, value } = event.target;
        setSearchState({
            ...searchState,
            [name]: value
        })
    }

    function signOut(){
        API.signOut().then(
            history.push('/')
        )
    }

    return (
        <div className='allhikers-render-div'> 
                <div className = 'hiker-navbar'>
                    {/* <h1>Hikers</h1> */}
                    <a className = 'profile-link' href='/userprofile'>Profile</a>
                    <a className = 'profile-link' onClick = {signOut}>Sign Out</a>
                    <input name='search' type='text' placeholder = 'Search Mules' onChange = {handleInputChange} ></input>
                </div>
            <div className = 'allhikers-div'>
                {filteredHikersState && 
                    <div>
                        {filteredHikersState.map(hiker =>  <Hiker selectHiker = {selectHiker} key={hiker.id} hiker = {hiker} />)}
                    </div>
                }
            </div>
            {clickedHikerState && clickedHikerState && 
            <div className = 'onehiker-render-div'>
                <div className = 'onehiker-div'>
                    <img className = 'hiker-img' src={require ('../../assets/default.jpg')} alt = 'profil picture' />
                    <div className = 'hiker-info'>
                        <h1>{clickedHikerState.name}</h1> 
                        {/* <p>{clickedHikerState.hiker_type}</p> */}
                        {/* <p>Favorite Hike: {clickedHikerState.fav_hike}</p> */}
                        {/* <p>Experience: {clickedHikerState.experience}</p> */}
                        <p>{clickedHikerState.fun_fact}</p>
                        <p>Contact: {clickedHikerState.email}</p>
                        {/* <p>Username: {clickedHikerState.username}</p> */}
                    </div>
                    <button className = 'close-button' onClick = {closeUserPopUp}>Close</button>
                </div>
            </div>
            }
        </div>
    )
}
