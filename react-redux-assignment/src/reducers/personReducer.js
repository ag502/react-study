import * as actionTypes from "../actions";

const initialState = {
  persons: []
};

const personReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_PERSON:
      return {
        ...state,
        persons: [...state.persons, action.payload]
      };
    case actionTypes.DELETE_PEROSN:
      const _persons = [...state.persons].filter(
        person => person.id !== action.payload
      );
      return {
        ...state,
        persons: _persons
      };
    default:
      return state;
  }
};

export default personReducer;
