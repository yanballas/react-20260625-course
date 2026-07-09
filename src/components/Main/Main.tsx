import { useState } from "react";
import { restaurants } from "../../mock/mock";

import Restaurant from "../Restaurant/Restaurant";

import type { RestaurantModel } from "../types";

export default function Main() {
  const [restaurantId, setRestaurantId] = useState(restaurants[0].id);

  return (
    <main>
      <section style={{ display: "flex", gap: "20px", marginBottom: "20px" }}>
        {restaurants.map((restaurant: RestaurantModel) => (
          <button
            key={restaurant.id}
            onClick={() => setRestaurantId(restaurant.id)}
          >
            {restaurant.name}
          </button>
        ))}
      </section>
      <section>
        <Restaurant key={restaurantId} id={restaurantId} />
      </section>
    </main>
  );
}
