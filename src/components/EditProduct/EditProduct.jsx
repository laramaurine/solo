import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import { HashRouter as Router, Route, Link } from 'react-router-dom';

class EditProduct extends Component {
    state = {

        editProduct: {
             user_id: '',
             frequency: '',
             review: '',
             in_use: '',
             img_url:'',
             description: '',
             product_name: '',
        }
    }

  render() {
    return (
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
    <button className="cancelButton" onClick={this.handleClick}>Cancel</button>
    
</form>
</div>
    );
  }
}

export default connect(mapStoreToProps)(EditProduct);
