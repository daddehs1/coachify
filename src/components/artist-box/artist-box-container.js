import React, {useCallback} from 'react';

import ArtistBoxView from './artist-box-view';

const ArtistBox = props => {
  const {spotifyID, addSelectedAritst, removeSelectedAritst} = props;

  const toggleArtistSelected = useCallback(() => {
    if (!props.selected) {
      addSelectedAritst(spotifyID);
    } else {
      removeSelectedAritst(spotifyID);
    }
  }, [props.selected, addSelectedAritst, spotifyID, removeSelectedAritst])

  return <ArtistBoxView {...props} selected={props.selected} onClick={toggleArtistSelected}/>
}

export default ArtistBox;
