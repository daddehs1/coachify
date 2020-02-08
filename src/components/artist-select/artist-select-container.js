import React, {useMemo} from 'react';
import ArtistSelectView from './artist-select-view';
const artists = require('./artists');

const ArtistSelect = props => {
  const selected = useMemo(() => {
    const map = {};
    artists.forEach(artist => {
      map[artist.id] = props.selectedArtistSpotifyIDs.indexOf(artist.spotifyID) !== -1
    })
    return map;
  }, [props.selectedArtistSpotifyIDs])

  return <ArtistSelectView {...props} options={artists} selected={selected}/>
}

export default ArtistSelect;
