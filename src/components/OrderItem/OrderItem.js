import React, { Component } from 'react';
import axios from 'axios';
import './OrderItem.css';

class OrderItem extends Component {
	constructor(props) {
		super(props)
		this.state = {
			input: this.props.notes,
			hidden: false
		}
	}

	handleInput(value) {
		this.setState({
			input: value
		})
	}

	deletePurchase() {
		this.setState({ hidden: !this.state.hidden })
		axios.delete(`/api/orders/delete/${this.props.orderId}`)
	}

	sendNotes() {
		axios.put(`/api/orders/update/${this.props.orderId}`, { notes: this.state.input })
	}

	render() {
		const { hidden } = this.state;
		const { user_id, order_id, image, name, total } = this.props;
		return (
			!hidden ?
				<div>
					<div className='totalTable' style={{ background: `url(${image}) center`, backgroundSize: `cover` }}>
						<div className="tableInfo">
							<div className="image">
								<div className="exit-wrapper">
									<button onClick={() => this.deletePurchase()} className="exit-button">x</button>
								</div>
								<div className="tableHeader">
									<h1>{name}</h1>
									<p>${total}</p>
								</div>
								{/* <div>{name}</div> */}
							</div>
						</div>
						<textarea onChange={(e) => this.handleInput(e.target.value)} onBlur={() => this.sendNotes()} value={this.state.input} rows="4" cols="50" className="note-area" />
					</div>
				</div>
				: null
		)
	}
}

export default OrderItem;