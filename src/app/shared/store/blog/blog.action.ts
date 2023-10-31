import { createAction, props } from "@ngrx/store";
import { blogmodel } from "./blog.model";

export const LOAD_BLOG_SUCCESS='[blog page] load blog success';

export const LOAD_BLOG_FAIL='[blog page] load blog Fail';

export const LOAD_BLOG = '[blog page] load blog ';

export const ADD_BLOG = '[blog page] add  blog ';

export const ADD_BLOG_SUCCESS = '[blog page] add  blog success ';

export const UPDATE_BLOG = '[blog page] update  blog ';

export const UPDATE_BLOG_SUCCESS = '[blog page] update  blog success ';

export const DELETE_BLOG = '[blog page] delete  blog ';

export const DELETE_BLOG_SUCCESS = '[blog page] delete  blog success ';



export const loadblog = createAction(LOAD_BLOG);

export const loadblogsuccess = createAction(LOAD_BLOG_SUCCESS,props<{bloglist:blogmodel[]}>());


export const loadblogfail = createAction(LOAD_BLOG_FAIL,props<{errortext:string}>());

export const addblog = createAction(ADD_BLOG,props<{bloginput:blogmodel}>());

export const addblogsuccess = createAction(ADD_BLOG_SUCCESS,props<{bloginput:blogmodel}>());

export const updateblog = createAction(UPDATE_BLOG,props<{bloginput:blogmodel}>());

export const updateblogsuccess = createAction(UPDATE_BLOG_SUCCESS,props<{bloginput:blogmodel}>());

export const deleteblog = createAction(DELETE_BLOG,props<{id:number}>());

export const deleteblogsuccess = createAction(DELETE_BLOG_SUCCESS,props<{id:number}>());

