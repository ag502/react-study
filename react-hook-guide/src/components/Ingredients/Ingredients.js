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

const httpReducer = (httpState, action) => {
  switch (action.type) {
    case "SEND":
      return { loading: true, error: null };
    case "RESPONSE":
      return { ...httpState, loading: false };
    case "ERROR":
      return { loading: false, error: action.errorMessage };
    case "CLEAR":
      return { ...httpState, error: null };
    default:
      throw new Error("Should not be reached");
  }
};

function Ingredients() {
  const [ingredients, dispatch] = useReducer(ingredientReducer, []);
  const [httpState, dispatchHttp] = useReducer(httpReducer, {
    loading: false,
    error: null
  });
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
    console.log("RENDERING INGREDIENTS", ingredients);
  }, [ingredients]);

  const addIngredientHandler = useCallback(ingredient => {
    dispatchHttp({ type: "SEND" });
    fetch("https://react-hook-update-41c8c.firebaseio.com/ingredients.json", {
      method: "POST",
      body: JSON.stringify(ingredient),
      header: { "Content-Type": "application/json" }
    })
      .then(res => {
        dispatchHttp({ type: "RESPONSE" });
        return res.json();
      })
      .then(responseData => {
        // setIngredients(prevState => {
        //   return [...prevState, { id: responseData.name, ...ingredient }];
        // });
        dispatch({
          type: "ADD",
          ingredient: { id: responseData.name, ...ingredient }
        });
      });
  }, []);

  const deleteIngredient = useCallback(id => {
    dispatchHttp({ type: "SEND" });
    fetch(
      `https://react-hook-update-41c8c.firebaseio.com/ingredients/${id}.json`,
      {
        method: "DELETE"
      }
    )
      .then(res => {
        dispatchHttp({ type: "RESPONSE" });
        // setIngredients(prevState => {
        //   setIsLoading(false);
        //   return prevState.filter(ingredient => ingredient.id !== id);
        // });
        dispatch({ type: "DELETE", id: id });
      })
      .catch(err => {
        dispatchHttp({ type: "ERROR", errorMessage: "Something Wrong" });
      });
  }, []);

  const filteredIngredients = useCallback(filteredIngredients => {
    // setIngredients(filteredIngredients);
    dispatch({ type: "SET", ingredient: filteredIngredients });
  }, []);

  const clearError = useCallback(() => {
    // setError(null);
    // setIsLoading(false);
    dispatchHttp({ type: "CLEAR" });
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
      {httpState.error && (
        <ErrorModal onClose={clearError}>{httpState.error}</ErrorModal>
      )}
      <IngredientForm
        onAddIngredient={addIngredientHandler}
        loading={httpState.loading}
      />

      <section>
        <Search onLoadIngredients={filteredIngredients} />
        {ingredientList}
      </section>
    </div>
  );
}

export default Ingredients;
