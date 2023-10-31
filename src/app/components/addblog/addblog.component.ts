import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { addblog, deleteblog, updateblog } from 'src/app/shared/store/blog/blog.action';
import { blogmodel } from 'src/app/shared/store/blog/blog.model';
import { getblogbyid } from 'src/app/shared/store/blog/blog.selector';
import { loadspinner } from 'src/app/shared/store/global/app.action';
import { appModel } from 'src/app/shared/store/global/app.model';

@Component({
  selector: 'app-addblog',
  templateUrl: './addblog.component.html',
  styleUrls: ['./addblog.component.css']
})
export class AddblogComponent implements OnInit {
pagetitle:string='';
ieditid:number=0;
editdata!:blogmodel;
constructor(private dialogref:MatDialogRef<AddblogComponent>,private builder:FormBuilder,
  private store:Store<appModel>,@Inject(MAT_DIALOG_DATA) public data:any){

}
ngOnInit(){
  console.log(this.data);
  this.pagetitle=this.data.title;
  if(this.data.isedit){
    this.ieditid = this.data.id;
    this.store.select(getblogbyid(this.ieditid)).subscribe((data)=>{
      this.editdata = data;
      this.blogform.setValue({
        id:this.editdata.id,
        title:this.editdata.title,
        description:this.editdata.description
      })
    })
  }
}

  blogform=this.builder.group({
    id:this.builder.control(0),
    title:this.builder.control('',Validators.required),
    description:this.builder.control('',Validators.required)
  })
  close(){
    this.dialogref.close();
  }
  saveblogs(){
    
    if(this.blogform.valid){
      const _bloginput:blogmodel={
        id:0,
        title: this.blogform.value.title as string,
        description: this.blogform.value.description as string,
      }


      this.store.dispatch(loadspinner({isloaded:true}));
      setTimeout(() => {
        
  
       
        
        if(this.data.isedit){
          _bloginput.id = this.blogform.value.id as number;
          this.store.dispatch(updateblog({bloginput:_bloginput}))
  
        }else{
          this.store.dispatch(addblog({bloginput:_bloginput}))
  
        }
        
        this.close(); 
      }, 1000);

    }
  }
}
