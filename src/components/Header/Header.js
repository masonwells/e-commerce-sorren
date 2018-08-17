import React, { Component } from 'react';
import './Header.css';
import SideBar from '../SideBar/SideBar.js'
import '../SideBar/SideBar.css';
import menuImg from './Hamburger.png'
import { Link } from 'react-router-dom';

export default class Header extends Component {
  constructor() {
    super()

    this.state = {
      toggle: true,
      classValue: "boxcoverHide fadeHide"
    }
  }

  toggleBox() {
    this.setState({
      toggle: !this.state.toggle
    })
  }

  getClass() {
    const slider = this.state.toggle ? "boxcoverShow" : "boxcoverHide"
    const fader = this.state.toggle ? "fadeShow" : "fadeHide"
    this.setState({ classValue: slider, fader })
  }

  render() {
    console.log(this.state)
    return (
      <div className='wholeHeader'>
        <SideBar classForSlider={this.state.classValue} />
        <div className='Header'>
          <a href="/#/home">
            <div className='logo'>BODEGA's</div>
          </a>
          <div className='cartandmenu'>
            <ul>
              <li className="cart"><Link to='/cart'>Cart</Link></li>
              <li onClick={() => { this.toggleBox(), this.getClass() }} className='menu'>Menu</li>
            </ul>
          </div>
        </div>
      </div>

    )
  }
}



{/* <li class="home"><a href="#">Home</a></li>
</ul>
<li class="cart"><a href="#">Cart</a></li>
<li class="contact"><a onClick={() => { this.toggleBox(), this.getClass() }}>Menu</a></li>
</ul>
</div> */}