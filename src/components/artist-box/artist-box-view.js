import React from 'react';

import {ArtistBoxViewWrapper, Icon, ArtistName, ArtistSelect} from './artist-box-styles'
import Checkbox from '../checkbox'

const ArtistBoxView = props => {
  return <ArtistBoxViewWrapper>
    <Icon src={props.imageUrl}/>
    <ArtistName>
      {props.artistName}
    </ArtistName>
    <ArtistSelect>
      <Checkbox/>
    </ArtistSelect>
  </ArtistBoxViewWrapper>
}

export default ArtistBoxView;
