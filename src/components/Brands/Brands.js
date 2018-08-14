import React, { Component } from 'react';
import './Brands.css';
import Header from '../Header/Header';
import supreme from './supreme.jpg';
import FOG from './fearofgod.jpg';
import bape from './bape.jpg'
import zanerobe from './zanerobe.jpg';


export default class brands extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className='all1'>
          < a href="http://www.supremenewyork.com/index">
            <div className='supremeBox'>
              <img className='supremePhoto' src={supreme} />
            </div>
          </a>
          <a href="https://bape.com/index/">
            <div className='bapeBox'>
              <img className='bapePhoto' src={bape} />
            </div>
          </a>
          <a href="https://fearofgod.com/">
            <div className='FOGBox'>
              <img className='FOGPhoto' src={FOG} />
            </div>
          </a>
          <a href="https://zanerobe.com/">
            <div className='palaceBox'>
              <img className='palacePhoto' src={zanerobe} />
            </div>
          </a>
        </div>
      </div>
    )
  }
}