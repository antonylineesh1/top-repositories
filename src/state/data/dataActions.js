import { GetUsers} from '../../services/UserService'

export const GET_USERS="GET_USERS";
export const SET_USERS="SET_USERS";
export const SET_USERS_PENDING="SET_USERS_PENDING";

export const getUsers=(value)=>{
    return (dispatch)=>{
        dispatch({type:SET_USERS_PENDING,payload:true})
        GetUsers(dispatch,value);
    }
}

export const setUsers=(users)=>{
    
    return (dispatch)=>{
        return dispatch({type:SET_USERS,users:users})
    }
}