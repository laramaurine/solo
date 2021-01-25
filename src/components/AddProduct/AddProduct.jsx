import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import mapStoreToProps from '../../redux/mapStoreToProps';
//import { withRouter } from "react-router";
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const styles = theme => ({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      marginLeft: theme.spacing.unit,
      marginRight: theme.spacing.unit,
      width: 200,
    },
    dense: {
      marginTop: 19,
    },
    menu: {
      width: 200,
    },
    button: {
      margin: theme.spacing.unit,
    },
    input: {
      display: 'none',
    },
  });
  

class AddProduct extends Component {
   state = {

       newProduct: {
            user_id: '',
            frequency: '',
            review: '',
            in_use: '',
            img_url:'',
            description: '',
            product_name: '',
       },

       editProduct: false,

   }

   componentDidMount(){
       console.log('in componenet did mount', this.props.store.user.id);
       this.setState({newProduct:{...this.state.newProduct, user_id: this.props.store.user.id}})
   }

   componentDidUpdate(prevProps){
    
        if(this.props.store.updateReducer.frequency !== prevProps.frequency && this.state.newProduct.frequency === null){
            console.log('hiiiii i was called line 33 addProduct jsx');
            this.setState({newProduct: {
                user_id: this.props.store.user_id,
                frequency: this.props.store.updateReducer.frequency,
                review: this.props.store.updateReducer.review,
                in_use: this.props.store.updateReducer.in_use,
                img_url:this.props.store.updateReducer.img_url,
                description: this.props.store.updateReducer.description,
                product_name: this.props.store.updateReducer.product_name,
           }})
        }
   }
 

   handleNewProduct = (event, propertyName) => {
    
    this.setState({
        newProduct: {
            ...this.state.newProduct,
            [propertyName]: event.target.value,
           
        }
        
    });
    
}
handleDelete = (event, id) => {
    console.log('delete clicked', id)
   
    this.props.dispatch({ type: 'DELETE_PRODUCT', payload: id })
}

   addNewProduct = event => {
       console.log('hi i am working addproduct jsx line 64', this.state.newProduct);
       event.preventDefault();
       if(this.state.editProduct){
           this.props.dispatch({type: 'UPDATE_PRODUCT', payload: this.state.newProduct})
           console.log('addProduct line 70', this.state.newProduct);
       }else{
           this.props.dispatch({type: 'ADD_PRODUCT', payload: {newProduct: this.state.newProduct, user_id: this.props.store.user.id}})
       }
       //THIS IS CURRENTLY FIRING BOTH AT THE SAME TIME 
       //this.props.dispatch({type: 'ADD_PRODUCT', payload: {newProduct: this.state.newProduct, user_id: this.props.store.user.id}}})
       //this.props.history.push('/')
    }

//    handleClick = () => {
//        console.log('cancel clicked');
//       this.state({ editProduct: false })
//    }
   handleStatus = (event, id, status) => {
       console.log('status clicked', id, status);
       let newStatus = {id: id, status: status}
       this.props.dispatch({type: 'UPDATE_STATUS', payload: newStatus})
   }

   handleEdit = (event, id) => {
    console.log('edit clicked');
    //this.props.history.push(`/edit/${id}`);
    this.setState({ editProduct: true })
    this.props.dispatch({ type: 'EDIT_PRODUCT_MONEY', payload: id})
    this.setState({
        // newProduct: this.props.updateReducer
        newProduct: {
            //user_id: this.props.updateReducer?.user_id,
            frequency: this.props.updateReducer?.frequency,
            review: this.props.updateReducer?.review,
            in_use: this.props.updateReducer?.in_use,
            img_url:this.props.updateReducer?.img_url,
            description: this.props.updateReducer?.description,
            product_name: this.props.updateReducer?.product_name,
       },
    })
  
  }
    render(){
      
        return(
            <div>
                {/* {JSON.stringify(this.state)} */}
            {/* <li><Link to="/">Go Back Home</Link></li> */}
            <h3>Add A New Product!!!!!!!!!!!</h3>
            {/* {JSON.stringify(this.props.store.updateReducer)} */}
            <form onSubmit={this.addNewProduct}>
            <input required placeholder="Frequency of Use"  defaultValue={this.props.store.updateReducer.frequency} onChange={(event) => this.handleNewProduct (event, 'frequency')} />
            <input required placeholder="Product Review"  defaultValue={this.props.store.updateReducer.review} onChange={(event) =>this.handleNewProduct (event, 'review')} />
            {/* <input required placeholder="In Use"  defaultValue={this.props.store.updateReducer.in_use} onChange={(event) =>this.handleNewProduct (event, 'in_use')} /> */}
            <input placeholder="Image"  defaultValue={this.props.store.updateReducer.img_url} onChange={(event) => this.handleNewProduct (event, 'img_url')} />
            <input required placeholder="Description"  defaultValue={this.props.store.updateReducer.description} onChange={(event) =>this.handleNewProduct (event, 'description')} />
            <input required placeholder="Product Name"  defaultValue={this.props.store.updateReducer.product_name} onChange={(event) =>this.handleNewProduct (event, 'product_name')} />
            <select defaultValue={this.props.store.updateReducer.product_id} onChange={(event) => this.handleNewProduct (event, 'product_id')}>
                  <option value="">Purpose</option>
                  <option value="1">Serum</option>
                  <option value="2">Moisturizer</option>
                  <option value="3">Sunscreen</option>
                  <option value="4">Cleanser</option>
                  <option value="5">Exfoliator</option>
                  <option value="6">Spot Treatment</option>
                  <option value="7">Facial Oil</option>
                  
              </select>
            <input className="submit" type='submit' value='Add New Product' />
            {/* <button onClick={(event) => this.handleEdit(event, this.props.store.user.id)}>Edit</button> */}
            {/* <button className="cancelButton" onClick={this.handleClick}>Cancel</button> */}
            
        </form>
         {/* {JSON.stringify(this.props.store.profile)} */}
         {this.props.store.profile.map((user_profile) =>
             <div key={user_profile.id}>
                <div>{user_profile.purpose_id}</div>
                <div>{user_profile.frequency}</div>
                <div>{user_profile.review}</div> 
                <div>{user_profile.in_use}</div>
                <div>{user_profile.description}</div>
                <img src={user_profile.img_url} alt={user_profile.description}/>
                <div>{user_profile.product_name}</div>
                <button onClick={(event) => this.handleEdit(event, user_profile.id)}>Edit</button>
                <button onClick={(event) =>this.handleDelete(event, user_profile.id)}>Delete</button>
                <button onClick={(event) =>this.handleStatus(event, user_profile.id, user_profile.in_use)}>In Use?</button>
                {/* <br></br>
                <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"></input>
                <label for="vehicle1">In Use</label><br></br>
                <input type="checkbox" id="vehicle2" name="vehicle1" value="Bike"></input>
                <label for="vehicle1">Not In Use</label>
                <br></br> */}
                <div></div>
              {/* {JSON.stringify(this.props.reduxState.user_profile.id)} */}
             </div>
             )}
        </div>
        )
    }
}

// const mapStoreToProps = (store) => ({
//     store,
//   });

export default connect(mapStoreToProps)(AddProduct);
