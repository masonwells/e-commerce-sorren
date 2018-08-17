import React, { Component } from 'react';

class OrderItem extends Component {
	constructor() {
		super()
		this.state = {
			input: '',
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
	}

	render() {
		const { hidden } = this.state;
		const { user_id, order_id, image, name, total } = this.props;

		console.log('the props of Order Item', this.props)

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
							<input onChange={(e) => this.handleInput(e.target.value)} />
						</div>
					</div>
				</div>
				: null
		)
	}
}

export default OrderItem;