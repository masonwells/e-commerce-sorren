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
                  <div style={{ background: `url(${item.img_url}) center`, backgroundSize: `cover` }} className="item-banner"></div>
                  <h1>{item.name}</h1>
                  <a className="item-size">Size: {item.size}</a>
                  <h2> ${item.price}</h2>
                  <p className="item-desc">{item.description}</p>
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