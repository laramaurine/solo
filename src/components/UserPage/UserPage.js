import React, { Component } from 'react';
import { connect } from 'react-redux';
import LogOutButton from '../LogOutButton/LogOutButton';
import mapStoreToProps from '../../redux/mapStoreToProps';
import AddProduct from '../AddProduct/AddProduct.jsx';


class UserPage extends Component {
  // this component doesn't do much to start, just renders some user info to the DOM
  render() {
    return (
      <div>
        <h1 id="welcome">Welcome, {this.props.store.user.username}!</h1>
        <p>Your ID is: {this.props.store.user.id}</p>
        <p>this is userPage...all things will display here map function currently in progress</p>
        <p>along with edit and delete buttons products will toggleable between in use and not in use</p>
        <div>
             
        
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
