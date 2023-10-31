import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { getspinnerstate } from 'src/app/shared/store/global/app.selector';
// import { getspinnerstate } from 'src/app/shared/store/blog/blog.selector';

@Component({
  selector: 'app-loadingspinner',
  templateUrl: './loadingspinner.component.html',
  styleUrls: ['./loadingspinner.component.css']
})
export class LoadingspinnerComponent {
isloaded=false;
  constructor(private store:Store){}

  ngOnInit(){
    this.store.select(getspinnerstate).subscribe((res)=>{
      this.isloaded = res;
    })
  }
}
