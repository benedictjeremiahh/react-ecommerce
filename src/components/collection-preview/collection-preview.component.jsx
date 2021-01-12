import React from "react";
import CollectionItem from "../collection-item/collection-item.component";

import {
	CollectionPreviewContainer,
	CollectionPreviewTitle,
	CollectionPreviewItemsContainer,
} from "./collection-preview.styles";

const CollectionPreview = ({ title, items }) => (
	<CollectionPreviewContainer>
		<CollectionPreviewTitle>{title}</CollectionPreviewTitle>
		<CollectionPreviewItemsContainer>
			{items
				.filter((item, idx) => idx < 4)
				.map((item) => (
					<CollectionItem key={item.id} item={item} />
				))}
		</CollectionPreviewItemsContainer>
	</CollectionPreviewContainer>
);

export default CollectionPreview;
