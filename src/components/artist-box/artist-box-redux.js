import {connect} from 'react-redux';
import {addSelectedAritst, removeSelectedAritst} from '../../redux/artist/actions'
import ArtistBox from './artist-box-container';

const mapDispatchToProps = {
  addSelectedAritst,
  removeSelectedAritst
};

export default connect(null, mapDispatchToProps)(ArtistBox)
