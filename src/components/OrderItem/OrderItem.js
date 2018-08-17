import React, { Component } from 'react';
import axios from 'axios';

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
					<div className='totalTable'>
						<div className="tableHeader">
							<div>Image</div>
							<div>Name</div>
							<div>Total</div>
						</div>
						<div className="tableInfo">
							<div className="image"><img src={image} style={{ height: `200px` }} /></div>
							<div>{name}</div>
							<div>{total}</div>
							<button onClick={() => this.deletePurchase()}>x</button>
							<textarea onChange={(e) => this.handleInput(e.target.value)} onBlur={() => this.sendNotes()} value={this.state.input} rows="4" cols="50"/>
						</div>
					</div>
				</div>
				: null
		)
	}
}

export default OrderItem;