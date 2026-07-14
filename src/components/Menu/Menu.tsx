import Dish from "../Dish/Dish";

import type { MenuItem } from "../types";

type MenuProps = { menu: MenuItem[] };

import styles from "./menu.module.css";

export default function Menu({ menu }: MenuProps) {
  if (!menu.length) {
    return null;
  }

  return (
    <ul className={styles.menu}>
      {menu.map((menuItem: MenuItem) => (
        <Dish key={menuItem.id} className={styles.dish} dish={menuItem} />
      ))}
    </ul>
  );
}
