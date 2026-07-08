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
        placeholder="Email"
        value={state.email}
        onChange={(e) =>
          dispatch({ type: EFormActionType.EEmail, payload: e.target.value })
        }
      />
      <input
        type="number"
        placeholder="Rating"
        value={state.rating}
        onChange={(e) =>
          dispatch({
            type: EFormActionType.ERating,
            payload: Number(e.target.value),
          })
        }
      />
      <button
        type="submit"
        onClick={(event) => {
          event.preventDefault();
          if (!state.name || !state.email || state.rating === 0) {
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
