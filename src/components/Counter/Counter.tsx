import classNames from "classnames";

import styles from "./counter.module.css";

type CounterProps = {
  count: number;
  onIncrement: () => void;
  onDecrement: () => void;
  className?: string;
};

export default function Counter({
  count,
  onIncrement,
  onDecrement,
  className,
}: CounterProps) {
  return (
    <div className={classNames(styles.counter, className)}>
      <button
        type="button"
        onClick={() => {
          onIncrement();
        }}
      >
        Add
      </button>
      <span>Count: {count}</span>
      <button
        type="button"
        onClick={() => {
          onDecrement();
        }}
      >
        Remove
      </button>
    </div>
  );
}
