import Dish from "../Dish/Dish";

import type { MenuItem } from "../types";

type MenuProps = { menu: MenuItem[] };

export default function Menu({ menu }: MenuProps) {
  if (!menu.length) {
    return null;
  }

  return (
    <ul>
      {menu.map((menuItem: MenuItem) => (
        <Dish dish={menuItem} />
      ))}
    </ul>
  );
}
