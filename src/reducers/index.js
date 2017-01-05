import auth from './auth'

import { routerReducer } from 'react-router-redux'
import { combineReducers } from 'redux';

const reducer = combineReducers({
    routing: routerReducer,
    auth,
})

export default reducer