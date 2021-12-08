import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { StudentsService } from '../students.service';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  alert:boolean=false
  register=new FormGroup({
    // name:new FormControl(''),
    email:new FormControl('',Validators.required),
    password:new FormControl('')
  })
  get email(){return this.register.get('email')}

  constructor(private student:StudentsService) { }

  ngOnInit(): void {
  }
  collection()
  {
    console.warn(this.register.value)
    this.student.registerUser(this.register.value).subscribe((result)=>{
      console.warn("result",result)
      this.alert=true
    })
  }
  closeAlert()
  {
    this.alert=false
  }
  

}
