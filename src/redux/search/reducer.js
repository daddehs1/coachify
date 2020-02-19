// reducer

import {SET_SEARCH_FILTER} from './actionTypes';

// define conditions for initial state
const initialState = {
  searchFilter: ""
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_SEARCH_FILTER:
      {
        return {
          ...state,
          searchFilter: action.payload.filterString
        }
      }
    default:
      return state;
  }
}
