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

  render() {

    return (
      <div className='total'>
        <Header />
        <div className='background'>
          <img className='largeimg' src={mainPhoto} alt='failed' />
        </div>
        <div className='lowerLevelBoxes'>
          <Link to="/brands">
            <div className='brandsBox'>
              <img className='brandsPhoto' src={brandsPhoto} alt='brand photo' />
              <div className="centered">BRANDS</div>
            </div>
          </Link>
          <Link to="/shop">
            <div className='shopBox'>
              <img className='shopPhoto' src={shopPhoto} alt='shop photo' />
              <div className="centered">SHOP</div>
            </div>
          </Link>

          <Link to="/follow">
            <div className='followBox'>
              <img className='followPhoto' src={followPhoto} />
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