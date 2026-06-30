import Restaurant from "./components/Restaurant/Restaurant";

import type { RestaurantModel } from "./components/Restaurant/types";

import { restaurants } from "./mock/mock";

function App() {
  return (
    <section style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)" }}>
      {restaurants.map((restaurant: RestaurantModel) => (
        <Restaurant key={restaurant.id} props={restaurant} />
      ))}
    </section>
  );
}

export default App;
