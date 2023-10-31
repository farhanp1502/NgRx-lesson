import { createAction, props } from "@ngrx/store";

export const SHOW_ALERT = '[app event] show alert';

export const EMPTY_ALERT = '[app event] empty ';

export const LOAD_SPINNER = '[load spinner] load spinner '

export const showalert = createAction(SHOW_ALERT,props<{message:string,actionresult:string}>())

export const emptyalert = createAction(EMPTY_ALERT)
export const loadspinner = createAction(LOAD_SPINNER,props<{isloaded:boolean}>());