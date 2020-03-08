import React, {useState} from 'react';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import {IconButton} from '@material-ui/core';
import {useStateValue} from 'provider/StateProvider';

function SearchBar() {
  const [query, setQuery] = useState('');
  // eslint-disable-next-line
  const [{searchReducer}, dispatch] = useStateValue();

  const inputHandler = e => {
    setQuery(e.target.value);
  };

  const searchHandler = () => {
    dispatch({type: 'SEARCH', query});
  };

  const handleKeyDown = e => {
    if (e.key === 'Enter') {
      searchHandler();
    }
  };

  return (
    <div>
      <InputBase
        placeholder="Search…"
        inputProps={{'aria-label': 'search'}}
        onChange={inputHandler}
        value={query}
        onKeyDown={handleKeyDown}
      />
      <IconButton onClick={searchHandler}>
        <SearchIcon />
      </IconButton>
    </div>
  );
}

export default SearchBar;
