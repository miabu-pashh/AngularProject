import { Component, OnInit } from '@angular/core';
import { StudentsService } from '../students.service';

@Component({
  selector: 'app-student-result',
  templateUrl: './student-result.component.html',
  styleUrls: ['./student-result.component.css']
})
export class StudentResultComponent implements OnInit {
  collection:any=[];

  constructor(private student:StudentsService) { }

  ngOnInit(): void {
    
    this.student.getResult().subscribe((result: any)=>{
      console.warn(result)
      this.collection=result;

      // this.collection = result.json();
        // console.log(this.result);
    })
  }

}
