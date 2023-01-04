import { Component,OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { BackEndServiceService } from 'src/app/back-end-service.service';
@Component({
  selector: 'app-courseregister',
  templateUrl: './courseregister.component.html',
  styleUrls: ['./courseregister.component.scss']
})
export class CourseregisterComponent implements OnInit {
  constructor(private fb:FormBuilder,private backendservice:BackEndServiceService){}
  CourseRegisterForm = this.fb.group({
    CourseName:[''],
    CourseType:['']
  })
  OnSubmit(){
    console.log(this.CourseRegisterForm.value)
    this.backendservice.InsertCourseData(this.CourseRegisterForm.value)
   
  }
  ngOnInit():void{}

}
