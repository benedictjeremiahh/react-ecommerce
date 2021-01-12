import styled, { css } from "styled-components";

export const CartDropdownContainer = styled.div`
	position: absolute;
	width: 280px;
	height: 340px;
	display: flex;
	flex-direction: column;
	padding: 20px;
	border: 1px solid black;
	background-color: white;
	top: 90px;
	right: 40px;
	z-index: 5;

	button {
		margin-top: auto;
	}
`;

export const CartItems = styled.div`
	height: 240px;
	display: flex;
	flex-direction: column;
	overflow-y: scroll;
`;

export const EmptyMessage = styled.span`
	size: 18px;
	display: flex;
	margin: 50px auto;
`;
