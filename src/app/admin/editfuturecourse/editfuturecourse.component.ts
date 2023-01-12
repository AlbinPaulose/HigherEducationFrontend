import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { BackEndServiceService } from 'src/app/back-end-service.service';

@Component({
  selector: 'app-editfuturecourse',
  templateUrl: './editfuturecourse.component.html',
  styleUrls: ['./editfuturecourse.component.scss']
})
export class EditfuturecourseComponent {
  futurecourseid:any
  EditFutureCourseForm:FormGroup
  constructor(private backendservice:BackEndServiceService,private route:ActivatedRoute,private fb:FormBuilder){
    this.route.paramMap.subscribe((params:ParamMap): void=>{
      this.futurecourseid=params.get('futurecourseid');
    })
    this.EditFutureCourseForm = this.fb.group({
      FutureCourseId:[''],
      CourseId:[''],
      FutureCourseName:[''],
      FutureCourseType:['']
    })
  }

  ngOnInit(){
    this.getFutureCourseDetails();
  }

  getFutureCourseDetails(){
    this.backendservice.GetFutureCourseById(this.futurecourseid).subscribe((result:any)=>{
      this.EditFutureCourseForm.setValue({
        FutureCourseId:result.futureCourseid,
        CourseId:result.courseid,
        FutureCourseName:result.futureCoursename,
        FutureCourseType:result.futureCoursetype
      })
    })
  }

  OnSubmit(){
    this.backendservice.UpdateFutureCourse(this.EditFutureCourseForm.value);
  }
}
