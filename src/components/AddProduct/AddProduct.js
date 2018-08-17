import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../Header/Header'
import './AddProduct.css'

export default class AddProduct extends Component {

//if i have time i will be able to add to my database. on website.
  
  render() {
    return (
      <div>
        <Header />
        Product name:<br />
        <input type="text" name="productname" />
        <br />
        Brand:<br />
        <input type="text" name="brand" />
        <br />
        Desciption:<br />
        <input type="text" name="description" />
        <br />
        Size:<br />
        <input type="text" name="size" />
        <br />
        Price:<br />
        <input type="text" name="price" />
        <br />
        <button>save</button>
      </div>
    )
  }
}