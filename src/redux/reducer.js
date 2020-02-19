import {combineReducers} from 'redux';
import artistReducer from './artist/reducer.js';
import searchReducer from './search/reducer.js';

const rootReducer = combineReducers({artist: artistReducer, search: searchReducer})

export default rootReducer;
