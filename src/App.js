import React from "react";
import "./App.css";
import Homepage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import SignInSignUpPage from "./pages/sign-in-sign-up/sign-in-sign-up.component";
import { Switch, Route } from "react-router-dom";
import Header from "./components/header/header.component";
import { auth } from "./firebase/firebase.utils";

class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			currentUser: null,
		};
	}

	unsubscribeFromAuth = null;

	componentDidMount() {
		this.unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
			this.setState({
				currentUser: user,
			});
		});
	}

	componentWillUnmount() {
		this.unsubscribeFromAuth();
	}

	render() {
		return (
			<div>
				<Header currentUser={this.state.currentUser} />
				<Switch>
					<Route exact path="/" component={Homepage}></Route>
					<Route exact path="/shop" component={ShopPage}></Route>
					<Route
						exact
						path="/sign-in"
						component={SignInSignUpPage}
					></Route>
				</Switch>
			</div>
		);
	}
}

export default App;
