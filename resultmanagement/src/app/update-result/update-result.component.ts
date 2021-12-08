import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { StudentsService } from '../students.service';

@Component({
  selector: 'app-update-result',
  templateUrl: './update-result.component.html',
  styleUrls: ['./update-result.component.css']
})
export class UpdateResultComponent implements OnInit {
  alert:boolean=false;
  editStudent=new FormGroup({
    RollNumber:new FormControl(''),
    Name:new FormControl(''),
    DateOfBirth:new FormControl(''),
    Score:new FormControl('')
  })


  constructor(private router:ActivatedRoute,private student:StudentsService) { }

  ngOnInit(): void {
    console.warn(this.router.snapshot.params['id'])
    this.student.getCurrentStudent(this.router.snapshot.params['id'])
    .subscribe((result:any)=>{
      // console.warn("result",result)
      this.editStudent=new FormGroup({
        RollNumber:new FormControl(result['RollNumber']),
        Name:new FormControl(result['Name']),
        DateOfBirth:new FormControl(result['DateOfBirth']),
        Score:new FormControl(result['Score'])

    })
  }
    )
}
collection()
{
  console.warn(this.editStudent.value);
  this.student.updateStudent(this.router.snapshot.params['id'],this.editStudent.value).subscribe((result)=>{
  this.alert=true
  })
  
}
closeAlert()
  {
    this.alert=false
  }

}

