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
