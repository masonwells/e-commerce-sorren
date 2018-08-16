
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
    console.log('id and cart', this.props.id, this.props.cart)
    axios.post('/api/shop/addProductsOrdered', { user_id: this.props.id, cart: this.props.cart })
  }



  onToken = (token) => {
    token.card = void 0;
    var total = this.props.cart.reduce((total, item) => {
      return total + item.price;
    }, 0);
    total = total * 100;
    console.log('token', token, 'total', total);
    axios.post('/api/payment', { token, amount: total }).then(response => {
      swal("Thank You For Your Purchase", "", "success");
      this.placeOrder()
    }).catch(error => console.log(error));
  }





  // axios.delete('/api/clearcart')
  // .then(response=>{
  //     this.setState({
  //         toCart: true
  // })

  render() {
    // console.log('whole cart', this.props.cart);
    // console.log(process.env)
    console.log(this.props.id)
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
            {/* {this.state.toCart === true ? <Redirect to="/cart"/>  : ''} */}
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    cart: state.cart,
    id: state.id
  };
}

export default connect(mapStateToProps)(Cart);