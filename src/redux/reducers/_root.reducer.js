import { combineReducers } from 'redux';
import errors from './errors.reducer';
import user from './user.reducer';
import profile from './profile.reducer';
import product from './product.reducer';
import updateReducer from './update.reducer';

// rootReducer is the primary reducer for our entire project
// It bundles up all of the other reducers so our project can use them.
// This is imported in index.js as rootSaga

// Lets make a bigger object for our store, with the objects from our reducers.
// This is what we get when we use 'state' inside of 'mapStateToProps'

//any new reducer import it and bring it into the root reducer
const rootReducer = combineReducers({
  errors, // contains registrationMessage and loginMessage
  user, // will have an id and username if someone is logged in
  profile,
  product,
  updateReducer,
 
});
//this.props.store.errors.loginMesage --multiple reducers in the same file

export default rootReducer;
