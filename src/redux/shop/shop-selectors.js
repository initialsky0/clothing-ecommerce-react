import { createSelector } from 'reselect';
import memoize from 'lodash.memoize';

const selectShop = state => state.shop;

export const selectCollections = createSelector(
   [selectShop],
   shop => shop.collections
);

export const selectCollectionsPreview = createSelector(
   [selectCollections],
   collections => collections ? Object.values(collections) : []
)

export const selectCollection = memoize((CollectionUrlParam) => 
   createSelector(
      [selectCollections], 
      collections => collections ? collections[CollectionUrlParam] : null
   )
);