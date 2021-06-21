import {REGISTER_USER,REGISTER_FAIL, LOGIN_USER, LOGIN_FAIL, LOGOUT} from './types'
import axios  from 'axios'
export const registerUser = (data,history) => async(dispatch) => {
try {
    const res= await axios.post('http://localhost:6000/user/newUser',data)
    
    dispatch({type:REGISTER_USER, payload:res.data})
    history.push('/profile')
} 
catch (error) {
    dispatch({type:REGISTER_FAIL,payload:error})
}
}

export const loginUser = (data,history) => async(dispatch) => {
    try {
        const res= await axios.post('http://localhost:6000/user/login',data)
       
        dispatch({type:LOGIN_USER, payload:res.data})
        history.push('/profile')
    } 
    catch (error) {
        dispatch({type:LOGIN_FAIL, payload:error?.response?.data?.message })
    }
    }

    export const logout = (history) => async(dispatch) => {
        try {
            dispatch({type:LOGOUT})
            history.push('login')
        } 
        catch (error) {
            console.log(error)
        }
        }