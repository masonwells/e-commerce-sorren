import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { HashRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import Home from './components/Home/Home';
import Login from './components/Login/Login'
import Cart from './components/Cart/Cart';
import Brands from './components/Brands/Brands';
import Items from './components/Items/Items';
import Product from './components/Product/Product';
import Follow from './components/Follow/Follow';
import Shop from './components/Shop/Shop';
import Header from './components/Header/Header';
import AddProduct from './components/AddProduct/AddProduct';
import Account from './components/Account/Account';


class App extends Component {
  constructor() {
    super()
    this.state = {
      first_name: '',
      last_name: '',
      username: '',
      admin: '',
      name: '',
      category: '',
      brand: '',
      price: '',
      description: '',
      size: '',
      imgUrl: '',
      fulfilled: '',
      total: '',
      paid: ''
    }
  }

 


  render() {
    return (
      <div>
        <HashRouter>
          <div>
            <Route component={Login} exact path='/'/>
            <Route component={Home} exact path='/home' />
            <Route component={Cart} path='/cart' />
            <Route component={Brands} path='/brands' />
            <Route component={Items} path='/items/:category' />
            <Route component={Product} path='/product/:id' />
            <Route component={Follow} path='/follow' />
            <Route component={Shop} path='/Shop' />
            <Route component={AddProduct} path='/addproduct' />
            <Route component={Account} path='/account' />
          </div>
        </HashRouter>
      </div>
    );
  }
}

export default App;