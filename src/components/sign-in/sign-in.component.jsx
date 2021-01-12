import React from "react";
import CustomButton from "../custom-button/custom-button.component";
import FormInput from "../form-input/form-input.component";
import { auth, signInWithGoogle } from "../../firebase/firebase.utils";
import { ButtonContainer, SignInContainer, Title } from "./sign-in.styles";

class SignIn extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			email: "",
			password: "",
		};
	}

	handleSubmit = async (e) => {
		e.preventDefault();
		const { email, password } = this.state;

		try {
			await auth.signInWithEmailAndPassword(email, password);

			this.setState({
				email: "",
				password: "",
			});
		} catch (error) {
			console.log(error);
		}
	};

	handleChange = (e) => {
		const { value, name } = e.target;
		this.setState({
			[name]: value,
		});
	};

	render() {
		return (
			<SignInContainer>
				<Title>I already have an account</Title>
				<span>Sign in with your email and password</span>

				<form onSubmit={this.handleSubmit}>
					<FormInput
						name="email"
						value={this.state.email}
						required
						handleChange={this.handleChange}
						label="Email"
					/>
					<FormInput
						name="password"
						type="password"
						value={this.state.password}
						required
						handleChange={this.handleChange}
						label="Password"
					/>

					<ButtonContainer>
						<CustomButton type="submit">Sign In</CustomButton>
						<CustomButton
							type="button"
							onClick={signInWithGoogle}
							isGoogleSignIn
						>
							Sign In with Google
						</CustomButton>
					</ButtonContainer>
				</form>
			</SignInContainer>
		);
	}
}

export default SignIn;
