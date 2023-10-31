import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { getrouterinfo } from 'src/app/shared/store/router/router.selector';

@Component({
  selector: 'app-editblog',
  templateUrl: './editblog.component.html',
  styleUrls: ['./editblog.component.css']
})
export class EditblogComponent {

  editblogid:any=0;

  constructor(private router:ActivatedRoute,private store:Store){}

  ngOnInit(): void {
  //  this.editblogid = this.router.snapshot.paramMap.get('id')
   this.store.select(getrouterinfo).subscribe(item=>{
    this.editblogid=item;
   }) 
  }
}
