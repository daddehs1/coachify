import React from 'react';

import {SearchBoxViewWrapper, SearchInput, Icon} from './search-box-styles'
import {Search} from 'react-feather';

const SearchBoxView = props => {

  return <SearchBoxViewWrapper>
    <SearchInput onInput={props.handleInput}/>
    <Icon>
      <Search></Search>
    </Icon>
  </SearchBoxViewWrapper>
}

export default SearchBoxView;
