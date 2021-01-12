import React from "react";

import { FormInputLabel, Group, FormInputStyled } from "./form-input.styles";

const FormInput = ({ handleChange, label, ...otherProps }) => {
	return (
		<Group>
			<FormInputStyled onChange={handleChange} {...otherProps} />
			{label ? (
				<FormInputLabel shrink={otherProps.value.length > 0}>
					{label}
				</FormInputLabel>
			) : null}
		</Group>
	);
};

export default FormInput;
