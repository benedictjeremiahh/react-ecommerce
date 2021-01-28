import React from "react";

import { connect } from "react-redux";
import { addItem } from "../../redux/cart/cart.action";
import {
	AddToCartButton,
	CollectionFooter,
	CollectionItemContainer,
	CollectionItemName,
	CollectionItemPrice,
	ProductImage,
} from "./collection-item.styles";

const CollectionItem = ({ item, addItem }) => {
	const { name, price, imageUrl } = item;

	return (
		<CollectionItemContainer>
			<ProductImage imageUrl={`url(${imageUrl})`}></ProductImage>
			<CollectionFooter>
				<CollectionItemName>{name}</CollectionItemName>
				<CollectionItemPrice>{price}</CollectionItemPrice>
			</CollectionFooter>
			<AddToCartButton inverted onClick={() => addItem(item)}>
				Add to cart
			</AddToCartButton>
		</CollectionItemContainer>
	);
};

const mapDispatchToProps = (dispatch) => ({
	addItem: (item) => dispatch(addItem(item)),
});
export default connect(null, mapDispatchToProps)(CollectionItem);
