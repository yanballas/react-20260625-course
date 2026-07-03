import Menu from "../Menu/Menu";
import Review from "../Review/Review";
import { restaurants } from "../../mock/mock";

interface RestaurantProps {
  id: string;
}

function Restaurant({ id }: RestaurantProps) {
  const currentRestaurant = restaurants.find(
    (restaurant) => restaurant.id === id,
  );

  if (!currentRestaurant) {
    return null;
  }

  const { name, menu, reviews } = currentRestaurant;

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
