import { createReducer, on } from "@ngrx/store";
import { rename, customincrement, decrement, increment, reset } from "./counter.action";
import { initialstate } from "./counter.state";

const _counterReducer = createReducer(initialstate,
    on(increment,(state:any)=>{
        return {
            ...state,
            counter:state.counter + 1
        };
    }),
    on(decrement,(state:any)=>{
        return {
            ...state,
            counter:state.counter - 1
        };
    }),
    on(reset,(state:any)=>{
        return {
            ...state,
            counter:0
        };
    }),
    on(customincrement,(state,action)=>{
        return{
            ...state,
            counter: action.actionvalue =='add' ? state.counter+ action.value : state.counter - action.value
        }
    }),
    on(rename,(state,action)=>{
        return{
            ...state,
            channelname: action.channel
        }
    })
    )

    export function counterReducer (state:any,action:any){
        return _counterReducer(state,action);
    }