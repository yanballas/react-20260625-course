import { useState, useContext } from "react";
import classNames from "classnames";
import { restaurants } from "../../mock/mock.ts";
import { darkTheme, ThemeContext } from "../../context/theme.context";

import Restaurant from "../Restaurant/Restaurant";

import type { RestaurantModel } from "../types";

import styles from "./main.module.css";

export default function Main() {
  const [restaurantId, setRestaurantId] = useState(restaurants[0].id);
  const themeContext = useContext(ThemeContext);
  const { theme } = themeContext;

  return (
    <main className={styles.main}>
      <section className={styles.tabs}>
        {restaurants.map((restaurant: RestaurantModel) => (
          <button
            className={classNames(styles.button, {
              [styles.active]: restaurant.id === restaurantId,
              [styles.dark]: theme === darkTheme,
            })}
            key={restaurant.id}
            onClick={() => setRestaurantId(restaurant.id)}
          >
            {restaurant.name}
          </button>
        ))}
      </section>
      <section className={styles.content}>
        <Restaurant key={restaurantId} id={restaurantId} />
      </section>
    </main>
  );
}
