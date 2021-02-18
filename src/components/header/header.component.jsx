import React from "react";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCartHidden } from "../../redux/cart/cart.selector";
import { selectCurrentUser } from "../../redux/user/user.selector";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import {
	HeaderContainer,
	LogoContainer,
	MenusContainer,
	MenuLink,
} from "./header.styles";
import { signOutStart } from "../../redux/user/user.action";

const Header = ({ currentUser, hidden, signOutStart }) => (
	<HeaderContainer>
		<LogoContainer to="/" className="logo-container">
			<Logo className="logo" />
		</LogoContainer>

		<MenusContainer>
			<MenuLink className="menu" to="/shop">
				SHOP
			</MenuLink>
			<MenuLink className="menu" to="/shop">
				CONTACT
			</MenuLink>
			{currentUser ? (
				<MenuLink as="div" className="menu" onClick={signOutStart}>
					SIGN OUT
				</MenuLink>
			) : (
				<MenuLink className="menu" to="/sign-in">
					SIGN IN
				</MenuLink>
			)}
			<CartIcon />
		</MenusContainer>
		{hidden ? null : <CartDropdown />}
	</HeaderContainer>
);

const mapStateToProps = createStructuredSelector({
	currentUser: selectCurrentUser,
	hidden: selectCartHidden,
});
const mapDispatchToProps = (dispatch) => ({
	signOutStart: () => dispatch(signOutStart()),
});
export default connect(mapStateToProps, mapDispatchToProps)(Header);
