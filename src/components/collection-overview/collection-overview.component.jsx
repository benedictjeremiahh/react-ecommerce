import React from "react";
import { createStructuredSelector } from "reselect";
import CollectionPreview from "../../components/collection-preview/collection-preview.component";
import { connect } from "react-redux";
import { selectCollectionForPreview } from "../../redux/shop/shop.selector";
import { CollectionOverviewContainer } from "./collection-overview.styles";

const CollectionOverview = ({ collections }) => (
	<CollectionOverviewContainer>
		{collections.map(({ id, ...otherCollectionProps }) => (
			<CollectionPreview key={id} {...otherCollectionProps} />
		))}
	</CollectionOverviewContainer>
);

const mapStateToProps = createStructuredSelector({
	collections: selectCollectionForPreview,
});
export default connect(mapStateToProps)(CollectionOverview)