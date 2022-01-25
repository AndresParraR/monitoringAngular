import { createAction, props } from "@ngrx/store";

export const setValues = createAction('setValues', props<{newValues: any}>());