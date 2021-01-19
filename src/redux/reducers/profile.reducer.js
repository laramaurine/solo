import { combineReducers } from 'redux';
import errors from './errors.reducer';
import user from './user.reducer';




const profileReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_PROFILE':
            return action.payload;
        default:
            return state;
    }
}


export default profileReducer;