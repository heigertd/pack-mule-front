import axios from 'axios';

export default {
    getAllHikers: function(){
       return axios.get('http://localhost:8080/api/hikers')
    },

    createNewHiker: function(newHiker){
        return axios.post('http://localhost:8080/api/hikers', newHiker)
    }
}