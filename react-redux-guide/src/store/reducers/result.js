import * as actionTypes from "../actions/actionTypes";

const initialState = {
  results: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.STORE_RESULT:
      return {
        ...state,
        results: [...state.results, { id: new Date(), value: action.payload }]
      };
    case actionTypes.DELETE_RESULT:
      const updatedArray = state.results.filter((result, index) => {
        return action.payload !== result.id;
      });
      return {
        ...state,
        results: updatedArray
      };
    default:
      return state;
  }
};

export default reducer;
