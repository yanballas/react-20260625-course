import type { RestaurantModel, MenuItem, Review } from "./types";

type RestaurantProps = { props: RestaurantModel };
type MenuProps = { props: MenuItem[] };
type ReviewProps = { props: Review[] };

function Menu({ props }: MenuProps) {
  const menu = props;

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

function Review({ props }: ReviewProps) {
  const review = props;

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

function Restaurant({ props }: RestaurantProps) {
  const { name, menu, reviews } = props;

  return (
    <div>
      <h2>{name}</h2>
      <h3>Menu</h3>
      <Menu props={menu} />
      <h3>Reviews</h3>
      <Review props={reviews} />
    </div>
  );
}

export default Restaurant;
