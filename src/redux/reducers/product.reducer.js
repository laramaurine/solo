import { combineReducers } from 'redux';

//store proucts returned from server
const productReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_PRODUCT':
            return action.payload;
        default:
            return state;
    }
}

//store detail
const detailReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_DETAIL':
            return action.payload;
        default:
            return state;
    }
}

//update reducer
// const updateReducer = (state = [], action) => {
//     switch (action.type) {
//         case 'SET_UPDATE_PRODUCT':
//             return action.payload;
//         default:
//             return state;
//     }
// }

const statusReducer = (state = [], action) => {
    switch(action.type) {
        case 'SET_STATUS':
            return action.payload;
        default:
            return state;
    }
}

export default combineReducers({
    productReducer,
    detailReducer,
    statusReducer,
    
    

  });