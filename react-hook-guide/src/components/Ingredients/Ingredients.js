import React, { useState, useEffect, useCallback } from "react";

import IngredientForm from "./IngredientForm";
import IngredientList from "./IngredientList";
import ErrorModal from "../UI/ErrorModal";
import Search from "./Search";

function Ingredients() {
  const [ingredients, setIngredients] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

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

  const addIngredientHandler = ingredient => {
    setIsLoading(true);
    fetch("https://react-hook-update-41c8c.firebaseio.com/ingredients.json", {
      method: "POST",
      body: JSON.stringify(ingredient),
      header: { "Content-Type": "application/json" }
    })
      .then(res => {
        setIsLoading(false);
        return res.json();
      })
      .then(responseData => {
        setIngredients(prevState => {
          return [...prevState, { id: responseData.name, ...ingredient }];
        });
      });
  };

  const deleteIngredient = id => {
    setIsLoading(true);
    fetch(
      `https://react-hook-update-41c8c.firebaseio.com/ingredients/${id}.json`,
      {
        method: "DELETE"
      }
    )
      .then(res => {
        setIngredients(prevState => {
          setIsLoading(false);
          return prevState.filter(ingredient => ingredient.id !== id);
        });
      })
      .catch(err => {
        setError(err.message);
      });
  };

  const filteredIngredients = useCallback(filteredIngredients => {
    setIngredients(filteredIngredients);
  }, []);

  const clearError = () => {
    setError(null);
    setIsLoading(false);
  };

  return (
    <div className="App">
      {error && <ErrorModal onClose={clearError}>{error}</ErrorModal>}
      <IngredientForm
        onAddIngredient={addIngredientHandler}
        loading={isLoading}
      />

      <section>
        <Search onLoadIngredients={filteredIngredients} />
        <IngredientList
          ingredients={ingredients}
          onRemoveItem={deleteIngredient}
        />
      </section>
    </div>
  );
}

export default Ingredients;
