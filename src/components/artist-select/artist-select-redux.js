import {connect} from 'react-redux';
import ArtistSelect from './artist-select-container';

const mapStateToProps = state => {
  const {selectedArtistSpotifyIDs} = state.artist;
  const {searchFilter} = state.search;
  return {selectedArtistSpotifyIDs, searchFilter};
};

export default connect(mapStateToProps)(ArtistSelect)
