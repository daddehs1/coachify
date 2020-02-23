import React, {useState, useEffect, useMemo} from 'react';
import ArtistSelectView from './artist-select-view';
import {fuzzyContainsString} from '../../helpers/string';
const artists = require('./artists');

const ArtistSelect = props => {
  const {searchFilter} = props;

  const [filteredArtists, setFilteredArtists] = useState(artists);

  useEffect(() => {
    setFilteredArtists(artists.filter(artist => fuzzyContainsString(artist.artistName, searchFilter)))
  }, [searchFilter])

  const selected = useMemo(() => {
    const map = {};
    artists.forEach(artist => {
      map[artist.id] = props.selectedArtistSpotifyIDs.indexOf(artist.spotifyID) !== -1
    })
    return map;
  }, [props.selectedArtistSpotifyIDs])

  return <ArtistSelectView {...props} options={filteredArtists} selected={selected}/>
}

export default ArtistSelect;
