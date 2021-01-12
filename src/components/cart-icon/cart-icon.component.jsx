import React from "react";

import { connect } from "react-redux";
import { toggleCartHidden } from "../../redux/cart/cart.action";
import { selectCartItemsCount } from "../../redux/cart/cart.selector";
import { createStructuredSelector } from "reselect";
import { ShoppingIcon, CartIconContainer, ItemCount } from "./cart-icon.styles";

const CartIcon = ({ toggleCartHidden, itemCount }) => (
	<CartIconContainer onClick={toggleCartHidden}>
		<ShoppingIcon className="shopping-icon" />
		<ItemCount className="item-count">{itemCount}</ItemCount>
	</CartIconContainer>
);

const mapDispatchToProps = (dispatch) => ({
	toggleCartHidden: () => dispatch(toggleCartHidden()),
});

const mapStateToProps = createStructuredSelector({
	itemCount: selectCartItemsCount,
});
export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
