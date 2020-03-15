export const ADD_PERSON = "ADD_PERSON";
export const DELETE_PEROSN = "DELETE_PERSON";

export const addPerson = personData => {
  return {
    type: ADD_PERSON,
    payload: personData
  };
};

export const deletePerson = id => {
  return {
    type: DELETE_PEROSN,
    payload: id
  };
};
