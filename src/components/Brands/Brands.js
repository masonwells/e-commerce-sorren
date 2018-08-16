import React, { Component } from 'react';
import './Brands.css';
import Header from '../Header/Header';
import supreme from './supreme.jpg';
import FOG from './fearofgod.jpg';
import bape from './bape.jpg'
import zanerobe from './zanerobe.jpg';


export default class brands extends Component {



  boxStyling (box) {
  return { background: `linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)), url(${box}) center top`, backgroundSize: 'cover', }
}


  render() {
    return (
      <div>
        <Header />
        <div className='all1'>
          < a href="http://www.supremenewyork.com/index">
            <div className='boxItem'>
              <div className='supremePhoto' style={this.boxStyling(supreme)}></div>
            </div>
          </a>
          <a href="https://bape.com/index/">
            <div className='boxItem'>
              <div className='bapePhoto' style={this.boxStyling(bape)}></div>
            </div>
          </a>
          <a href="https://fearofgod.com/">
            <div className='boxItem'>
            <div className='FOGPhoto' style={this.boxStyling(FOG)}></div>
            </div>
          </a>
          <a href="https://zanerobe.com/">
            <div className='boxItem'>
            <div className='supremePhoto zanerobe' style={this.boxStyling(zanerobe)}></div>
            </div>
          </a>
        </div>
      </div>
    )
  }
}