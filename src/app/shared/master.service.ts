import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { blogmodel } from './store/blog/blog.model';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  constructor(private http:HttpClient) { }

  getblogs():Observable<blogmodel[]>{
   return this.http.get<blogmodel[]>("http://localhost:3000/blogs")
  }
  createblog(bloginput:blogmodel){
    return this.http.post('http://localhost:3000/blogs',bloginput).pipe(
      tap(()=>{
        this.http.get<blogmodel>("http://localhost:3000/blogs?_limit=1&_sort=id&_order=desc")
      })
    )
  }

 updateblog(bloginput:blogmodel){
    return this.http.put('http://localhost:3000/blogs/'+bloginput.id,bloginput)
  }
  deleteblog(blogid:number){
    return this.http.delete('http://localhost:3000/blogs/'+blogid)
  }

}
