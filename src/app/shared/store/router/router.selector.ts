import { RouterReducerState } from "@ngrx/router-store";
import { createFeatureSelector, createSelector } from "@ngrx/store";
import { routerstatemodel } from "./customserializer";

const getrouterstate = createFeatureSelector<RouterReducerState<routerstatemodel>>('router')

export const getrouterinfo = createSelector(getrouterstate,(state)=>{
    return state.state.params['id'];
}) 