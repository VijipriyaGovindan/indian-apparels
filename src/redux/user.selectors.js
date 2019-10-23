import {createSelector} from 'reselect';

const selectUser = state => state.user;
export const selectLoggedinUser = createSelector (
    [selectUser],
    (user) => user.loggedinUser
);

