import type { ChangeEvent, MouseEvent } from "react";
import { useReducer } from "react";

import { type FormAction, EFormActionType, type FormState } from "./types";

const initialFormState: FormState = {
  name: "",
  comment: "",
  rating: 0,
};

function reducer(state: FormState, action: FormAction): FormState {
  switch (action.type) {
    case EFormActionType.EName:
      if (typeof action.payload !== "string") {
        return state;
      }

      return { ...state, name: action.payload };

    case EFormActionType.EComment:
      if (typeof action.payload !== "string") {
        return state;
      }

      return { ...state, comment: action.payload };

    case EFormActionType.ERating:
      if (typeof action.payload !== "number") {
        return state;
      }

      return { ...state, rating: action.payload };

    case EFormActionType.ESend:
      return state;

    case EFormActionType.EClear:
      return initialFormState;

    default:
      return state;
  }
}

export default function useForm() {
  const [state, dispatch] = useReducer(reducer, initialFormState);

  const setName = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: EFormActionType.EName, payload: event.target.value });
  };

  const setComment = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: EFormActionType.EComment, payload: event.target.value });
  };

  const incrementRating = () => {
    if (state.rating === 5) {
      return;
    }

    dispatch({
      type: EFormActionType.ERating,
      payload: state.rating + 1,
    });
  };

  const decrementRating = () => {
    if (state.rating === 0) {
      return;
    }

    dispatch({
      type: EFormActionType.ERating,
      payload: state.rating - 1,
    });
  };

  const handleSubmit = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    if (!state.name || !state.comment || state.rating === 0) {
      return;
    }

    dispatch({ type: EFormActionType.ESend });
  };

  const handleClear = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    dispatch({ type: EFormActionType.EClear });
  };

  return {
    state,
    setName,
    setComment,
    incrementRating,
    decrementRating,
    handleSubmit,
    handleClear,
  };
}
