import React from "react";
import { connect } from "react-redux";
import { selectCollection } from "../../redux/shop/shop.selector";
import CollectionItem from "../../components/collection-item/collection-item.component";
import {
	CollectionItems,
	CollectionPageContainer,
	CollectionTitle,
} from "./collection.styles";
import {
	SpinnerContainer,
	SpinnerOverlay,
} from "../../components/with-spinner/with-spinner.styles";

const CollectionPage = ({ collection }) => {
	if (!collection) {
		return (
			<SpinnerOverlay>
				<SpinnerContainer />
			</SpinnerOverlay>
		);
	}
	const { title, items } = collection;
	return (
		<CollectionPageContainer>
			<CollectionTitle>{title}</CollectionTitle>
			<CollectionItems>
				{items.map((item) => (
					<CollectionItem key={item.id} item={item} />
				))}
			</CollectionItems>
		</CollectionPageContainer>
	);
};

const mapStateToProps = (state, ownProps) => ({
	collection: selectCollection(ownProps.match.params.collectionId)(state),
});
export default connect(mapStateToProps)(CollectionPage);
