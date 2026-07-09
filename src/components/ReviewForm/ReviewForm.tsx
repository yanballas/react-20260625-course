import Counter from "../Counter/Counter";
import useForm from "./useForm";

export default function ReviewForm() {
  const {
    state,
    setName,
    setComment,
    incrementRating,
    decrementRating,
    handleSubmit,
    handleClear,
  } = useForm();

  return (
    <form>
      <input
        type="text"
        placeholder="Name"
        value={state.name}
        onChange={setName}
      />
      <input
        type="text"
        placeholder="Comment"
        value={state.comment}
        onChange={setComment}
      />
      <Counter
        count={state.rating}
        onIncrement={incrementRating}
        onDecrement={decrementRating}
      />
      <button type="submit" onClick={handleSubmit}>
        Send
      </button>
      <button onClick={handleClear}>Clear</button>
    </form>
  );
}
