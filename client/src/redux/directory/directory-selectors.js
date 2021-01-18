import { createSelector } from 'reselect';

const selectDirectory = state => state.directory;

export const selectDirSection = createSelector(
   [selectDirectory],
   directory => directory.section
)