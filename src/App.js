import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import {styled} from '@material-ui/core';
import './App.css';

import ItemList from 'components/ItemList';
import SearchBar from 'components/SearchBar';
import FilterBar from 'components/FilterBar';
import {StateProvider} from 'provider/StateProvider';
import {rootReducer, initialState} from 'reducer/rootReducer';

const StyledPaper = styled(Paper)({
  margin: '20px'
});

function App() {
  return (
    <div className="App">
      <StateProvider initialState={initialState} reducer={rootReducer}>
        <StyledPaper elevation={3}>
          <Grid container direction="row" justify="center">
            <Grid item xs={12}>
              <SearchBar />
            </Grid>
            <Grid item xs={12}>
              <FilterBar />
            </Grid>
            <Grid item xs={12}>
              <ItemList />
            </Grid>
            <Grid item xs={12}>
              Pagination
            </Grid>
          </Grid>
        </StyledPaper>
      </StateProvider>
    </div>
  );
}

export default App;
