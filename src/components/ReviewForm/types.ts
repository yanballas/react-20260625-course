export enum EFormActionType {
  EName = "name",
  EEmail = "email",
  ERating = "rating",
  ESend = "send",
  EClear = "clear",
}

export interface FormState {
  name: string;
  email: string;
  rating: number;
}

export interface FormAction {
  type: EFormActionType;
  payload?: string | number;
}
