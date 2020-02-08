// action creators which produce actions that will be mapped through dispatch
import {ADD_SELECTED_ARTIST, REMOVE_SELECTED_ARTIST} from './actionTypes';

export const addSelectedAritst = artistSpotifyID => ({type: ADD_SELECTED_ARTIST, payload: {
    artistSpotifyID
  }})

export const removeSelectedAritst = artistSpotifyID => ({type: REMOVE_SELECTED_ARTIST, payload: {
    artistSpotifyID
  }})
