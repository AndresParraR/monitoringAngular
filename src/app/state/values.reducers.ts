import { Action, createReducer, on } from "@ngrx/store";
import { setValues } from "./values.actions";
import { initialState, State } from "./values.state";

const _valuesReducer = createReducer(
  initialState,
  on(setValues, (state, {newValues}) => {
    return {
      ...state,
      values: [...newValues]
    }
  }),
);

export function valuesReducer(state: State | undefined, action: Action){
  return _valuesReducer(state, action);
}