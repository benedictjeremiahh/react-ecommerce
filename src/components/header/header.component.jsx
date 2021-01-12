import React from "react";
import { auth } from "../../firebase/firebase.utils";
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
	MenuDiv,
} from "./header.styles";

const Header = ({ currentUser, hidden }) => (
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
				<MenuLink as="div" className="menu" onClick={() => auth.signOut()}>
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
export default connect(mapStateToProps)(Header);
