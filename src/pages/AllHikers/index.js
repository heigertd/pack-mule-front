import React, {useState, useEffect} from 'react';
import Hiker from '../../components/Hiker';
import API from '../../utils/API'
import NavBar from '../../components/NavBar';

export default function AllHikers() {
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

    return (
        <div style = {{display: 'flex'}}>
            
            <div>
                <a href='/hikers'>Hikers</a>
                <input name='search' type='text' onChange = {handleInputChange} ></input>
                {filteredHikersState && 
                    <div>
                        {filteredHikersState.map(hiker =>  <Hiker selectHiker = {selectHiker} key={hiker.id} hiker = {hiker} />)}
                    </div>
                }
            </div>
            {clickedHikerState && clickedHikerState && 
            <div>
                <button onClick = {closeUserPopUp}>Close</button>
                <h1>{clickedHikerState.name}</h1> 
                <h3>Hiker Type: {clickedHikerState.hiker_type}</h3>
                <h3>Favorite Hike: {clickedHikerState.fav_hike}</h3>
                <h3>Experience: {clickedHikerState.experience}</h3>
                <h3>Fun Fact: {clickedHikerState.fun_fact}</h3>
                <h3>Email: {clickedHikerState.email}</h3>
                <h3>Username: {clickedHikerState.username}</h3>
            </div>
            }
        </div>
    )
}
