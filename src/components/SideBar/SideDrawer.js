import React from 'react';
import './SideDrawer.css'

const sideDrawer = props => {
  let drawerClasses = 'side-drawer';
  if (props.show) {
    drawerClasses = 'side-drawer open';
  }
  return (
    <nav className={drawerClasses}>
      <ul>
        <li><a href="/#/login">Log In</a></li>
        <li><a href="/#/shop">Shop</a></li>
        <li><a href="/#/brands">Brands</a></li>
        <li><a href="/#/follow">Social</a></li>
        <li><a href="/#/cart">Cart</a></li>
        <li><a href="/#/login">Log Out</a></li>
      </ul>
    </nav>
  )
}

export default sideDrawer