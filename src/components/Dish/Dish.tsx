import { useContext } from "react";
import useDishCounter from "./useDishCounter";
import Counter from "../Counter/Counter";
import classNames from "classnames";
import { UserContext } from "../../context/user.context";

import type { MenuItem } from "../types";

type DishProps = { dish: MenuItem; className?: string };

import styles from "./dish.module.css";

const dishLimit = 5;

export default function Dish({ dish, className }: DishProps) {
  const { id, name, price, ingredients } = dish;
  const { count, addDish, removeDish } = useDishCounter(dishLimit);
  const { user } = useContext(UserContext);

  if (!name) {
    return null;
  }

  return (
    <li key={id} className={classNames(styles.dish, className)}>
      <span>{name}</span>
      <span>cost {price}</span>
      <ul>
        {ingredients.map((ingredient: string) => (
          <li key={ingredient}>{ingredient}</li>
        ))}
      </ul>
      {user !== null ? (
        <Counter count={count} onIncrement={addDish} onDecrement={removeDish} />
      ) : null}
    </li>
  );
}
