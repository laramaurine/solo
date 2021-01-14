import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';
//import { response } from 'express';

// Create the rootSaga generator function
function* productSaga() {
   yield takeLatest('ADD_PRODUCT', addProduct);
   //yield takeEvery('FETCH_PRODUCT', fetchProduct)
   //yield takeLatest('FETCH_DETAIL', fetchDetail)
}

//saga functions
function* addProduct(action){
    console.log('in the add product saga product.saga.js like 13', action.payload);
    try {
        yield axios.post('/api/product/product', action.payload)
        console.log(action.payload);
        //yield put({ type: 'FETCH_PRODUCT'})
    }catch (error) {
        console.log('error in addProduct', error);
    }
}
// function* fetchProduct() {
//     try{
//         const response = yield axios.get('/api/product')
//         yield put({ type: 'SET_PRODUCT', payload: response.data})
//         console.log('line 25 add.product.js', response);
//     }catch (error) {
//         console.log('Error in saga GET index js', error)
//       }
// }
function* fetchDetail(action) {
    try{
        const response = yield axios.get(`/api/product/${action.payload}`)
        yield put({ type: 'SET_DETAIL', payload: response.data})
    }catch (error) {
        console.log('Error in detail GET', error)
      }
}


// Create sagaMiddleware
//const sagaMiddleware = createSagaMiddleware();








// Pass rootSaga into our sagaMiddleware
//sagaMiddleware.run(productSaga);

// ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, 
//     document.getElementById('root'));
// registerServiceWorker();

export default productSaga;

