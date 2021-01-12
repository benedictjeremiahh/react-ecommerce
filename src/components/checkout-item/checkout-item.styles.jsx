import styled, { css } from "styled-components";
import { ReactComponent as MinusIcon } from "../../assets/minus.svg";
import { ReactComponent as PlusIcon } from "../../assets/plus.svg";

const columnStyles = css`
	width: 23%;
`;

const addReduceGeneralStyle = css`
	cursor: pointer;
`;

export const CheckoutItemContainer = styled.div`
	width: 100%;
	display: flex;
	min-height: 100px;
	border-bottom: 1px solid darkgrey;
	padding: 15px 0;
	font-size: 20px;
	align-items: center;
`;

export const ProductImageContainer = styled.div`
	width: 23%;
	padding-right: 15px;
`;

export const ProductImage = styled.img`
	width: 100%;
	height: 100%;
`;

export const ProductName = styled.span`
	${columnStyles}
`;

export const ProductQuantityContainer = styled.span`
	${columnStyles}

	display: flex;
	align-items: center;
`;

export const Plus = styled(PlusIcon)`
	${addReduceGeneralStyle}
`;

export const Minus = styled(MinusIcon)`
	${addReduceGeneralStyle}
`;

export const ProductQuantity = styled.span`
	margin: 0px 10px;
`;

export const ProductPrice = styled.span`
	${columnStyles}
`;

export const RemoveButton = styled.div`
	padding-left: 12px;
	cursor: pointer;
`;
