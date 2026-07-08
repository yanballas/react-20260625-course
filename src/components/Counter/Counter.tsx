type CounterProps = {
  count: number;
  onIncrement: () => void;
  onDecrement: () => void;
};

export default function Counter({
  count,
  onIncrement,
  onDecrement,
}: CounterProps) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
      <button
        onClick={(event) => {
          event.preventDefault();
          onIncrement();
        }}
      >
        Add
      </button>
      <span>Count: {count}</span>
      <button
        onClick={(event) => {
          event.preventDefault();
          onDecrement();
        }}
      >
        Remove
      </button>
    </div>
  );
}
