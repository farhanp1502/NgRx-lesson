import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { blogmodel, blogs } from 'src/app/shared/store/blog/blog.model';
import { getblog, getbloginfo } from 'src/app/shared/store/blog/blog.selector';
import { appModel } from 'src/app/shared/store/global/app.model';
import { AddblogComponent } from '../addblog/addblog.component';
import { deleteblog, loadblog } from 'src/app/shared/store/blog/blog.action';
import { MasterService } from 'src/app/shared/master.service';
import { loadspinner } from 'src/app/shared/store/global/app.action';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent {

  constructor(private store: Store<appModel>, private dialog: MatDialog,private masterservice:MasterService,private router:Router) { }
  // constructor(private store:Store<{blog:blogmodel}>){}
  bloglist!: blogmodel[];
  bloginfo!:blogs;
  ngOnInit() {
    this.store.dispatch(loadspinner({isloaded:true}));
    setTimeout(() => {
      

      this.store.dispatch(loadblog())
      this.store.dispatch(loadspinner({isloaded:false}));
      
    }, 1000);
    this.store.select(getbloginfo).subscribe((item) => {
      // getblog
      // this.bloglist = item;
      // console.log(this.bloglist);
      this.bloginfo = item;
    })
  }

  addblog() {
    this.openpopup(0, 'Add blog');
  }
  openpopup(id: number, title: string, isedit = false) {
    this.dialog.open(AddblogComponent, {
      width: '40%',
      data: {
        id: id,
        title: title,
        isedit: isedit
      }
    })
  }

  editblog(id: number) {
    console.log(id);
    this.router.navigate(['blog/edit/'+id])
    // this.openpopup(id, 'edit blog', true)
  }
  removeblog(id: number) {

    this.store.dispatch(loadspinner({isloaded:true}));
    setTimeout(() => {
      

      this.store.dispatch(deleteblog({ id: id }))
      
    }, 1000);
    
    // if (confirm('Are you sure you want to delete the blog?')) {
    // }
  }

}
