export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";
export const ADD = "ADD";
export const SUBSTRACT = "SUBSTARCT";
export const STORE_RESULT = "STORE_RESULT";
export const DELETE_RESULT = "DELETE_RESULT";

export const increment = () => {
  return {
    type: INCREMENT
  };
};

export const decreasement = () => {
  return {
    type: DECREMENT
  };
};

export const onAdd = number => {
  return {
    type: ADD,
    payload: number
  };
};

export const onSubstract = number => {
  return {
    type: SUBSTRACT,
    payload: number
  };
};

const saveResult = res => {
  return {
    type: STORE_RESULT,
    payload: res
  };
};

export const onStoreResult = res => {
  return dispatch => {
    setTimeout(() => {
      dispatch(saveResult(res));
    }, 2000);
  };
};

export const onDeleteResult = id => {
  return {
    type: DELETE_RESULT,
    payload: id
  };
};
