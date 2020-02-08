import {connect} from 'react-redux';
import ArtistSelect from './artist-select-container';

const mapStateToProps = state => {
  const {selectedArtistSpotifyIDs} = state.artist;
  return {selectedArtistSpotifyIDs};
};

export default connect(mapStateToProps)(ArtistSelect)
