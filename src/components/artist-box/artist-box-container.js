import React from 'react';

import ArtistBoxView from './artist-box-view';

const ArtistBox = props => {
  console.log(props);
  return <ArtistBoxView {...props}/>
}

export default ArtistBox;
