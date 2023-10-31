import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { Countermodel } from 'src/app/shared/store/counter.model';
import { getcounter } from 'src/app/shared/store/counter.selector';
import { appModel } from 'src/app/shared/store/global/app.model';

@Component({
  selector: 'app-counterdisplay',
  templateUrl: './counterdisplay.component.html',
  styleUrls: ['./counterdisplay.component.css']
})
export class CounterdisplayComponent {
counterdisplay!:number;
counterchannel!:string;
countersubscribe !: Subscription;
counter$!:Observable<Countermodel>;
// constructor(private store:Store<{counter:Countermodel}>){}
constructor(private store:Store<appModel>){}
ngOnInit(){
  this.countersubscribe = this.store.select(getcounter).subscribe((data)=>{
    this.counterdisplay = data;
    // this.counterchannel = data.channelname;
    console.log('counter display');
  })

  // this.counter$=this.store.select('counter');
}

ngOnDestroy(){
  if(this.countersubscribe){
    this.countersubscribe.unsubscribe()
  }
}
}
