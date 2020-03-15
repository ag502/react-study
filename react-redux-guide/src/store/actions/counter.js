import * as actionTypes from "./actionTypes";

export const increment = () => {
  return {
    type: actionTypes.INCREMENT
  };
};

export const decreasement = () => {
  return {
    type: actionTypes.DECREMENT
  };
};

export const onAdd = number => {
  return {
    type: actionTypes.ADD,
    payload: number
  };
};

export const onSubstract = number => {
  return {
    type: actionTypes.SUBSTRACT,
    payload: number
  };
};
