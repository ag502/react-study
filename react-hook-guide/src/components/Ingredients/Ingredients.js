import React, { useState } from "react";

import IngredientForm from "./IngredientForm";
import IngredientList from "./IngredientList";
import Search from "./Search";

function Ingredients() {
  const [ingredients, setIngredients] = useState([]);

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

  return (
    <div className="App">
      <IngredientForm onAddIngredient={addIngredientHandler} />

      <section>
        <Search />
        <IngredientList
          ingredients={ingredients}
          onRemoveItem={deleteIngredient}
        />
      </section>
    </div>
  );
}

export default Ingredients;
