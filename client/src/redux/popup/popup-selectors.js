import { createSelector } from 'reselect';

const selectPopup = state => state.popup;

export const selectEmptyCartPopup = createSelector(
   [selectPopup],
   popup => popup.emptyCartHidden
);
