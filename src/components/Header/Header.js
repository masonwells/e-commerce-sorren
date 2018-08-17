import React from 'react'
import './Header.css';
import DrawerToggleButton from '../SideBar/DrawerToggleButton';


const Header = props => {

  let login = function login() {
    let { REACT_APP_DOMAIN, REACT_APP_CLIENT_ID } = process.env
    let url = `${window.location.origin}/auth/callback`
    window.location = `https://${REACT_APP_DOMAIN}/authorize?client_id=${REACT_APP_CLIENT_ID}&scope=openid%20profile%20email&redirct_uri=${url}&response_type=code`
  }




  return (
    <header className="header">
      <nav className="header__navigation">
        <div className="header__toggle-button">
          <DrawerToggleButton click={props.drawerClickHandler} />
        </div>
        <div className="header__logo">
          <a href="/#/">SnazzWear</a></div>
        <div className="spacer" />
        <div className="header_navigation-items">
          <ul>
            <li><a onClick={() => login()}>Log In</a></li>
            <li><a href="/#/shop">Shop</a></li>
            <li><a href="/#/brands">Brands</a></li>
            <li><a href="/#/follow">Social</a></li>
            <li><a href="/#/cart">Cart</a></li>
            <li><a href="/#/account">My Orders</a></li>
          </ul>
        </div>
      </nav>
    </header>
  )
};

export default Header
