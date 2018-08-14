import React, { Component } from 'react';
import './Follow.css';
import Header from '../Header/Header';
// import instaPhoto from './instaIcon.jpg'
// import twitterPhoto from './twitterLogo.jpg'
// import grailedPhoto from './Layer 0.jpg'

export default class follow extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className='all'>
          <div className='smallBox'>
            <a href="https://www.instagram.com/undergroundsaints/">
              {/* <img className='insta' src={instaPhoto} alt='instagram' /> */}
            </a>
            <a href="https://twitter.com/undrgrndsaints">
              {/* <img className='twitter' src={twitterPhoto} alt='twitter' /> */}
            </a>
            <a href="https://www.grailed.com/mygrails/1038111">
              {/* <img className='grailed' src={grailedPhoto} alt='grailed' /> */}
            </a>
          </div>
        </div>
      </div>
    )
  }
}