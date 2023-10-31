// import { Injectable } from "@angular/core";
// import { Action } from "@ngrx/store";
// import { MasterService } from "../../master.service";
// import { createEffect, ofType } from "@ngrx/effects";
// import { LOAD_BLOG, loadblogsucess } from "./blog.action";
// import { EMPTY, catchError, exhaustMap, map } from "rxjs";

//   export class Blogeffects{
//     constructor(private action$:Action,private masterservice:MasterService){}

//     _blog = createEffect(()=>this.action$.pipe(
//         ofType(LOAD_BLOG),
//         exhaustMap((action)=>{
//             return this.masterservice.getblogs().pipe(
//                 map((data)=>{
//                     return loadblogsucess({bloglist:data})
//                 }),
//                 catchError(()=>EMPTY)
//             )
//         })
//     ))
//   }
import { Injectable } from "@angular/core";
import { Actions, act, createEffect, ofType } from "@ngrx/effects";
import { catchError, exhaustMap, map, switchMap } from "rxjs/operators";
import { EMPTY, of } from "rxjs";
import { MasterService } from "../../master.service";
import { LOAD_BLOG, addblog, addblogsuccess, deleteblog, deleteblogsuccess, loadblogfail, loadblogsuccess, updateblog, updateblogsuccess } from "./blog.action";
import { blogmodel } from "./blog.model";
import { MatSnackBar } from "@angular/material/snack-bar";
import { loadspinner, showalert } from "../global/app.action";

@Injectable()
export class Blogeffects {
  constructor(private actions$: Actions, private masterservice: MasterService,private _snackbar:MatSnackBar) {}

  _blog = createEffect(() =>
    this.actions$.pipe(
      ofType(LOAD_BLOG),
      exhaustMap((action) =>
        this.masterservice.getblogs().pipe(
          map((data) => loadblogsuccess({ bloglist: data })),
          catchError((_error) => of(loadblogfail({errortext:_error.message}),loadspinner({isloaded:false})))
        )
      )
    )
  );

  add_blog =createEffect(()=>
  this.actions$.pipe(
    ofType(addblog),
    switchMap(action =>
      this.masterservice.createblog(action.bloginput).pipe(
        switchMap(data=> of(

          addblogsuccess({bloginput:data as blogmodel}),
          loadspinner({isloaded:false}),
         showalert({message:'Added successfully',actionresult:'pass'})
        )
        ),
        catchError((_error)=>of(showalert({message:'Added failed - Due to'+ _error.message,actionresult:'fail' }),loadspinner({isloaded:false})))
      )
    )
  ))
  update_blog =createEffect(()=>
  this.actions$.pipe(
    ofType(updateblog),
    switchMap(action =>
      this.masterservice.updateblog(action.bloginput).pipe(
        switchMap(res =>of(
          updateblogsuccess({bloginput:action.bloginput}),
          loadspinner({isloaded:false}),
          showalert({message:'updated successfully',actionresult:'pass'})
        )
        ),
        catchError((_error)=>of(showalert({message:'updated failed - Due to'+ _error.message,actionresult:'fail' }),loadspinner({isloaded:false})))
      )
    )
  ))
  delete_blog =createEffect(()=>
  this.actions$.pipe(
    ofType(deleteblog),
    switchMap(action=>
      this.masterservice.deleteblog(action.id).pipe(
        switchMap(res=>of(

          deleteblogsuccess({id:action.id}),
          loadspinner({isloaded:false}),
          showalert({message:'removed successfully',actionresult:'pass'})
        )
        ),
        catchError((_error)=>of(showalert({message:' failed  to remove- Due to'+ _error.message,actionresult:'fail' }),loadspinner({isloaded:false})))
      )
    )
  ))

   
}

