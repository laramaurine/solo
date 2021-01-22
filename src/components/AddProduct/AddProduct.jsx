import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import mapStoreToProps from '../../redux/mapStoreToProps';
//import { withRouter } from "react-router";


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
        if(this.props.store.product.frequency !== prevProps.frequency && this.state.frequency === null){
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

   addNewProduct = event => {
       console.log('hi i am working addproduct jsx line 55', this.state.newProduct);
       event.preventDefault();
       if(this.editProduct){
           this.props.dispatch({type: 'UPDATE_PRODUCT', payload: this.props.store.user_id.id})
       }else{
           this.props.dispatch({type: 'ADD_PRODUCT', payload: {newProduct: this.state.newProduct, user_id: this.props.store.user.id}})
       }
       
       //this.props.dispatch({type: 'ADD_PRODUCT', payload: {newProduct: this.state.newProduct, user_id: this.props.store.user.id}}})
       //this.props.history.push('/')
    }

   handleClick = () => {
       console.log('cancel clicked');
      this.state({ editProduct: false })
   }

   handleEdit = (event, id) => {
    console.log('edit clicked');
    //this.props.history.push(`/edit/${id}`);
    this.setState({ editProduct: true })
    this.props.dispatch({ type: 'EDIT_PRODUCT_MONEY', payload: id})
  }
    render(){
      
        return(
            <div>
                {/* {JSON.stringify(this.state)} */}
            <li><Link to="/">Go Back Home</Link></li>
            <h3>Add A New Product!!!!!!!!!!!</h3>
            
            <form onSubmit={this.addNewProduct}>
            <input required placeholder="Frequency of Use"  value={this.state.newProduct.frequency} onChange={(event) => this.handleNewProduct (event, 'frequency')} />
            <input required placeholder="Product Review"  value={this.state.newProduct.review} onChange={(event) =>this.handleNewProduct (event, 'review')} />
            <input required placeholder="Currently Using? True or False"  value={this.state.newProduct.in_use} onChange={(event) =>this.handleNewProduct (event, 'in_use')} />
            <input placeholder="Image"  value={this.state.newProduct.img_url} onChange={(event) => this.handleNewProduct (event, 'img_url')} />
            <input required placeholder="Description"  value={this.state.newProduct.description} onChange={(event) =>this.handleNewProduct (event, 'description')} />
            <input required placeholder="Product Name"  value={this.state.newProduct.product_name} onChange={(event) =>this.handleNewProduct (event, 'product_name')} />
            <select value={this.state.product_id} onChange={(event) => this.handleNewProduct (event, 'product_id')}>
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
            <button onClick={(event) => this.handleEdit(event, this.props.store.user.id)}>Edit</button>
            <button className="cancelButton" onClick={this.handleClick}>Cancel</button>
            
        </form>
        </div>
        )
    }
}

// const mapStoreToProps = (store) => ({
//     store,
//   });

export default connect(mapStoreToProps)(AddProduct);
