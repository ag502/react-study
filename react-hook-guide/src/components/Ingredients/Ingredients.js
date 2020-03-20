import React, { useState, useEffect, useCallback } from "react";

import IngredientForm from "./IngredientForm";
import IngredientList from "./IngredientList";
import Search from "./Search";

function Ingredients() {
  const [ingredients, setIngredients] = useState([]);

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
    fetch("https://react-hook-update-41c8c.firebaseio.com/ingredients.json", {
      method: "POST",
      body: JSON.stringify(ingredient),
      header: { "Content-Type": "application/json" }
    })
      .then(res => {
        return res.json();
      })
      .then(responseData => {
        setIngredients(prevState => {
          return [...prevState, { id: responseData.name, ...ingredient }];
        });
      });
  };

  const deleteIngredient = id => {
    const newIngredients = ingredients.filter(ingredient => {
      return ingredient.id !== id;
    });
    setIngredients(newIngredients);
  };

  const filteredIngredients = useCallback(filteredIngredients => {
    setIngredients(filteredIngredients);
  }, []);

  return (
    <div className="App">
      <IngredientForm onAddIngredient={addIngredientHandler} />

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
