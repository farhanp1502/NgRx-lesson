import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { exhaustMap, map } from "rxjs";
import { showalert } from "./app.action";

@Injectable()
export class AppEffects {
    constructor(private actions$:Actions,private _snackbar:MatSnackBar){}

    _showalert = createEffect(()=>
   this.actions$.pipe(
    ofType(showalert),
    exhaustMap((action) => {
      return this.showsnackbaralert(action.message,action.actionresult)
      .afterDismissed()
      .pipe(
        map(()=>{
          return this.EmptyAction();
        })
      )
    })
   )
   )


  showsnackbaralert(message:string,actionresult:string='fail'){
    let _class = actionresult === 'pass' ? 'green-snackbar':'red-snackbar';
   return this._snackbar.open(message,'ok',{
      verticalPosition:"top",
      horizontalPosition:"end",
      panelClass:[_class],
      duration:3000
    })
  }
   EmptyAction(): any {
    throw new Error("Function not implemented.");
  }
}