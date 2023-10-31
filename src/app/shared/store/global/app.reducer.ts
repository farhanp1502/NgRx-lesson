import { createReducer, on } from "@ngrx/store";
// import { blogstate } from "./blog.state";
// import { loadspinner} from "./blog.action";
import { Globalstate } from "./global.state";
import { loadspinner } from "./app.action";
// import { loadspinner } from "../blog/blog.action";


const _AppReducer = createReducer(Globalstate,
   
   
    
   
    on(loadspinner,(state:any,action:any)=>{
        return {
            ...state,
            isloaded:action.isloaded
        };
    }),
    
    )

    export function appReducer (state:any,action:any){
        return _AppReducer(state,action);
    }