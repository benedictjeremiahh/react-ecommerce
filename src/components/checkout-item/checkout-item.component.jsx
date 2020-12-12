import React from "react";
import { connect } from "react-redux";
import {
	clearItemFromCart,
	addItem,
	removeItem,
} from "../../redux/cart/cart.action";
import "./checkout.style.scss";
import { ReactComponent as Minus } from "../../assets/minus.svg";
import { ReactComponent as Plus } from "../../assets/plus.svg";

const CheckoutItem = ({ cartItem, clearItem, addItem, removeItem }) => {
	const { name, imageUrl, price, quantity } = cartItem;
	return (
		<div className="checkout-item">
			<div className="image-container">
				<img alt="item" src={imageUrl} />
			</div>
			<span className="name">{name}</span>
			<span className="quantity">
				<Minus
					className="minus"
					onClick={() => removeItem(cartItem)}
				></Minus>
				<span className="value">{quantity}</span>
				<Plus className="plus" onClick={() => addItem(cartItem)}></Plus>
			</span>
			<span className="price">{price}</span>
			<div className="remove-button" onClick={() => clearItem(cartItem)}>
				&#10005;
			</div>
		</div>
	);
};

const mapDispatchToProps = (dispatch) => ({
	clearItem: (item) => dispatch(clearItemFromCart(item)),
	addItem: (item) => dispatch(addItem(item)),
	removeItem: (item) => dispatch(removeItem(item)),
});
export default connect(null, mapDispatchToProps)(CheckoutItem);
