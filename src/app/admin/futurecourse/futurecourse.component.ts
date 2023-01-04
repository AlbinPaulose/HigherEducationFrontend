import { Component } from '@angular/core';
import { BackEndServiceService } from 'src/app/back-end-service.service';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder } from '@angular/forms'; 
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-futurecourse',
  templateUrl: './futurecourse.component.html',
  styleUrls: ['./futurecourse.component.scss']
})
export class FuturecourseComponent {
 
  constructor(private backendservice: BackEndServiceService, private route: ActivatedRoute,private fb:FormBuilder,private httpservice:HttpClient) {
  }
  myCourses:any[]=[];
  selected = null;
  selectedCourse:any

  selectChangeHandler (event: any) {
    this.selectedCourse = event.target.value;
    console.log(this.selectedCourse);
  }
  FutureCourseRegisterForm = this.fb.group({
    CourseId:[''],
    FutureCourseName:[''],
    FutureCourseType:['']
    
  })

  

  ngOnInit() {
    this.getCourses();
    
  }

  getCourses(){
    this.backendservice.GetCourseData().subscribe((result) => {
      this.myCourses = result;
      console.log(this.myCourses);
    },
    (err: HttpErrorResponse) => {
      console.log (err.message);
    });

  }

  OnSubmit(){
    this.FutureCourseRegisterForm.patchValue({
      CourseId:this.selectedCourse
    })
    console.log(this.FutureCourseRegisterForm.value)
    this.backendservice.InsertfutureCourseData(this.FutureCourseRegisterForm.value)
  }


}
