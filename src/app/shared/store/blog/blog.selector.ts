import { createFeatureSelector, createSelector } from "@ngrx/store";
import { blogmodel, blogs } from "./blog.model";

const getblogstate = createFeatureSelector<blogs>('blog');

export const getblog = createSelector(getblogstate,(state)=>{
    return state.bloglist;
})

export const getblogbyid = (blogid:number)=> createSelector(getblogstate,(state)=>{
    return state.bloglist.find((blog:blogmodel)=>blog.id === blogid) as blogmodel;
})


export const getbloginfo = createSelector(getblogstate,(state)=>{
    return state;
})

// export const getspinnerstate = createSelector(getblogstate,(state)=>{
//     return state.isloaded;
// })