import React from "react";
import { connect } from "react-redux";
import CartItem from "../cart-item/cart-item.component";
import { selectCartItems } from "../../redux/cart/cart.selector";
import CustomButton from "../custom-button/custom-button.component";
import { createStructuredSelector } from "reselect";
import { withRouter } from "react-router-dom";
import { toggleCartHidden } from "../../redux/cart/cart.action";
import {
	CartDropdownContainer,
	CartItems,
	EmptyMessage,
} from "./cart-dropdown.styles";

const CartDropdown = ({ cartItems, history, dispatch }) => (
	<CartDropdownContainer>
		<CartItems>
			{cartItems.length ? (
				cartItems.map((cartItem) => (
					<CartItem key={cartItem.id} item={cartItem} />
				))
			) : (
				<EmptyMessage className="empty-message">
					Your cart is empty
				</EmptyMessage>
			)}
		</CartItems>
		<CustomButton
			onClick={() => {
				dispatch(toggleCartHidden());
				history.push("/checkout");
			}}
		>
			GO TO CHECKOUT
		</CustomButton>
	</CartDropdownContainer>
);
const mapStateToProps = createStructuredSelector({
	cartItems: selectCartItems,
});
export default withRouter(connect(mapStateToProps)(CartDropdown));
