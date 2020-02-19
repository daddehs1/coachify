import React, {useCallback} from 'react';
import SearchBoxView from './search-box-view';

const SearchBox = props => {
  const {setSearchFilter} = props;

  const handleInput = useCallback(event => {
    const filterString = event.target.value;
    setSearchFilter(filterString);
  }, [setSearchFilter])

  return <SearchBoxView handleInput={handleInput}/>
}

export default SearchBox;
