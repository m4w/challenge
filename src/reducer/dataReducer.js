const dataReducer = (state, action) => {
  switch (action.type) {
    case 'LOAD_STATUS': {
      return {
        ...state,
        loaded: action.loaded
      };
    }

    default:
      return state;
  }
};

export default dataReducer;
