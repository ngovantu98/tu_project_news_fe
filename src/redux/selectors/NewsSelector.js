import { createSelector } from "@reduxjs/toolkit";

/** Selector **/
const newsSelector = (state) => state.News;

const selectNewsSelector = createSelector(
    newsSelector,
    state => state.newss);



/** function */
export const selectNewss = (state) => {
    return selectNewsSelector(state);
}

