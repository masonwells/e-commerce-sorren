// import React, { Component } from 'react';
// import SideBar from '../SideBar/SideBar.js'
// import '../SideBar/SideBar.css';
// import menuImg from './Hamburger.png'
// import { Link } from 'react-router-dom';

// export default class Header extends Component {
//   constructor() {
//     super()

//     this.state = {
//       toggle: true,
//       classValue: "boxcoverHide fadeHide"
//     }
//   }

//   toggleBox() {
//     this.setState({
//       toggle: !this.state.toggle
//     })
//   }

//   getClass() {
//     const slider = this.state.toggle ? "boxcoverShow" : "boxcoverHide"
//     const fader = this.state.toggle ? "fadeShow" : "fadeHide"
//     this.setState({ classValue: slider, fader })
//   }

//   render() {
//     console.log(this.state)
//     return (
//       <div className='wholeHeader'>
//         <SideBar classForSlider={this.state.classValue} />
//         <div className='Header'>
//           <a href="/#/home">
//             <div className='logo'>BODEGA's</div>
//           </a>
//           <div className='cartandmenu'>
//             <ul>
//               <li className="cart"><Link to='/cart'>Cart</Link></li>
//               <li onClick={() => { this.toggleBox(), this.getClass() }} className='menu'>Menu</li>
//             </ul>
//           </div>
//         </div>
//       </div>

//     )
//   }
// }

import React from 'react'
import './Header.css';
import DrawerToggleButton from '../SideBar/DrawerToggleButton';

const Header = props => (
  <header className="header">
    <nav className="header__navigation">
      <div className="header__toggle-button">
        <DrawerToggleButton click={props.drawerClickHandler} />
      </div>
      <div className="header__logo">
        <a href="/#/home">SnazzWear</a></div>
      <div className="spacer"/> 
      <div className="header_navigation-items">
        <ul>
          <li><a href="/#/home">Log in</a></li>
          <li><a href="/#/shop">Shop</a></li>
          <li><a href="/#/brands">Brands</a></li>
          <li><a href="/#/follow">Social</a></li>
          <li><a href="/#/cart">Cart</a></li>
          <li><a href="/#/account">My Orders</a></li>

        </ul>
      </div>
    </nav>
  </header>
);

export default Header
