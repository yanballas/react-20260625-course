import { useReducer } from "react";

import { type FormAction, EFormActionType, type FormState } from "./types";

const initialFormState: FormState = {
  name: "",
  email: "",
  rating: 0,
};

function reducer(state: FormState, action: FormAction): FormState {
  switch (action.type) {
    case EFormActionType.EName:
      if (typeof action.payload !== "string") {
        return state;
      }

      return { ...state, name: action.payload };

    case EFormActionType.EEmail:
      if (typeof action.payload !== "string") {
        return state;
      }

      return { ...state, email: action.payload };

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

  return {
    state,
    dispatch,
  };
}
