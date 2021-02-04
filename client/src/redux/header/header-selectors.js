import {createSelector} from 'reselect';

const selectHeader = state => state.header;

export const selectHeaderFixed = createSelector(
   [selectHeader],
   header => header.headerFixed
);

export const selectHeaderHidden = createSelector(
   [selectHeader],
   header => header.headerHidden
);