import React from "react";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";
import { SignUpContainer, Title } from "./sign-up.styles";

class SignUp extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			displayName: "",
			email: "",
			password: "",
			confirmPassword: "",
		};
	}

	handleSubmit = async (e) => {
		e.preventDefault();
		const { displayName, email, password, confirmPassword } = this.state;
		if (password !== confirmPassword) {
			alert("Passwords don't match!");
			return;
		}

		try {
			const { user } = await auth.createUserWithEmailAndPassword(
				email,
				password
			);
			createUserProfileDocument(user, { displayName });
			this.setState({
				displayName: "",
				email: "",
				password: "",
				confirmPassword: "",
			});
		} catch (error) {
			console.error(error);
		}
	};

	handleChange = (e) => {
		const { name, value } = e.target;
		this.setState({
			[name]: value,
		});
	};

	render() {
		const { displayName, email, password, confirmPassword } = this.state;
		return (
			<SignUpContainer>
				<Title>I do not have an account</Title>
				<span>Sign up with your email and password</span>
				<form className="sign-up-form" onSubmit={this.handleSubmit}>
					<FormInput
						type="text"
						name="displayName"
						value={displayName}
						label="Display Name"
						onChange={this.handleChange}
						required
					/>
					<FormInput
						type="email"
						name="email"
						value={email}
						label="Email"
						onChange={this.handleChange}
						required
					/>
					<FormInput
						type="password"
						name="password"
						value={password}
						label="Password"
						onChange={this.handleChange}
						required
					/>
					<FormInput
						type="password"
						name="confirmPassword"
						value={confirmPassword}
						label="Password Confirmation"
						onChange={this.handleChange}
						required
					/>
					<CustomButton type="submit">Sign Up</CustomButton>
				</form>
			</SignUpContainer>
		);
	}
}

export default SignUp;
