import React from 'react';

import {SelectViewWrapper, FixedArea, DynamicArea} from './select-styles';

import ArtistSelect from '../../components/artist-select'
const SelectView = props => {
  return (<SelectViewWrapper>
    <FixedArea></FixedArea>
    <DynamicArea>
      <ArtistSelect></ArtistSelect>
    </DynamicArea>
  </SelectViewWrapper>);
}

export default SelectView;
