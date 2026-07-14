import { useContext } from "react";
import Menu from "../Menu/Menu";
import Review from "../Review/Review";
import ReviewForm from "../ReviewForm/ReviewForm";
import { restaurants } from "../../mock/mock.ts";
import { UserContext } from "../../context/user.context";

import styles from "./restaurant.module.css";

interface RestaurantProps {
  id: string;
}

function Restaurant({ id }: RestaurantProps) {
  const currentRestaurant = restaurants.find(
    (restaurant) => restaurant.id === id,
  );
  const { user } = useContext(UserContext);

  if (!currentRestaurant) {
    return null;
  }

  const { name, menu, reviews } = currentRestaurant;

  if (!name) {
    return null;
  }

  return (
    <>
      <h2 className={styles.xl}>{name}</h2>
      <h3 className={styles.l}>Menu</h3>
      <Menu menu={menu} />
      <h3 className={styles.m}>Reviews</h3>
      <Review reviews={reviews} />

      {user !== null ? <ReviewForm /> : null}
    </>
  );
}

export default Restaurant;
