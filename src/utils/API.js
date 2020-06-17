import axios from 'axios';
// const BASE_URL = 'http://localhost:8080';
const BASE_URL = 'https://pack-mule-api.herokuapp.com';

export default {
    getAllHikers: function(){
       return axios.get(`${BASE_URL}/api/hikers`, {withCredentials: true})
    },

    createNewHiker: function(newHiker){
        return axios.post(`${BASE_URL}/api/hikers`, newHiker)
    },

    logInHiker: function(logInInput){
        // console.log('input', logInInput)
        return axios.post(`${BASE_URL}/login`, logInInput, {withCredentials: true})
    },

    deleteHiker: function(userId){
        // console.log('input', userId)
        return axios.delete(`${BASE_URL}/deletehiker/${userId}`, {withCredentials: true})
    },

    getClickedHiker: function(hikerId){
        // console.log(hikerId)
        return axios.get(`${BASE_URL}/specifichiker/${hikerId}`, {withCredentials: true})
    },

    readSessions: function(){
        return axios.get(`${BASE_URL}/readsessions`, {withCredentials: true})
    },

    updateUserInfo: function(newInfo, userId){
        // console.log(newInfo, userId)
        return axios.put(`${BASE_URL}/updatehiker/${userId}`, newInfo, {withCredentials: true})
    },

    signOut: function(){
        return axios.get(`${BASE_URL}/signout`, {withCredentials: true})
    }
}