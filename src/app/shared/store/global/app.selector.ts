import { createFeatureSelector, createSelector } from "@ngrx/store";
import { appModel } from "./app.model";
import { loadspinner } from "./app.action";
// import { loadspinner } from "../blog/blog.action";

const getappstate = createFeatureSelector<appModel>('app');

export const getspinnerstate   = createSelector(getappstate,(state)=>{
   return state.isloaded;
})