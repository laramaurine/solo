import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* profileSaga(){
    yield takeLatest('SET_DETAIL', fetchDetail)
}


function* fetchDetail(action) {
    try{
        const response = yield axios.get(`/api/profile/${action.payload}`)
        yield put({ type: 'SET_PROFILE', payload: response.data})
        console.log('line 13 profile Saga', response);
    }catch (error) {
        console.log('Error in detail GET', error)
      }
}



export default profileSaga;