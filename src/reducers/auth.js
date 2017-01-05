import {ACTION_USER} from '../actions/constants'

const initState = {
    username : null
}

const reducer = (state=initState, action) => {
    switch(action.type){
        case ACTION_USER:
            return {
                ...state,
                username : action.username
            }
            default :
                return state
    }
}

export default reducer