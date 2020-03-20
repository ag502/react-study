import { useReducer, useCallback } from "react";

const httpReducer = (httpState, action) => {
  switch (action.type) {
    case "SEND":
      return {
        loading: true,
        error: null,
        data: null,
        extra: null,
        identifier: action.identifier
      };
    case "RESPONSE":
      return {
        ...httpState,
        loading: false,
        data: action.responseData,
        extra: action.extra
      };
    case "ERROR":
      return { loading: false, error: action.errorMessage };
    case "CLEAR":
      return { ...httpState, error: null };
    default:
      throw new Error("Should not be reached");
  }
};

const useHttp = () => {
  const [httpState, dispatchHttp] = useReducer(httpReducer, {
    loading: false,
    error: null,
    data: null,
    extra: null,
    identifier: null
  });

  const sendRequest = useCallback(
    (url, method, body, reqExtra, reqIdentifier) => {
      dispatchHttp({ type: "SEND", identifier: reqIdentifier });
      fetch(url, {
        method: method,
        body: body
      })
        .then(res => {
          return res.json();
          // dispatchHttp({ type: "RESPONSE" });
          // setIngredients(prevState => {
          //   setIsLoading(false);
          //   return prevState.filter(ingredient => ingredient.id !== id);
          // });
          // dispatch({ type: "DELETE", id: id });
        })
        .then(responseData => {
          dispatchHttp({
            type: "RESPONSE",
            responseData: responseData,
            extra: reqExtra
          });
        })
        .catch(err => {
          dispatchHttp({ type: "ERROR", errorMessage: "Something Wrong" });
        });
    },
    []
  );
  return {
    isLaoding: httpState.loading,
    data: httpState.data,
    error: httpState.error,
    extra: httpState.extra,
    sendRequest: sendRequest,
    reqIdentifier: httpState.identifier
  };
};

export default useHttp;
