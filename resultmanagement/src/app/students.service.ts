import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http'
import { map, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})


export class StudentsService {
  url="http://localhost:3000/students"
  rootUrl="http://localhost:3000/"
  collection:any=[];

  constructor(private http:HttpClient) { }
  getList()
  {
    console.warn("some data ")
    return this.http.get(this.url);
  }
  saveStudent(data: any)
  {
    return this.http.post(this.url,data)
  }
  deleteStudent(id:any)
  {
    return this.http.delete(`${this.url}/${id}`)
  }
  getCurrentStudent(id: any)
  {
    return this.http.get(`${this.url}/${id}`)
  }
  updateStudent(id: any,data: any)
  {
    return this.http.put(`${this.url}/${id}`,data)
    .pipe(map((res:any)=>{
      return res;
    }))
  }
  registerUser(data: any)
  {
    return this.http.post(this.rootUrl+"users",data)
  }
  saveResult(data:any)
  {
    // console.warn("service",data)
    this.collection=Array.of(data)
    return data

     //return this.http.post(this.rootUrl,data)
  }
  getResult():Observable<any[]>
  {
    // return this.collection
    console.warn(this.collection)
    return of(this.collection);
    
  }
  
}
