import React, {useState, useEffect} from 'react';
import Hiker from '../../components/Hiker';
import API from '../../utils/API'

export default function AllHikers() {
    const [hikersState, setHikersState] = useState([]);

    useEffect(()=>{
        API.getAllHikers().then(res =>{
            setHikersState(res.data)
        })
    },[])
    
    return (
        <div>
            {hikersState.map(hiker =>  <Hiker key={hiker.id} hiker = {hiker} />)}
        </div>
    )
}
