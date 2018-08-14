
import swal from 'sweetalert';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import './Cart.css'
import StripeCheckout from 'react-stripe-checkout';
import Header from './../Header/Header';
require('dotenv').config();


class Cart extends Component {
  placeOrder() {
    console.log('id and cart', this.props.userId, this.props.cart)
    axios.post('/api/shop/addProductsOrdered', { user_id: this.props.userId, cart: this.props.cart })
  }
  onToken = (token) => {
    token.card = void 0;
    var total = this.props.cart.reduce((total, item) => {
      return total + item.price;
    }, 0);
    total = total * 100;

    // console.log('token', token);
    axios.post('/api/payment', { token, amount: total }).then(response => {
      swal("Thank You For Your Purchase", "", "success");
      this.placeOrder()
    }).catch(error => console.log(error));
  }

  render() {
    // console.log('whole cart', this.props.cart);
    // console.log(process.env)
    var total = this.props.cart.reduce((total, item) => {
      return total + item.price;
    }, 0);
    total = total * 100;
    const cart = this.props.cart;
    const product = cart.map((item, i) => {
      return (
        <div className="checkOut">
          <div key={i}>
            <img src={item.img_url} />
            <p>{item.name}</p>
            <p>Price: ${item.price}</p>
            <p>Size: {item.size}</p>
          </div>
        </div>
      )
    })
    return (
      <div>
        <Header />
        {product}
        <div className="checkOut">
          <StripeCheckout
            token={this.onToken}
            stripeKey={process.env.REACT_APP_STRIPE_PUB_KEY}
            amount={total}
          />
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    cart: state.cart,
    userId: state.userId
  };
}

export default connect(mapStateToProps)(Cart);