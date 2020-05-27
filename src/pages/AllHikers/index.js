import React, {useState, useEffect} from 'react';
import Hiker from '../../components/Hiker';
import API from '../../utils/API'
import NavBar from '../../components/NavBar';

export default function AllHikers() {
    const [hikersState, setHikersState] = useState([]);

    useEffect(()=>{
        API.getAllHikers().then(res =>{
            setHikersState(res.data)
        })
    },[])
    
    return (
        <div>
            <NavBar />
            {hikersState.map(hiker =>  <Hiker key={hiker.id} hiker = {hiker} />)}
        </div>
    )
}
