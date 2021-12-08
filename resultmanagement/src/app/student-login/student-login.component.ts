import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { StudentsService } from '../students.service';

@Component({
  selector: 'app-student-login',
  templateUrl: './student-login.component.html',
  styleUrls: ['./student-login.component.css']
})
export class StudentLoginComponent implements OnInit {
  // addStudent=new FormGroup({
  //   rollNumber:new FormControl(''),
  //   name: new FormControl(''),
  // })
  // constructor(private student:StudentsService) { }
  // ngOnInit():void{

  // }
  // collectStudent()
  // {
  //   this.student.saveResult(this.addStudent.value)
  // }

  public slogin!:FormGroup;
  constructor(private FormBuilder:FormBuilder,private http:HttpClient,private router:Router,private student:StudentsService) { }
  ngOnInit(): void {
    this.slogin=this.FormBuilder.group({
      rollNumber:[''],
      name:['']
    })
  }
  loginForm()
  {

    this.http.get<any>("http://localhost:3000/students")
    .subscribe(res=>{
      const user: any[]=res.find((a:any)=>{
        
        return a.RollNumber === this.slogin.value.rollNumber && a.Name === this.slogin.value.name
        
      });
      // const maibu:any[]=user
      // console.warn(user)
      this.student.saveResult(user)
    
      if(user){
        alert("Login Success");
        this.slogin.reset();
        this.router.navigate(['studentResult'])
        console.warn(user);
        
      }else{
        alert("user not found");
      }
    },err=>{
      alert("something went wrong..!!")
    })
    
  }

}
