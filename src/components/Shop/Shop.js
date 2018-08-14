import React, { Component } from 'react';
import axios from 'axios';
import './Shop.css';
import { getAllItems } from './../../ducks/reducer';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';
import accesoriesPhoto from './accessories.jpg'
import outerwearPhoto from './outerware.jpg'; 
import topsPhoto from './tshirt.jpg';
import bottomsPhoto from './bottoms.jpg';
import shoesPhoto from './shoes.jpg';
import hatsPhoto from './hats.jpg';

class Shop extends Component{

    componentDidMount(){
        axios.get('/api/items').then(response => {
            // console.log(response.data);
            this.props.getAllItems(response.data)
        })
    }

    render(){
        return(
            <div>
                <Header />
            <div className = 'shopPage'>
                < Link to= "/items/tops">
                <div className = 'topsBox'>
                <img className = 'topsPhoto' src ={ topsPhoto }/>
                <div className="centered">TOPS</div>
                </div>
                </Link>
                < Link to = "/items/bottoms">
                <div className = 'bottomsBox'>
                <img className = 'bottomsPhoto' src = { bottomsPhoto }/>
                <div className="centered">BOTTOMS</div>
                </div>
                </Link>
                < Link to = "/items/shoes">
                <div className = 'shoesBox'>
                <img className = 'shoesPhoto' src = {shoesPhoto}/>
                <div className="centered">FOOTWEAR</div>
                </div>
                </Link>
                < Link to = "/items/outerwear">
                <div className = 'outerwearBox'>
                <img className = 'outerwearPhoto' src = { outerwearPhoto } alt = 'outerwear'/>
                <div className="centered">OUTERWEAR</div>
                </div>
                </Link>
                < Link to = "/items/hats">
                <div className = 'hatsBox'>
                <img className = 'hatsPhoto' src = { hatsPhoto } />
                <div className="centered">HATS</div>
                </div>
                </Link>
                < Link to = "/items/accesories">
                <div className = 'accesoriesBox'>
                <img className = 'accesoriesPhoto' src = { accesoriesPhoto } alt = 'accesories' />
                <div className="centered">ACCESORIES</div>
                </div>
                </Link>
            </div>
            </div>
        )

    }
    
}
export default connect(null, {getAllItems})(Shop)