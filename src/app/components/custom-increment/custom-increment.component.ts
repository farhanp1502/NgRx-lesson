import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { customincrement } from 'src/app/shared/store/counter.action';
import { Countermodel } from 'src/app/shared/store/counter.model';
import { getcounterchannel } from 'src/app/shared/store/counter.selector';

@Component({
  selector: 'app-custom-increment',
  templateUrl: './custom-increment.component.html',
  styleUrls: ['./custom-increment.component.css']
})
export class CustomIncrementComponent {
  constructor(private store:Store<{counter:Countermodel}>){}
  inputValue!:number;
  selectedOperation='add';
  counterchannel!:string;
  countersubscribe !: Subscription;
  customincrement(){
    this.store.dispatch(customincrement({value: +this.inputValue,actionvalue: this.selectedOperation}))
  }
  ngOnInit(){
    this.countersubscribe = this.store.select(getcounterchannel).subscribe((data)=>{
      // this.counterdisplay = data.counter;
      this.counterchannel = data;
      console.log('counter custom');
    })
  
    // this.counter$=this.store.select('counter');
  }

  ngOnDestroy(){
    if(this.countersubscribe){
      this.countersubscribe.unsubscribe()
    }
  }
}
