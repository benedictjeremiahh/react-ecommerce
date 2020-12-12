import React from "react";
import { Link } from "react-router-dom";
import { auth } from "../../firebase/firebase.utils";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { connect } from "react-redux";

import "./header.style.scss";

const Header = ({ currentUser }) => (
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
		</div>
	</div>
);

const mapStateToProps = (state) => ({
	currentUser: state.user.currentUser,
});
export default connect(mapStateToProps)(Header);
