import { routerReducer } from "@ngrx/router-store";
import { blogReducer } from "../blog/blog.reducer";
import { counterReducer } from "../counter.reducer";
import { appReducer } from "./app.reducer";


export const appstate ={
    counter:counterReducer,
    blog:blogReducer,
    app:appReducer,
    router:routerReducer
}