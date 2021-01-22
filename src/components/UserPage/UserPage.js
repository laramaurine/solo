import React, { Component } from 'react';
import { connect } from 'react-redux';
import LogOutButton from '../LogOutButton/LogOutButton';
import mapStoreToProps from '../../redux/mapStoreToProps';
import AddProduct from '../AddProduct/AddProduct.jsx';
import EditProduct from '../EditProduct/EditProduct.jsx';


class UserPage extends Component {

  componentDidMount(){
    this.props.dispatch({type: 'FETCH_DETAIL', payload: this.props.store.user.id })
    
  }

  

  handleDelete = (event, id) => {
    console.log('delete clicked', id)
   
    this.props.dispatch({ type: 'DELETE_PRODUCT', payload: id })
}

// handleEdit = (event, id) => {
//   console.log('edit clicked');
//   //this.props.history.push(`/edit/${id}`);
//   this.props.dispatch({ type: 'EDIT_PRODUCT_MONEY', payload: id})
// }

  // this component doesn't do much to start, just renders some user info to the DOM
  render() {
    return (
      <div>
        <h1 id="welcome">Welcome, {this.props.store.user.username}!</h1>
        <p>Your ID is: {this.props.store.user.id}</p>
        <p>this is userPage...all things will display here map function currently in progress</p>
        <p>along with edit and delete buttons products will toggleable between in use and not in use</p>
        <div>
         {/* {JSON.stringify(this.props.store.profile)} */}
        {this.props.store.profile.map((user_profile) =>
             <div key={user_profile.id}>
                <div>{user_profile.purpose_id}</div>
                <div>{user_profile.frequency}</div>
                <div>{user_profile.review}</div> 
                <div>{user_profile.in_use}</div>
                <img src={user_profile.img_url} alt={user_profile.description}/>
                <div>{user_profile.product_name}</div>
                {/* <button onClick={(event) => this.handleEdit(event, user_profile.id)}>Edit</button> */}
                <button onClick={(event) =>this.handleDelete(event, user_profile.id)}>Delete</button>
                <div></div>
              {/* {JSON.stringify(this.props.reduxState.user_profile.id)} */}
             </div>
             )}

        
       </div>
        <AddProduct />
        <LogOutButton className="log-in" />
      </div>
    );
  }
}
// const mapStoreToProps = (reduxState) => ({
//   reduxState,
// });
// this allows us to use <App /> in index.js
export default connect(mapStoreToProps)(UserPage);
