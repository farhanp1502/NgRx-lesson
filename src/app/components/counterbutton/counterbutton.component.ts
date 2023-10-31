import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { decrement, increment, rename, reset } from 'src/app/shared/store/counter.action';
import { Countermodel } from 'src/app/shared/store/counter.model';

@Component({
  selector: 'app-counterbutton',
  templateUrl: './counterbutton.component.html',
  styleUrls: ['./counterbutton.component.css']
})
export class CounterbuttonComponent {
constructor(private store:Store<{counter:Countermodel}>){}

  onIncrement(){
    this.store.dispatch(increment())
  }
  onDecrement(){
    this.store.dispatch(decrement())
  }
  onReset(){
    this.store.dispatch(reset())
  }
  onRename(){
    this.store.dispatch(rename({channel:'welcome to learnAnddevelop'}))
  }
}
