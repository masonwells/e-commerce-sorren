import React, { Component } from 'react'
import { connect } from 'react-redux';
import { getAllOrders } from './../../ducks/reducer';
import axios from 'axios';
import './Account.css'
import Header from '../Header/Header';

class Account extends Component {
  constructor() {
    super()
    this.state = {
      orders: []
    }
  }
  componentDidMount() {
    axios.get('/api/shop/getProductsOrdered/' + this.props.id).then(response => {
      console.log(response.data);
      this.setState({ orders: response.data })

    })
  }

  
  render() {
    console.log(this.state.orders)
    console.log(this.props)
    const orders = this.state.orders.map((item, i) => {
     return (
        <div className='totalTable'>
          <div className="tableHeader">
            <div>Image</div>
            <div>Name</div>
            <div>Total</div>
          </div>
          <div className="tableInfo">
            <div className="image"><img src={item.img_url} /></div>
            <div>{item.name}</div>
            <div>{item.total}</div>
          </div>
        </div>
      )
    })
    return (
      <div>
        <Header />
        {orders}
      </div>
    )
  }

}

function mapStateToProps(state) {

  return { orders: state.orders, id: state.id }
}
export default connect(mapStateToProps, { getAllOrders })(Account)