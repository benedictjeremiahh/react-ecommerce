import styled, { css } from "styled-components";
import CustomButton from "../custom-button/custom-button.component";

const transitionStyles = css`
	transition: all 0.2s cubic-bezier(0.25, 0.45, 0.45, 0.95);
`;

const buttonHoveredStyle = css`
	opacity: 0.85;
	display: flex;
	height: 50px;
	border: 1px solid black;
`;

const imageHoveredStyle = css`
	opacity: 0.8;
`;

export const CollectionItemContainer = styled.div`
	width: 22vw;
	display: flex;
	flex-direction: column;
	height: 350px;
	align-items: center;
	position: relative;
`;

export const ProductImage = styled.div`
	width: 100%;
	height: 95%;
	background-size: cover;
	background-position: center;
	margin-bottom: 5px;
	background-image: ${(props) => props.imageUrl};

	${transitionStyles}
	${CollectionItemContainer}:hover & {
		${imageHoveredStyle}
	}
`;

export const CollectionFooter = styled.div`
	width: 100%;
	height: 5%;
	display: flex;
	justify-content: space-between;
	font-size: 18px;
`;

export const CollectionItemName = styled.span`
	width: 90%;
	margin-bottom: 15px;
`;

export const CollectionItemPrice = styled.span`
	width: 10%;
`;

export const AddToCartButton = styled(CustomButton)`
	width: 80%;
	opacity: 0.7;
	position: absolute;
	top: 255px;
	height: 0px;
	overflow: hidden;
	border: none;

	${transitionStyles}
	${CollectionItemContainer}:hover & {
		${buttonHoveredStyle}
	}
`;
