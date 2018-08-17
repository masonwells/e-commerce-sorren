import React, { Component } from 'react';
import './Home.css';
import axios from 'axios';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer'
import mainPhoto from './mainphoto.jpg';
import shopPhoto from './shopPhoto.jpg';
import followPhoto from './follow.jpg';
import brandsPhoto from './brands.jpg';
import { setUser } from './../../ducks/reducer';


class Home extends Component {

  componentDidMount() {
    axios.get('/api/user-data').then(response => {
      console.log('response', response)
      this.props.setUser(response.data);
    })
  }


  //   componentDidMount() {
  //     axios.get('/api/user-data').then(res => {
  //       this.props.updateUserData(res.data)})

  // }

  boxStyling (box) {
    return { background: `linear-gradient(rgba(0, 0, 0, .3), rgba(0, 0, 0, .3)), url(${box}) center top`, backgroundSize: 'cover', }
}


  render() {

    return (
      <div className='total'>
        <Header />
        <div className='background'></div>

        <div className='lowerLevelBoxes'>

          <Link to="/brands">
            <div className='boxItem'>
              <div className='brandsPhoto' style={this.boxStyling(brandsPhoto)} alt='brand photo'></div>
              <div className="centered">BRANDS</div>
            </div>
          </Link>

          <Link to="/shop">
            <div className='boxItem'>
              <div className='shopPhoto' style={this.boxStyling(shopPhoto)} alt='shop photo'></div>
              <div className="centered">SHOP</div>
            </div>
          </Link>

          <Link to="/follow">
            <div className='boxItem'>
              <div className='followPhoto' style={this.boxStyling(followPhoto)}></div>
              <div className="centered">FOLLOW</div>
            </div>
          </Link>
        </div>


      </div>

    )
  }
}
function mapDispatchToProps(state) {
  return state;
}
export default connect(mapDispatchToProps, { setUser })(Home)

