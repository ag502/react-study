import * as actionTypes from "./actionTypes";

const saveResult = res => {
  return {
    type: actionTypes.STORE_RESULT,
    payload: res
  };
};

export const onStoreResult = res => {
  return (dispatch, getState) => {
    setTimeout(() => {
      dispatch(saveResult(res));
    }, 2000);
  };
};

export const onDeleteResult = id => {
  return {
    type: actionTypes.DELETE_RESULT,
    payload: id
  };
};
