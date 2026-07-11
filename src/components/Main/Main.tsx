import { useState } from "react";
import classNames from "classnames";
import { restaurants } from "../../mock/mock.ts";

import Restaurant from "../Restaurant/Restaurant";

import type { RestaurantModel } from "../types";

import styles from "./main.module.css";

export default function Main() {
  const [restaurantId, setRestaurantId] = useState(restaurants[0].id);

  return (
    <main className={styles.main}>
      <section className={styles.tabs}>
        {restaurants.map((restaurant: RestaurantModel) => (
          <button
            className={classNames(styles.button, {
              [styles.active]: restaurant.id === restaurantId,
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
