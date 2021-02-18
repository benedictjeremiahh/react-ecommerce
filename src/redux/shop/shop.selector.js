import { createSelector } from "reselect";

const selectShop = (state) => state.shop;

export const selectShopCollections = createSelector(
	[selectShop],
	(shop) => shop.collections
);

export const selectCollection = (collectionUrlParam) =>
	createSelector([selectShopCollections], (collections) =>
		collections ? collections[collectionUrlParam] : null
	);

export const selectCollectionForPreview = createSelector(
	[selectShopCollections],
	(collections) =>
		collections
			? Object.keys(collections).map((key) => collections[key])
			: []
);

export const selectIsCollectionFetching = createSelector(
	[selectShop],
	(shop) => shop.isFetching
);

export const selectIsCollectionIsLoaded = createSelector(
	[selectShop],
	// !! return falsy value e.g 0, empty string, null. return true if it is a object {}
	(shop) => !!shop.collections
);

export const selectErrorMessage = createSelector(
	[selectShop],
	(shop) => shop.errorMessage
);
