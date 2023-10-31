import { createFeatureSelector, createSelector } from "@ngrx/store";
import { Countermodel } from "./counter.model";

const getcounterstate = createFeatureSelector<Countermodel>('counter');

export const getcounter = createSelector(getcounterstate,(state)=>{
    return state.counter;
})
export const getcounterchannel = createSelector(getcounterstate,(state)=>{
    return state.channelname;
})