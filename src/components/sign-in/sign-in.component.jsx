import React, { useState } from "react";
import CustomButton from "../custom-button/custom-button.component";
import FormInput from "../form-input/form-input.component";
import { ButtonContainer, SignInContainer, Title } from "./sign-in.styles";
import {
	googleSignInStart,
	emailSignInStart,
} from "../../redux/user/user.action";
import { connect } from "react-redux";

const SignIn = (props) => {
	const { emailSignInStart, googleSignInStart } = props;
	const [userCredentials, setUserCredentials] = useState({
		email: "",
		password: "",
	});
	const { email, password } = userCredentials;
	
	const handleSubmit = async (e) => {
		e.preventDefault();

		emailSignInStart(email, password);
	};

	const handleChange = (e) => {
		const { value, name } = e.target;
		setUserCredentials({
			...userCredentials,
			[name]: value,
		});
	};

	return (
		<SignInContainer>
			<Title>I already have an account</Title>
			<span>Sign in with your email and password</span>

			<form onSubmit={handleSubmit}>
				<FormInput
					name="email"
					value={email}
					required
					handleChange={handleChange}
					label="Email"
				/>
				<FormInput
					name="password"
					type="password"
					value={password}
					required
					handleChange={handleChange}
					label="Password"
				/>

				<ButtonContainer>
					<CustomButton type="submit">Sign In</CustomButton>
					<CustomButton
						type="button"
						onClick={googleSignInStart}
						isGoogleSignIn
					>
						Sign In with Google
					</CustomButton>
				</ButtonContainer>
			</form>
		</SignInContainer>
	);
};

const mapDispatchToProps = (dispatch) => ({
	googleSignInStart: () => dispatch(googleSignInStart()),
	emailSignInStart: (email, password) =>
		dispatch(emailSignInStart({ email, password })),
});
export default connect(null, mapDispatchToProps)(SignIn);
