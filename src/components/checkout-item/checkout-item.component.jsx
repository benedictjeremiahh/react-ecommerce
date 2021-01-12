import React from "react";
import { connect } from "react-redux";
import {
	clearItemFromCart,
	addItem,
	removeItem,
} from "../../redux/cart/cart.action";
import {
	CheckoutItemContainer,
	Minus,
	Plus,
	ProductImage,
	ProductImageContainer,
	ProductName,
	ProductQuantityContainer,
	ProductQuantity,
	ProductPrice,
	RemoveButton,
} from "./checkout-item.styles";

const CheckoutItem = ({ cartItem, clearItem, addItem, removeItem }) => {
	const { name, imageUrl, price, quantity } = cartItem;
	return (
		<CheckoutItemContainer>
			<ProductImageContainer>
				<ProductImage alt="item" src={imageUrl} />
			</ProductImageContainer>
			<ProductName>{name}</ProductName>
			<ProductQuantityContainer className="quantity">
				<Minus
					className="minus"
					onClick={() => removeItem(cartItem)}
				></Minus>
				<ProductQuantity>{quantity}</ProductQuantity>
				<Plus className="plus" onClick={() => addItem(cartItem)}></Plus>
			</ProductQuantityContainer>
			<ProductPrice>{price}</ProductPrice>
			<RemoveButton onClick={() => clearItem(cartItem)}>
				&#10005;
			</RemoveButton>
		</CheckoutItemContainer>
	);
};

const mapDispatchToProps = (dispatch) => ({
	clearItem: (item) => dispatch(clearItemFromCart(item)),
	addItem: (item) => dispatch(addItem(item)),
	removeItem: (item) => dispatch(removeItem(item)),
});
export default connect(null, mapDispatchToProps)(CheckoutItem);
