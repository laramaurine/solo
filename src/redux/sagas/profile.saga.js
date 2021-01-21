import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* profileSaga(){
    yield takeLatest('FETCH_DETAIL', fetchDetail)
    yield takeLatest('ADD_PRODUCT', addProduct);
    yield takeLatest('DELETE_PRODUCT', deleteProduct);
}
function* addProduct(action){
    console.log('in the add product saga product.saga.js like 13', action.payload);
    try {
        yield axios.post('/api/profile', action.payload.newProduct)
        console.log(action.payload);
        yield put({ type: 'FETCH_DETAIL', payload: action.payload.user_id})
    }catch (error) {
        console.log('error in addProduct', error);
    }
}

function* fetchDetail(action) {
    try{
        const response = yield axios.get(`/api/profile`)
        console.log('line 23', response.data);
        yield put({ type: 'SET_PROFILE', payload: response.data})
        console.log('line 13 profile Saga', response);
    }catch (error) {
        console.log('Error in detail GET', error)
      }
}

function* deleteProduct(action) {
    try {
      console.log(action.payload);
      yield axios.delete(`/api/profile/${action.payload}`)
      yield put({ type: 'FETCH_DETAIL' })
      console.log('line 36 delete response');
    } catch (error) {
      console.log('Error in deleteProduct profile saga', error)
    }
  }

  function* editProduct(action) {
    try {
        console.log('action.payload editT', action.payload)
        yield axios.put(`/api/product/${action.payload.id}`, action.payload)
    } catch (error) {
        console.log('Error in editProduct', error)
    }
}

export default profileSaga;