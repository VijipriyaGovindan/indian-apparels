import { createSelector } from 'reselect';

const selectShopContent = state => state.shopContent;

const selectAllCollection = createSelector(
    [selectShopContent],
    (shopContent) => shopContent.collections 
);

export const selectCollection = createSelector(
    [selectAllCollection],
    (collections) =>collections ? Object.keys(collections).map(key => collections[key]) : []
);


//const selectItem = (state, collectionParamUrl) =>
// (selectShopContent(state).collections[collectionParamUrl])

export const selectCollectionItem = (collectionParamUrl) => createSelector(
        [selectAllCollection],
        (collections) => collections[collectionParamUrl]
            
    );
