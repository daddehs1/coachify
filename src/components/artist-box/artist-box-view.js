import React from 'react';

import {ArtistBoxViewWrapper, Icon, ArtistName} from './artist-box-styles'
import Checkbox from '../checkbox'

const ArtistBoxView = props => {
  console.log("rendering view")
  return <ArtistBoxViewWrapper selected={props.selected} onClick={props.onClick}>
    <Icon src={props.imageUrl}/>
    <ArtistName>
      {props.artistName}
    </ArtistName>
  </ArtistBoxViewWrapper>
}

export default ArtistBoxView;
