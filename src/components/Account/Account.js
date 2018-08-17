import React, { Component } from 'react'
import { connect } from 'react-redux';
import { getAllOrders } from './../../ducks/reducer';
import axios from 'axios';
import './Account.css'
import Header from '../Header/Header';
import OrderItem from '../OrderItem/OrderItem';

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

  deleteItem() {
    axios.delete()
  }


  render() {
    const { orders } = this.state;
    console.log(orders)
    return (
      <div>
        <Header />
        {orders.map((e, i) => {
          return (
            <OrderItem
              key={i}
              id={e.id}
              name={e.name}
              total={e.total}
              userId={e.user_id}
              orderId={e.order_id}
              image={e.img_url}
              notes={e.notes}
            />
          )
        })}
      </div>
    )
  }
}

function mapStateToProps(state) { return { orders: state.orders, id: state.id } }
export default connect(mapStateToProps, { getAllOrders })(Account)