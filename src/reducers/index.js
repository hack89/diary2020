import { combineReducers } from 'redux'
import notesReducers from './notesReducer'
import userReducer from './userReducer'
import loadingReducer from './loadingReducer'

const rootReducer = combineReducers({
    notes: notesReducers,
    user: userReducer,
    loading: loadingReducer
})


export default rootReducer