import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Restaurant from "./components/Restaurant/Restaurant";

import type { RestaurantModel } from "./components/types";

import { restaurants } from "./mock/mock";

function App() {
  return (
    <>
      <Header />
      <section
        style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)" }}
      >
        {restaurants.map((restaurant: RestaurantModel) => (
          <Restaurant key={restaurant.id} restaurant={restaurant} />
        ))}
      </section>
      <Footer />
    </>
  );
}

export default App;
