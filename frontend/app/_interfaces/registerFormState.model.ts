import { Dispatch, SetStateAction } from "react";

export interface RegisterFormState {
  state: Object;
  setState: Dispatch<SetStateAction<Object>>;
}
