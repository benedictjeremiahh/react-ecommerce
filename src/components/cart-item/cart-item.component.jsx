import React from "react";
import {
	CartItemContainer,
	ItemDetails,
	ProductImage,
	ProductName,
	ProductPrice,
} from "./cart-item.styles";

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => (
	<CartItemContainer>
		<ProductImage src={imageUrl} alt="item" />
		<ItemDetails>
			<ProductName>{name}</ProductName>
			<ProductPrice>
				{quantity} x {price}
			</ProductPrice>
		</ItemDetails>
	</CartItemContainer>
);

export default CartItem;
