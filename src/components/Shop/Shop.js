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

class Shop extends Component {

    componentDidMount() {
        axios.get('/api/items').then(response => {
            // console.log(response.data);
            this.props.getAllItems(response.data)
        })
    }

    boxStyling (box) {
        return { background: `linear-gradient(rgba(0, 0, 0, .3), rgba(0, 0, 0, .3)), url(${box}) center top`, backgroundSize: 'cover', }
    }

    render() {
        return (
            <div>
                <Header />
                <div className='shopPage'>
                    < Link to="/items/tops">
                        <div className='boxItem'>
                            <div className='topsPhoto' style={this.boxStyling(topsPhoto)}></div>
                            <div className="centered">TOPS</div>
                        </div>
                    </Link>
                    < Link to="/items/bottoms">
                        <div className='boxItem'>
                            <div className='bottomsPhoto' style={this.boxStyling(bottomsPhoto)}></div>
                            <div className="centered">BOTTOMS</div>
                        </div>
                    </Link>
                    < Link to="/items/shoes">
                        <div className='boxItem'>
                            <div className='shoesPhoto' style={this.boxStyling(shoesPhoto)}></div>
                            <div className="centered">FOOTWEAR</div>
                        </div>
                    </Link>
                    < Link to="/items/outerwear">
                        <div className='boxItem'>
                            <div className='outerwearPhoto' style={this.boxStyling(outerwearPhoto)} alt='outerwear'></div>
                            <div className="centered">OUTERWEAR</div>
                        </div>
                    </Link>
                    < Link to="/items/hats">
                        <div className='boxItem'>
                            <div className='hatsPhoto' style={this.boxStyling(hatsPhoto)}></div>
                            <div className="centered">HATS</div>
                        </div>
                    </Link>
                    < Link to="/items/accesories">
                        <div className='boxItem'>
                            <div className='accesoriesPhoto' style={this.boxStyling(accesoriesPhoto)} alt='accesories'></div>
                            <div className="centered">ACCESORIES</div>
                        </div>
                    </Link>
                </div>
            </div>
        )

    }

}
export default connect(null, { getAllItems })(Shop)