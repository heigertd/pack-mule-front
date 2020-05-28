import axios from 'axios';

export default {
    getAllHikers: function(){
       return axios.get('http://localhost:8080/api/hikers', {withCredentials: true})
    },

    createNewHiker: function(newHiker){
        return axios.post('http://localhost:8080/api/hikers', newHiker)
    },

    logInHiker: function(logInInput){
        console.log('input', logInInput)
        return axios.post('http://localhost:8080/login', logInInput, {withCredentials: true})
    },
    readSessions: function(){
        return axios.get('http://localhost:8080/readsessions', {withCredentials: true})
    }
}