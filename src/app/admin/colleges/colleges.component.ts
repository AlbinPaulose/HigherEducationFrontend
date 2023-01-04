import { Component } from '@angular/core';
import { BackEndServiceService } from 'src/app/back-end-service.service';
import { HttpErrorResponse } from '@angular/common/http';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-colleges',
  templateUrl: './colleges.component.html',
  styleUrls: ['./colleges.component.scss']
})
export class CollegesComponent {
  constructor(private backendservice:BackEndServiceService, public fb:FormBuilder){}
  myCourses:any[]=[];
  myFutureCourse:any[]=[]
  selectedCourse:any
  selectedfutureCourse:any

  collegeRegisterform=this.fb.group({
    courseId:[''],
    futureCourseId:[''],
    collegeName:[''],
    university:[''],
    district:['']
  })

  selectChangeHandler (event: any) {
    this.selectedCourse = event.target.value;
    this.backendservice.GetSortCourse(this.selectedCourse).subscribe((result)=>{
      this.myFutureCourse = result;
      console.log(result);
    })
  }

  selectFutureCourse(event:any){
    this.selectFutureCourse = event.target.value;
    console.log(this.selectFutureCourse);
    this.collegeRegisterform.patchValue({
      futureCourseId:this.selectFutureCourse.toString()
    })

  }
  ngOnInit() {
    this.getCourses();
    
  }

  getCourses(){
    this.backendservice.GetCourseData().subscribe((result) => {
      this.myCourses = result;
    },
    (err: HttpErrorResponse) => {
      console.log (err.message);
    });

  }

  OnSubmit(){
    this.collegeRegisterform.patchValue({
      courseId:this.selectedCourse 
    })
    console.log(this.collegeRegisterform.value)
    this.backendservice.InsertCollegeData(this.collegeRegisterform.value)

  }

}
