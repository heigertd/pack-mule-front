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

    deleteHiker: function(userId){
        console.log('input', userId)
        return axios.delete(`http://localhost:8080/deletehiker/${userId}`, {withCredentials: true})
    },

    getClickedHiker: function(hikerId){
        console.log(hikerId)
        return axios.get(`http://localhost:8080/specifichiker/${hikerId}`, {withCredentials: true})
    },

    readSessions: function(){
        return axios.get('http://localhost:8080/readsessions', {withCredentials: true})
    },

    updateUserInfo: function(newInfo, userId){
        console.log(newInfo, userId)
        return axios.put(`http://localhost:8080/updatehiker/${userId}`, newInfo, {withCredentials: true})
    },

    signOut: function(){
        return axios.get(`http://localhost:8080/signout`, {withCredentials: true})
    }
}