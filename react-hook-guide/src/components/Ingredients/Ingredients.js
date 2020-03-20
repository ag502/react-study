import React, {
  useState,
  useEffect,
  useCallback,
  useReducer,
  useMemo
} from "react";

import IngredientForm from "./IngredientForm";
import IngredientList from "./IngredientList";
import ErrorModal from "../UI/ErrorModal";
import Search from "./Search";
import useHttp from "../../hooks/http";

const ingredientReducer = (currentIngredients, action) => {
  switch (action.type) {
    case "SET":
      return action.ingredient;
    case "ADD":
      return [...currentIngredients, action.ingredient];
    case "DELETE":
      return currentIngredients.filter(ing => ing.id !== action.id);
    default:
      throw new Error("Should not get there!");
  }
};

function Ingredients() {
  const [ingredients, dispatch] = useReducer(ingredientReducer, []);
  const {
    isLoading,
    error,
    data,
    sendRequest,
    reqExtra,
    reqIdentifier
  } = useHttp();

  // const [ingredients, setIngredients] = useState([]);
  // const [isLoading, setIsLoading] = useState(false);
  // const [error, setError] = useState();

  // useEffect(() => {
  //   console.log("ingredients Rendering");
  //   fetch("https://react-hook-update-41c8c.firebaseio.com/ingredients.json")
  //     .then(res => res.json())
  //     .then(responseData => {
  //       const loadedIngredients = [];
  //       for (const key in responseData) {
  //         loadedIngredients.push({
  //           id: key,
  //           title: responseData[key].title,
  //           amount: responseData[key].amount
  //         });
  //       }
  //       setIngredients(loadedIngredients);
  //     });
  // }, []);

  useEffect(() => {
    if (reqIdentifier === "REMOVE_INGREDIENT") {
      dispatch({ type: "DELETE", id: reqExtra });
    } else {
      dispatch({ type: "ADD", ingredient: { id: data.name, ...reqExtra } });
    }
  }, [data, reqExtra, reqIdentifier]);

  const addIngredientHandler = useCallback(
    ingredient => {
      sendRequest(
        "https://react-hook-update-41c8c.firebaseio.com/ingredients.json",
        "POST",
        JSON.stringify(ingredient),
        ingredient,
        "ADD_INGREDIENT"
      );
      // dispatchHttp({ type: "SEND" });
      // fetch("https://react-hook-update-41c8c.firebaseio.com/ingredients.json", {
      //   method: "POST",
      //   body: JSON.stringify(ingredient),
      //   header: { "Content-Type": "application/json" }
      // })
      //   .then(res => {
      //     dispatchHttp({ type: "RESPONSE" });
      //     return res.json();
      //   })
      //   .then(responseData => {
      //     // setIngredients(prevState => {
      //     //   return [...prevState, { id: responseData.name, ...ingredient }];
      //     // });
      //     dispatch({
      //       type: "ADD",
      //       ingredient: { id: responseData.name, ...ingredient }
      //     });
      //   });
    },
    [sendRequest]
  );

  const deleteIngredient = useCallback(
    id => {
      sendRequest(
        `https://react-hook-update-41c8c.firebaseio.com/ingredients/${id}.json`,
        "DELETE",
        null,
        id,
        "REMOVE_INGREDIENT"
      );
    },
    [sendRequest]
  );

  const filteredIngredients = useCallback(filteredIngredients => {
    // setIngredients(filteredIngredients);
    dispatch({ type: "SET", ingredient: filteredIngredients });
  }, []);

  const clearError = useCallback(() => {
    // setError(null);
    // setIsLoading(false);
    // dispatchHttp({ type: "CLEAR" });
  }, []);

  const ingredientList = useMemo(() => {
    return (
      <IngredientList
        ingredients={ingredients}
        onRemoveItem={deleteIngredient}
      />
    );
  }, [deleteIngredient, ingredients]);

  return (
    <div className="App">
      {error && <ErrorModal onClose={clearError}>{error}</ErrorModal>}
      <IngredientForm
        onAddIngredient={addIngredientHandler}
        loading={isLoading}
      />

      <section>
        <Search onLoadIngredients={filteredIngredients} />
        {ingredientList}
      </section>
    </div>
  );
}

export default Ingredients;
