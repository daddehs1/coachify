import {SET_SEARCH_FILTER} from './actionTypes';

export const setSearchFilter = filterString => ({type: SET_SEARCH_FILTER, payload: {
    filterString
  }})
