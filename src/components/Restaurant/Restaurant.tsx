import type { RestaurantModel, MenuItem, Review } from "./types";

type RestaurantProps = { restaurant: RestaurantModel };
type MenuProps = { menu: MenuItem[] };
type ReviewProps = { review: Review[] };

function Menu({ menu }: MenuProps) {
  return (
    <ul>
      {menu.map((item: MenuItem) => (
        <li key={item.id} style={{ marginBottom: "10px" }}>
          <span>{item.name}</span>
          <span>{item.price}</span>
          <ul>
            {item.ingredients.map((ingredient: string) => (
              <li key={ingredient}>{ingredient}</li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  );
}

function Review({ review }: ReviewProps) {
  return (
    <ol>
      {review.map((item: Review) => (
        <li key={item.id} style={{ marginBottom: "10px" }}>
          <ul>
            <li>{item.user}</li>
            <li>{item.text}</li>
            <li>{item.rating}</li>
          </ul>
        </li>
      ))}
    </ol>
  );
}

function Restaurant({ restaurant }: RestaurantProps) {
  const { name, menu, reviews } = restaurant;

  return (
    <div>
      <h2>{name}</h2>
      <h3>Menu</h3>
      <Menu menu={menu} />
      <h3>Reviews</h3>
      <Review review={reviews} />
    </div>
  );
}

export default Restaurant;
