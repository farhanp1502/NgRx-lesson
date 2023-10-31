import { createReducer, on } from "@ngrx/store";
import { blogstate } from "./blog.state";
import { addblog, addblogsuccess, deleteblog, loadblog, loadblogfail, loadblogsuccess, updateblog, updateblogsuccess } from "./blog.action";
import { blogmodel } from "./blog.model";


const _blogReducer = createReducer(blogstate,
    on(loadblog,(state:any)=>{
        return {
            ...state,
            isloaded:false
        };
    }),
    on(loadblogsuccess,(state:any,action:any)=>{
 
        return {
            ...state,
            bloglist:[...action.bloglist],
            errorMsg:'',
            isloaded:false
        };
    }),
    on(loadblogfail,(state:any,action:any)=>{
 
        return {
            ...state,
            bloglist:[],
            errorMsg:action.errortext,
            isloaded:false
        };
    }),
    // on(addblog,(state:any,action:any)=>{
    //     const _blog = {...action.bloginput}        
    //     _blog.id = state.bloglist.length + 1;
    //     return {
    //         ...state,
    //         bloglist:[...state.bloglist, _blog]
    //     };
    // }),
    on(addblogsuccess,(state:any,action:any)=>{
        const _blog = {...action.bloginput}        
        return {
            ...state,
            bloglist:[...state.bloglist, _blog],
            isloaded:false
        };
    }),
    on(updateblogsuccess,(state:any,action:any)=>{
        const _blog = {...action.bloginput}        
        const updateblog = state.bloglist.map((blog:any)=>{
            return _blog.id === blog.id ? _blog:blog;
        })
        return {
            ...state,
            bloglist: updateblog,
            isloaded:false
        };
    }),
    on(deleteblog,(state:any,action:any)=>{
        const updateblog = state.bloglist.filter((data:blogmodel)=>{
            return data.id !== action.id;
        })
        return {
            ...state,
            bloglist: updateblog,
            isloaded:false
        };
    }),
   
    
    )

    export function blogReducer (state:any,action:any){
        return _blogReducer(state,action);
    }