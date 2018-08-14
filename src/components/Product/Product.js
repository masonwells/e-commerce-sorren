import React, { Component } from 'react';
import './Product.css';
import { connect } from 'react-redux';
import { getAllItems, addProductToCart } from './../../ducks/reducer';
import Header from '../Header/Header';
import axios from 'axios';
import swal from 'sweetalert';


class Product extends Component {
  componentDidMount() {
    if (!this.props.allItems.length) {
      axios.get('/api/items').then(response => {
        // console.log(response.data);
        this.props.getAllItems(response.data)
      });
    }
  }
  addToCart(item) {
    console.log(item);
    this.props.addProductToCart(item);
    swal({
      title: "Added To Cart",
      button: "Ok",
    });
  }

  render() {

    return (
      <div>
        <Header />
        <div >
          {this.props.allItems.filter((item) => item.id === +this.props.match.params.id).map((item, i) => {
            return (
              <div key={i}>
                <div className='individual'>
                  <img src={item.img_url} />
                  <div>Name: {item.name}</div>
                  <div>Details: {item.description}</div>
                  <div> ${item.price}</div>
                  <div>Size: {item.size}</div>
                  <div className="addToCart" onClick={() => this.addToCart(item)}>Add to Cart</div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}
function mapStateToProps(state) {

  return {

    allItems: state.allItems
  }
}
export default connect(mapStateToProps, { getAllItems, addProductToCart })(Product)