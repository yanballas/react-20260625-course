import { useState } from "react";

import type { MenuItem } from "../types";

type DishProps = { dish: MenuItem };

export default function Dish({ dish }: DishProps) {
  const { id, name, price, ingredients } = dish;
  const [countDish, setCountDish] = useState(0);

  const addDish = () => {
    setCountDish(countDish + 1);
  };

  const removeDish = () => {
    if (countDish === 0) {
      return;
    }

    setCountDish(countDish - 1);
  };

  if (!name) {
    return null;
  }

  return (
    <li key={id} style={{ marginBottom: "10px" }}>
      <span>{name}</span> | cost <span>{price}</span>
      <ul>
        {ingredients.map((ingredient: string) => (
          <li key={ingredient}>{ingredient}</li>
        ))}
      </ul>
      <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
        <button onClick={addDish}>Add</button>
        <span>Count: {countDish}</span>
        <button onClick={removeDish}>Remove</button>
      </div>
    </li>
  );
}
