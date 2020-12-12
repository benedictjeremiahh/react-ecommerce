import React from "react";
import { Link } from "react-router-dom";
import { auth } from "../../firebase/firebase.utils";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCartHidden } from "../../redux/cart/cart.selector";
import { selectCurrentUser } from "../../redux/user/user.selector";

import "./header.style.scss";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";

const Header = ({ currentUser, hidden }) => (
	<div className="header">
		<Link to="/" className="logo-container">
			<Logo className="logo" />
		</Link>

		<div className="menus">
			<Link className="menu" to="/shop">
				SHOP
			</Link>
			<Link className="menu" to="/shop">
				CONTACT
			</Link>
			{currentUser ? (
				<div className="menu" onClick={() => auth.signOut()}>
					SIGN OUT
				</div>
			) : (
				<Link className="menu" to="/sign-in">
					SIGN IN
				</Link>
			)}
			<CartIcon />
		</div>
		{hidden ? null : <CartDropdown />}
	</div>
);

const mapStateToProps = createStructuredSelector({
	currentUser: selectCurrentUser,
	hidden: selectCartHidden,
});
export default connect(mapStateToProps)(Header);
