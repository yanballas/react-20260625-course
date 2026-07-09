export enum EFormActionType {
  EName = "name",
  EComment = "comment",
  ERating = "rating",
  ESend = "send",
  EClear = "clear",
}

export interface FormState {
  name: string;
  comment: string;
  rating: number;
}

export interface FormAction {
  type: EFormActionType;
  payload?: string | number;
}
