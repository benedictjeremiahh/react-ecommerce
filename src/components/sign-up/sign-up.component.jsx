import React, { useState } from "react";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { SignUpContainer, Title } from "./sign-up.styles";
import { connect } from "react-redux";
import { signUpStart } from "../../redux/user/user.action";

const SignUp = ({ signUpStart }) => {
	const [userCredentials, setUserCredentials] = useState({
		displayName: "",
		email: "",
		password: "",
		confirmPassword: "",
	});
	const { displayName, email, password, confirmPassword } = userCredentials;
	const handleSubmit = async (e) => {
		e.preventDefault();
		if (password !== confirmPassword) {
			alert("Passwords don't match!");
			return;
		}

		signUpStart(displayName, email, password);
	};

	const handleChange = (e) => {
		const { name, value } = e.target;
		setUserCredentials({
			...userCredentials,
			[name]: value,
		});
	};

	return (
		<SignUpContainer>
			<Title>I do not have an account</Title>
			<span>Sign up with your email and password</span>
			<form className="sign-up-form" onSubmit={handleSubmit}>
				<FormInput
					type="text"
					name="displayName"
					value={displayName}
					label="Display Name"
					onChange={handleChange}
					required
				/>
				<FormInput
					type="email"
					name="email"
					value={email}
					label="Email"
					onChange={handleChange}
					required
				/>
				<FormInput
					type="password"
					name="password"
					value={password}
					label="Password"
					onChange={handleChange}
					required
				/>
				<FormInput
					type="password"
					name="confirmPassword"
					value={confirmPassword}
					label="Password Confirmation"
					onChange={handleChange}
					required
				/>
				<CustomButton type="submit">Sign Up</CustomButton>
			</form>
		</SignUpContainer>
	);
};

const mapDispatchToProps = (dispatch) => ({
	signUpStart: (displayName, email, password) =>
		dispatch(signUpStart({ displayName, email, password })),
});
export default connect(null, mapDispatchToProps)(SignUp);
