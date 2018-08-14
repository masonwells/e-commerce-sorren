import React, { Component } from 'react';
import './Items.css';
import { connect } from 'react-redux';
import { getAllItems } from './../../ducks/reducer';
import Header from '../Header/Header';
import axios from 'axios';
import { Link } from 'react-router-dom';


class Items extends Component {
  componentDidMount() {
    if (!this.props.allItems.length) {
      axios.get('/api/items').then(response => {
        // console.log(response.data);
        this.props.getAllItems(response.data)
      });
    }
  }

  render() {
    console.log('render fn', this.props.allItems)
    return (
      <div>
        <Header />

        <div >
          {this.props.allItems.filter((item) => item.category === this.props.match.params.category).map((item, i) => {
            return (
              <div className='allBoxes'>
                <div key={i}>
                  <div className='individual'>
                    <Link to={`/product/${item.id}`}>
                      <img src={item.img_url} className="photo" />
                    </Link>
                    <div>{item.name}</div>
                    <div> ${item.price}</div>
                  </div>
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
  console.log('state in mSTP', state);
  return {
    allItems: state.allItems
  }
}
export default connect(mapStateToProps, { getAllItems })(Items)