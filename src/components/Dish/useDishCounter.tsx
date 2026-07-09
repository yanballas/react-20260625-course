import { useState } from "react";

export default function useDishCounter(dishLimit?: number) {
  const [count, setCount] = useState(0);

  const addDish = () => {
    if (dishLimit !== undefined && count === dishLimit) {
      return;
    }

    setCount(count + 1);
  };

  const removeDish = () => {
    if (count === 0) {
      return;
    }

    setCount(count - 1);
  };

  return {
    count,
    addDish,
    removeDish,
  };
}
