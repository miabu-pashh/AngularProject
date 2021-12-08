import { Component, OnInit } from '@angular/core';
import { StudentsService } from '../students.service';


@Component({
  selector: 'app-list-result',
  templateUrl: './list-result.component.html',
  styleUrls: ['./list-result.component.css']
})
export class ListResultComponent implements OnInit {

  constructor(private student:StudentsService) { }
  collection:any=[];
  ngOnInit(): void {
    this.student.getList().subscribe((result)=>{
      console.warn(result)
      this.collection=result
    })
  }
  deleteStudent(item: number)
  {
    this.collection.splice(item-1,1)
    this.student.deleteStudent(item).subscribe((result)=>{
      location.reload();
      console.warn("result",result)
    })
  }

}
