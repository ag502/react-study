const initialState = {
  counter: 0,
  results: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        ...state,
        counter: state.counter + 1
      };
    case "DECREASEMENT":
      return {
        ...state,
        counter: state.counter - 1
      };
    case "ADD":
      return {
        ...state,
        counter: state.counter + action.payload
      };
    case "SUBSTRACT":
      return {
        ...state,
        counter: state.counter - action.payload
      };
    case "STORE_RESULT":
      return {
        ...state,
        results: [...state.results, { id: new Date(), value: state.counter }]
      };
    case "DELETE_RESULT":
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
