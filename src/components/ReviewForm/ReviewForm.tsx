import Counter from "../Counter/Counter";
import { EFormActionType } from "./types";
import useForm from "./useForm";

export default function ReviewForm() {
  const { state, dispatch } = useForm();

  return (
    <form>
      <input
        type="text"
        placeholder="Name"
        value={state.name}
        onChange={(e) =>
          dispatch({ type: EFormActionType.EName, payload: e.target.value })
        }
      />
      <input
        type="text"
        placeholder="Comment"
        value={state.comment}
        onChange={(e) =>
          dispatch({ type: EFormActionType.EComment, payload: e.target.value })
        }
      />
      <Counter
        count={state.rating}
        onIncrement={() =>
          dispatch({ type: EFormActionType.ERating, payload: state.rating + 1 })
        }
        onDecrement={() => {
          if (state.rating === 0) {
            return;
          }
          dispatch({
            type: EFormActionType.ERating,
            payload: state.rating - 1,
          });
        }}
      />
      <button
        type="submit"
        onClick={(event) => {
          event.preventDefault();
          if (!state.name || !state.comment || state.rating === 0) {
            return;
          }
          dispatch({ type: EFormActionType.ESend });
        }}
      >
        Send
      </button>
      <button
        onClick={(event) => {
          event.preventDefault();
          dispatch({ type: EFormActionType.EClear });
        }}
      >
        Clear
      </button>
    </form>
  );
}
