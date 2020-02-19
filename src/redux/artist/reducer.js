// reducer

import {ADD_SELECTED_ARTIST, REMOVE_SELECTED_ARTIST} from './actionTypes';

// define conditions for initial state
const initialState = {
  selectedArtistSpotifyIDs: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_SELECTED_ARTIST:
      {
        let {artistSpotifyID} = action.payload;
        let artistAlreadySelected = state.selectedArtistSpotifyIDs.indexOf(artistSpotifyID) !== -1;
        let newSelectedArtistSpotifyIDs = artistAlreadySelected
          ? state.selectedArtistSpotifyIDs
          : [
            ...state.selectedArtistSpotifyIDs,
            artistSpotifyID
          ]
        return {
          ...state,
          selectedArtistSpotifyIDs: newSelectedArtistSpotifyIDs
        }
      }
    case REMOVE_SELECTED_ARTIST:
      {
        let {artistSpotifyID} = action.payload;
        let newSelectedArtistSpotifyIDs = state.selectedArtistSpotifyIDs.filter(id => id !== artistSpotifyID);
        return {
          ...state,
          selectedArtistSpotifyIDs: newSelectedArtistSpotifyIDs
        }
      }
    default:
      return state;
  }
}
