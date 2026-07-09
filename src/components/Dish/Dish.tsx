import useDishCounter from "./useDishCounter";
import Counter from "../Counter/Counter";

import type { MenuItem } from "../types";

type DishProps = { dish: MenuItem };

const dishLimit = 5;

export default function Dish({ dish }: DishProps) {
  const { id, name, price, ingredients } = dish;
  const { count, addDish, removeDish } = useDishCounter(dishLimit);

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
