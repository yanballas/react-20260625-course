import Menu from "../Menu/Menu";
import Review from "../Review/Review";

import type { RestaurantModel } from "../types";

type RestaurantProps = { restaurant: RestaurantModel };

function Restaurant({ restaurant }: RestaurantProps) {
  const { name, menu, reviews } = restaurant;

  if (!name) {
    return null;
  }

  return (
    <div>
      <h2>{name}</h2>
      <h3>Menu</h3>
      <Menu menu={menu} />
      <h3>Reviews</h3>
      <Review reviews={reviews} />
    </div>
  );
}

export default Restaurant;
