import axios from 'axios';

import {setUsers, SET_USERS_PENDING} from '../state/data'
export function GetUsers(dispatch,city) {
    
    return axios.get(`https://api.github.com/search/repositories?q=location:${city}+stars:%3E0&sort=stars&per_page=100`).
    then(users=>{
        
        dispatch({type:SET_USERS_PENDING,payload:false})
        dispatch(setUsers(users.data))
    });
}