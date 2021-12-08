import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';
import { StudentsService } from '../students.service';

@Component({
  selector: 'app-add-result',
  templateUrl: './add-result.component.html',
  styleUrls: ['./add-result.component.css']
})
export class AddResultComponent implements OnInit {
  alert:boolean=false
  addStudent=new FormGroup({
    RollNumber:new FormControl(''),
    Name:new FormControl(''),
    DateOfBirth:new FormControl(''),
    Score:new FormControl('')
  })

  constructor(private student:StudentsService) { }

  ngOnInit(): void {
  }
  collectStudent()
  {
    
    // console.warn(this.addStudent.value)
    this.student.saveStudent(this.addStudent.value).subscribe((result)=>{
     if(result==null)
     {
      alert("the feilds cant be empty");
     }
     
      console.warn("result is here", result)
      this.alert=true
    this.addStudent.reset({})
    })
    
  }
  closeAlert()
  {
    this.alert=false
  }

}
