import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { BackEndServiceService } from 'src/app/back-end-service.service';

@Component({
  selector: 'app-editcourse',
  templateUrl: './editcourse.component.html',
  styleUrls: ['./editcourse.component.scss']
})
export class EditcourseComponent {
  courseid:any
  EditCourseForm:FormGroup
  constructor(private backendservice:BackEndServiceService,private route:ActivatedRoute,private fb:FormBuilder){
    this.route.paramMap.subscribe((params:ParamMap)=>{
      this.courseid=params.get('courseid');
    })
    this.EditCourseForm = this.fb.group({
      CourseId:[''],
      CourseName:[''],
      CourseType:['']
    })
  }

  ngOnInit(){
    this.getCourseDetails();
  }

  getCourseDetails(){
    this.backendservice.GetCourseById(this.courseid).subscribe((result:any)=>{
      this.EditCourseForm.setValue({
        CourseId:result.courseId,
        CourseName:result.courseName,
        CourseType:result.courseType
      })
    })
  }

  OnSubmit(){
    this.backendservice.UpdateCourse(this.EditCourseForm.value);
  }
}
