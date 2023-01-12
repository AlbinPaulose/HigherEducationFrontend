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
  FutureCoursesDetails:any[]=[]
  myCourses:any[]=[];
  selected = null;
  selectedCourse:any
  sub:any
  futureCourseId:any

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
    this.getFutureCourses();
    
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

  getFutureCourses(){
    this.backendservice.GetFutureCourse().subscribe((result)=>{
      this.FutureCoursesDetails = result;
    },
    (err: HttpErrorResponse) => {
      console.log (err.message);
    });
  }

  deleteFutureCourse(){
    this.sub = this.route.paramMap.subscribe((params)=>{
      this.futureCourseId = params.get('futurecourseid');
      if(confirm('Are you sure?')){
        this.backendservice.DeleteFutureCourse(this.futureCourseId)
        //location.reload();
      }
    })
  }

  OnSubmit(){
    this.FutureCourseRegisterForm.patchValue({
      CourseId:this.selectedCourse
    })
    console.log(this.FutureCourseRegisterForm.value)
    this.backendservice.InsertfutureCourseData(this.FutureCourseRegisterForm.value)
  }


}
