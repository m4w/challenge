const filterReducer = (state, action) => {
  switch (action.type) {
    case 'FILTER': {
      return {
        ...state,
        ...action.filter
      };
    }
    default:
      return state;
  }
};

export default filterReducer;
