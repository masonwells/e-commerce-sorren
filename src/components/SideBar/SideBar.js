import React, {Component} from 'react';
import './SideBar.css';
import { Link } from 'react-router-dom';
import swal from 'sweetalert';

export default class SideBar extends Component {
    constructor() {
        super();
        // this.state = {
        //     toggle: false
        // }
    }
    popUP(){
        swal("Logged Out");
    }
    render() {
        // const slideMenu = this.state.toggle ? "openBoxCover" : "boxCover"
        return (
            <div className={this.props.classForSlider}>
                <div className='box1'></div>
                <div className='box2'>
                    <div className = 'writing'>
                    < Link to="/home" className='site-nav_link'>Home</Link>
                    < Link to="/shop" className='site-nav_link'>Shop</Link>
                    < Link to="/brands" className='site-nav_link'>Brands</Link>
                    < Link to="/follow" className='site-nav_link'>Follow</Link>
                    < Link to="/" className='site-nav_link'>Log In</Link>
                    <a href='http://localhost:3005/auth/logout' className='site-nav_link'>Logout</a>
                    < Link to="/account" className='site-nav_link'>My Orders</Link> 
                </div>
                </div>
            </div>
        )

    }
}