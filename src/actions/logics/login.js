import {ACTION_USER} from '../constants'

const login = (username=null, ok=()=>{}, fail=()=>{})=>{
    return dispatch => {
        setTimeout(()=>{
            dispatch({
                type : ACTION_USER,
                username,
            })
            ok(username)
        }, 500)
    }
}

export default login