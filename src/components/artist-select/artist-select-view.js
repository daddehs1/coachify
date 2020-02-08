import React from 'react';
import {ArtistSelectViewWrapper, ArtistList, ArtistListItem} from './artist-select-styles'
import ArtistBox from '../artist-box'

const ArtistSelectView = props => {
  const {options} = props;

  return <ArtistSelectViewWrapper>
    <ArtistList>
      {
        options.map(option => {
          return (<ArtistListItem key={option.id}>
            <ArtistBox key={option.id + "-artist-box"} selected={props.selected[option.id]} spotifyID={option.spotifyID} artistName={option.artistName} imageUrl={option.spotifyInfo.imageUrl || ""}/>
          </ArtistListItem>);
        })
      }
    </ArtistList>
  </ArtistSelectViewWrapper>
}

export default ArtistSelectView;
