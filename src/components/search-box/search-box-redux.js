import {connect} from 'react-redux';
import {setSearchFilter} from '../../redux/search/actions'
import SearchBox from './search-box-container';

const mapStateToProps = state => {
  const {searchFilter} = state.search;
  return {searchFilter}
}

const mapDispatchToProps = {
  setSearchFilter
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchBox);
