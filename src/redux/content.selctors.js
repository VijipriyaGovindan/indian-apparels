import {createSelector} from 'reselect';

const selectContent = state => state.content;

export const selectSection = createSelector(
    [selectContent],
    (content) => content.section
)