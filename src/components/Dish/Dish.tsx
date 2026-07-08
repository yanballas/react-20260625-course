import { useState } from "react";

import Counter from "../Counter/Counter";

import type { MenuItem } from "../types";

type DishProps = { dish: MenuItem };

export default function Dish({ dish }: DishProps) {
  const { id, name, price, ingredients } = dish;
  const dishLimit = 5;

  const [count, setCount] = useState(0);

  const addDish = () => {
    if (dishLimit !== undefined && count === dishLimit) {
      return;
    }

    setCount(count + 1);
  };

  const removeDish = () => {
    if (count === 0) {
      return;
    }

    setCount(count - 1);
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
      <Counter count={count} onIncrement={addDish} onDecrement={removeDish} />
    </li>
  );
}
