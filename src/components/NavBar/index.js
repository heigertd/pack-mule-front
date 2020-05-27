import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import API from '../../utils/API'
import './style.css'

export default function NavBar() {

    const [searchState, setSearchState] = useState();

    // useEffect(()=>{
    //     API.getSearchedHiker(searchState).then(res =>{
    //         // console.log('worked')
    //         console.log(res.data)
    //     })
    // },[searchState])

    const handleInputChange = event => {
        const { name, value } = event.target;
        setSearchState({
            ...searchState,
            [name]: value
        })
    }

    return (
        <div className='navbar-div'>
            {window.location.pathname === "/userprofile" ? '' :<a href='/userprofile'>Profile</a> }
            {window.location.pathname === "/userprofile" ? '' : <input name='search' type='text' onChange = {handleInputChange}></input>}
            {window.location.pathname === "/hikers" ? '' : <a href='/hikers'>Hikers</a>}
            
        </div>
    )
}
