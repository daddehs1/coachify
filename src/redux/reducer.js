import {combineReducers} from 'redux';
import artistReducer from './artist/reducer.js';

const rootReducer = combineReducers({artist: artistReducer})

export default rootReducer;
