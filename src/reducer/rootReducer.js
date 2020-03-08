import searchReducer from 'reducer/searchReducer';
import dataReducer from 'reducer/dataReducer';
import filterReducer from 'reducer/filterReducer';

export const rootReducer = ({search, data, filter}, action) => {
  return {
    search: searchReducer(search, action),
    data: dataReducer(data, action),
    filter: filterReducer(filter, action)
  };
};

export const initialState = {
  search: {
    query: ''
  },
  data: {
    loaded: ''
  },
  filter: {
    agents: true,
    shops: true,
    properties: true
  }
};
